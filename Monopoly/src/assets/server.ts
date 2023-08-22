import axios from "axios";
import ENV from "../../env.json";
import { Socket, Server } from "./websockets";
import monopolyJSON from './monopoly.json';
class Player {
    public id: string;
    public username: string;
    public icon: number;
    public position: number;
    public balance: number;
    public properties: Array<any>;
    public isInJail: boolean;
    public jailTurnsRemaining: number;
    public getoutCards: number;
    constructor(_id: string, _name: string, _icon: number) {
        this.id = _id;
        this.username = _name;
        this.icon = _icon;
        this.position = 0;
        this.balance = 1500;
        this.properties = [];
        this.isInJail = false;
        this.jailTurnsRemaining = 0;
        this.getoutCards = 0;
    }

    to_json(): PlayerJSON {
        return {
            id: this.id,
            username: this.username,
            icon: this.icon,
            position: this.position,
            balance: this.balance,
            properties: this.properties,
            isInJail: this.isInJail,
            jailTurnsRemaining: this.jailTurnsRemaining,
            getoutCards: this.getoutCards,
        };
    }

    from_json(json: PlayerJSON) {
        if (this.id == json.id) {
            this.position = json.position;
            this.balance = json.balance;
            this.properties = json.properties;
            this.isInJail = json.isInJail;
            this.jailTurnsRemaining = json.jailTurnsRemaining;
            this.getoutCards = json.getoutCards;
        }
    }
}

type PlayerJSON = {
    id: string;
    username: string;
    icon: number;
    position: number;
    balance: number;
    properties: Array<any>;
    isInJail: boolean;
    jailTurnsRemaining: number;
    getoutCards: number;
};

export async function main(playersCount:number,f?: (host: string) => void) {
    //#region Setup
    const CodeAPI = () => {
        async function Read() {
            try {
                const response = await axios.get(`${ENV.JSONBin.url}/latest`, {
                    headers: {
                        "X-Master-Key": ENV.JSONBin.masterKey,
                        "X-Access-Key": ENV.JSONBin.accessKey,
                    },
                });
                return response.data.record;
            } catch (error) {
                console.error("Error reading data:", error);
            }
        }

        async function Write(ob: any) {
            try {
                await axios.put(`${ENV.JSONBin.url}`, ob, {
                    headers: {
                        "Content-Type": "application/json",
                        "X-Master-Key": ENV.JSONBin.masterKey,
                        "X-Access-Key": ENV.JSONBin.accessKey,
                    },
                });
            } catch (error) {
                console.error("Error writing data:", error);
            }
        }
        async function Delete(code: string) {
            const x = await Read();
            if (Object.keys(x).includes(code)) {
                delete x[code];
            }
            await Write(x);
        }
        async function Clear(){
            await Write({"clear":new Date().toISOString()});
        }

        async function Generate(addr: string) {
            function generateRandomCode(length: number) {
                const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                let code = "";

                for (let i = 0; i < length; i++) {
                    const randomIndex = Math.floor(
                        Math.random() * charset.length
                    );
                    code += charset[randomIndex];
                }

                return code;
            }

            var code = generateRandomCode(6);
            const x = await Read();

            while (Object.keys(x).includes(code)) {
                code = generateRandomCode(6);
            }
            const serverIP = addr;

            const value = { host: serverIP, mode: "p2p" } as {
                host: string;
                mode: "p2p" | "io";
            };
            if (Object.values(x).includes(value)) {
                for (const a of Object.entries(x)) {
                    if (a[1] === value) {
                        delete x[a[0]];
                    }
                }
            }
            x[code] = value;
            await Write(x);

            return code;
        }

        return {
            Write,
            Read,
            Delete,
            Generate,
            Clear
        };
    };

    const maxPlayers =
    playersCount > 0 ? Math.min(playersCount, 6) : 6;
    console.log(`Max Players is ${maxPlayers}...\n`);

    interface Client {
        player: Player;
        socket: Socket;
        ready: boolean;
        positions: { x: number; y: number };
    }

    const Clients = new Map<string, Client>();
    const logs_strings: Array<string> = [];

    //#region Game Variables!
    let currentId: string = "";
    let gameStarted: boolean = false;
    let selectedMode: number = 0;

    //#endregion
    // Io

    function getCurrentTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const currentTime = `${hours}:${minutes}`;

        return currentTime;
    }

    //#region emits functions
    function EmitAll(event: string, args: any) {
        for (const x of Array.from(Clients.values())) {
            x.socket.emit(event, args);
        }
    }

    function EmitExcepts(id: string, event: string, args: any) {
        for (const x of Array.from(Clients.entries())) {
            if (x[0] != id) {
                x[1].socket.emit(event, args);
            }
        }
    }
    //#endregion

    //#endregion
    //#region Game Logic
    new Server(
        async (id) => {
            // await CodeAPI().Clear();
            var _code = await CodeAPI().Generate(id);

            window.addEventListener('beforeunload', async ()=>{
                // dont work
                await CodeAPI().Delete(_code);
                
            });

            f?.(_code);
        },
        (socket: Socket) => {
            const ctp = gameStarted ? 1 : Clients.size >= maxPlayers ? 2 : 0;
            console.log("emitiing state");
            socket.emit("state", ctp);
            if (ctp === 0) {
                // Handle name event
                socket.on("name", (name: string) => {
                    try {
                        const player = new Player(
                            socket.id,
                            name,
                            Array.from(Clients.keys()).length
                        );

                        // handle current id =>
                        if (
                            currentId === "" ||
                            !Array.from(Clients.keys()).includes(currentId)
                        ) {
                            currentId = socket.id;
                        }
                        Clients.set(socket.id, {
                            player: player,
                            socket: socket,
                            ready: false,
                            positions: { x: 0, y: 0 },
                        });
                        console.log(
                            `{${getCurrentTime()}} [${socket.id}] Player "${
                                player.username
                            }" has connected.`
                        );
                        logs_strings.push(
                            `{${getCurrentTime()}} [${socket.id}] Player "${
                                player.username
                            }" has connected.`
                        );
                        const other_players = [];
                        for (const x of Array.from(Clients.values())) {
                            other_players.push(x.player.to_json());
                        }
                        socket.emit("initials", {
                            turn_id: currentId,
                            other_players,
                        });
                        EmitExcepts(socket.id, "new-player", player.to_json());

                        // handle all events from here on!
                        // game sockets
                        socket.on("unjail", (option: "card" | "pay") => {
                            try {
                                EmitAll("unjail", {
                                    to: player.id,
                                    option,
                                });
                            } catch (e) {
                                console.log(e);
                            }
                        });
                        socket.on("roll_dice", () => {
                            try {
                                const first = Math.floor(Math.random() * 6) + 1;
                                const second =
                                    Math.floor(Math.random() * 6) + 1;

                                const x = `{${getCurrentTime()}} [${
                                    socket.id
                                }] Player "${
                                    player.username
                                }" rolled a [${first},${second}].`;
                                logs_strings.push(x);
                                console.log(x);
                                const sum = first + second;
                                var pos = (player.position + sum) % 40;
                                EmitAll("dice_roll_result", {
                                    listOfNums: [first, second, pos],
                                    turnId: currentId,
                                });
                            } catch (e) {
                                console.log(e);
                            }
                        });
                        // chest or chance
                        socket.on("chorch_roll", (is_chance) => {
                            try {
                                const arr = is_chance
                                    ? monopolyJSON.chance
                                    : monopolyJSON.communitychest;
                                const randomElement =
                                    arr[Math.floor(Math.random() * arr.length)];

                                EmitAll("chorch_result", {
                                    element: randomElement,
                                    is_chance,
                                    turnId: currentId,
                                });
                            } catch (e) {
                                console.log(e);
                            }
                        });
                        socket.on("finish-turn", (playerInfo: PlayerJSON) => {
                            try {
                                player.from_json(playerInfo);
                                if (currentId != socket.id) return;
                                const arr = Array.from(Clients.values())
                                    .filter((v) => v.player.balance > 0)
                                    .map((v) => v.player.id);
                                var i = arr.indexOf(socket.id);
                                i = (i + 1) % arr.length;
                                currentId = arr[i];

                                EmitAll("turn-finished", {
                                    from: socket.id,
                                    turnId: currentId,
                                    pJson: player.to_json(),
                                });
                            } catch (e) {
                                console.log(e);
                            }
                        });

                        socket.on("message", (message: string) => {
                            try {
                                console.log(
                                    `{${getCurrentTime()}} [${
                                        socket.id
                                    }] Player "${
                                        Clients.get(socket.id)?.player.username
                                    }" has messaged "${message}".`
                                );
                                EmitAll("message", {
                                    from: player.username,
                                    message: message,
                                });
                            } catch (e) {
                                console.log(e);
                            }
                        });

                        socket.on(
                            "pay",
                            (args: {
                                balance: number;
                                from: string;
                                to: string;
                            }) => {
                                try {
                                    const top = Clients.get(args.to)?.player;
                                    const fromp = Clients.get(
                                        args.from
                                    )?.player;
                                    if (top === undefined) return;
                                    top.balance += args.balance;
                                    if (fromp === undefined) return;
                                    fromp.balance -= args.balance;
                                    EmitAll("member_updating", {
                                        playerId: args.to,
                                        animation: "recieveMoney",
                                        additional_props: [args.from],
                                        pJson: [top.to_json(), fromp.to_json()],
                                    });
                                } catch (e) {
                                    console.log(e);
                                }
                            }
                        );

                        socket.on("mouse", (args: { x: number; y: number }) => {
                            const client = Clients.get(socket.id);
                            if (client === undefined) return;
                            client.positions = args;
                            Clients.set(socket.id, client);

                            EmitExcepts(socket.id, "mouse", {
                                id: socket.id,
                                x: args.x,
                                y: args.y,
                            });
                        });
                    } catch (e) {
                        console.log(e);
                    }
                });
                socket.on(
                    "ready",
                    (args: { ready?: boolean; mode?: number }) => {
                        try {
                            const client = Clients.get(socket.id);
                            if (client === undefined) return;
                            if (args.ready !== undefined) {
                                client.ready = args.ready;
                            }
                            if (args.mode !== undefined) {
                                selectedMode = args.mode;
                            }
                            Clients.set(socket.id, client);

                            // Check if everyone Ready!

                            const readys = Array.from(Clients.values()).map(
                                (v) => v.ready
                            );
                            EmitAll("ready", {
                                id: socket.id,
                                state: client.ready,
                                selectedMode,
                            });
                            if (!readys.includes(false)) {
                                console.log(
                                    `Game has Started, No more Players can join the Server`,Array.from(Clients.keys())
                                );
                                gameStarted = true;
                                EmitAll("start-game", {});
                            }
                        } catch (e) {
                            console.log(e);
                        }
                    }
                );
            } else {
                socket.disconnect();
            }

            // Handle disconnect event
            socket.on("disconnect", () => {
                try {
                    if (Clients.has(socket.id)) {
                        console.log(
                            `{${getCurrentTime()}} [${socket.id}] Player "${
                                Clients.get(socket.id)?.player.username
                            }" has disconnected.`
                        );
                        logs_strings.push(
                            `{${getCurrentTime()}} [${socket.id}] Player "${
                                Clients.get(socket.id)?.player.username
                            }" has disconnected.`
                        );
                    }
                    Clients.delete(socket.id);
                    if (currentId === socket.id) {
                        const arr = Array.from(Clients.values())
                            .filter((v) => v.player.balance > 0)
                            .map((v) => v.player.id);
                        var i = arr.indexOf(socket.id);
                        i = (i + 1) % arr.length;
                        currentId = arr[i];
                    }
                    EmitAll("disconnected-player", {
                        id: socket.id,
                        turn: currentId,
                    });

                    if (Array.from(Clients.keys()).length === 0) {
                        if (gameStarted)
                            console.log(
                                "Game has Ended. Server is currently Open to new Players"
                            );
                        gameStarted = false;
                    }
                } catch (e) {
                    console.log(e);
                }
            });
        }
    );


}
