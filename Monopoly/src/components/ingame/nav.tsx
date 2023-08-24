import PlayersIcon from "../../../public/players.png";
import ChatIcon from "../../../public/chat.png";
import NChatIcon from "../../../public/chat_new.png";
import LeaveIcon from "../../../public/leave1.png";
import PropretiesIcon from "../../../public/proprety.png";
import SettingsIcon from "../../../public/settings.png";
import MonopolyIcon from "../../../public/icon.png";

import { forwardRef, useState, useImperativeHandle, useEffect, useRef } from "react";
import { Player } from "../../assets/player.ts";
import { Server, Socket } from "../../assets/websockets.ts";
import PropretyTab, { PropretyTabRef } from "./propretyTab.tsx";
import PlayersTab, { PlayersTabRef } from "./playersTab.tsx";
import SettingsNav from "../settingsNav.tsx";

interface MonopolyNavProps {
    name: string;
    socket: Socket;
    players: Array<Player>;
    currentTurn: string;
    server: Server | undefined;
    callServer: () => void;
}
export interface MonopolyNavRef {
    addMessage: (arg: { from: string; message: string }) => void;
    reRenderPlayerList: () => void;
    clickedOnBoard: (a: number) => void;
}

const MonopolyNav = forwardRef<MonopolyNavRef, MonopolyNavProps>((prop, ref) => {
    const [tabIndex, SetTab] = useState<number>(0);
    const [messages, SetMessages] = useState<Array<{ from: string; message: string }>>([]);

    function reRenderPlayerList() {
        SetDisplays(prop.players);
    }

    const [displayPlayers, SetDisplays] = useState<Array<Player>>(prop.players);
    useImperativeHandle(ref, () => ({
        addMessage(arg) {
            SetMessages((old) => [...old, arg]);
            if (tabIndex !== 2) {
                const iconElement = document.getElementById("chatIconChange") as HTMLDivElement;
                const imageElement = iconElement.querySelector("img") as HTMLImageElement;
                imageElement.style.animation = "spin3 2s cubic-bezier(.68,.05,.49,.95) infinite";
                imageElement.src = NChatIcon.replace("/public", "");
                iconElement.onclick = () => {
                    imageElement.src = ChatIcon.replace("/public", "");
                    imageElement.style.animation = "";
                    SetTab(2);
                    iconElement.onclick = () => {
                        SetTab(2);
                    };
                };
            }
        },
        reRenderPlayerList,
        clickedOnBoard: (a) => {
            SetTab(1);
            requestAnimationFrame(() => {
                propretyRef.current?.clickedOnBoard(a);
            });
        },
    }));

    const propretyRef = useRef<PropretyTabRef>(null);
    const playersRef = useRef<PlayersTabRef>(null);

    useEffect(reRenderPlayerList, [prop.players.map((v) => v.properties), prop.players.map((v) => v.balance)]);

    useEffect(() => {
        const keyDownHandle = (e: KeyboardEvent) => {
            const x = parseInt(e.key);
            if (!isNaN(x)) {
                const activeElement = document.activeElement;
                if (activeElement === null) SetTab(x - 1);
                else if (activeElement.tagName !== "INPUT") {
                    SetTab(x - 1);
                }
            }
        };
        document.addEventListener("keydown", keyDownHandle);
        return () => {
            document.removeEventListener("keydown", keyDownHandle);
        };
    }, []);

    return (
        <nav className="main">
            <nav className="header">
                <img style={{ marginTop: 75 }} className="header" src={MonopolyIcon.replace("public/", "")} />
                <div className="upper">
                    <div data-selected={tabIndex == 0} onClick={() => SetTab(0)} data-tooltip-hover="players" className="button">
                        <img src={PlayersIcon.replace("public/", "")} alt="" />
                    </div>

                    <div data-selected={tabIndex == 1} onClick={() => SetTab(1)} data-tooltip-hover="propreties" className="button">
                        <img src={PropretiesIcon.replace("public/", "")} alt="" />
                    </div>

                    <div data-selected={tabIndex == 2} onClick={() => SetTab(2)} data-tooltip-hover="chat" className="button" id="chatIconChange">
                        <img src={ChatIcon.replace("public/", "")} alt="" />
                    </div>
                    <div
                        data-selected={tabIndex === 3}
                        onClick={() => {
                            SetTab(3);
                        }}
                        data-tooltip-hover="trades"
                        className="button"
                    >
                        <img src="morgage.png" alt="" />
                    </div>
                    <div
                        data-selected={tabIndex === 4}
                        onClick={() => {
                            SetTab(4);
                        }}
                        data-tooltip-hover="history"
                        className="button"
                    >
                        <img src="history.png" alt="" />
                    </div>
                    {prop.server !== undefined ? (
                        <div data-selected={false} onClick={() => prop.callServer()} data-tooltip-hover="server" className="button">
                            <img src="server.png" alt="" />
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="lower">
                    <div data-selected={tabIndex == 5} onClick={() => SetTab(5)} data-tooltip-hover="settings" className="button">
                        <img src={SettingsIcon.replace("public/", "")} alt="" />
                    </div>
                    <div
                        data-tooltip="leave"
                        className="button color"
                        data-tooltip-hover="leave"
                        onClick={() => {
                            document.location.reload();
                        }}
                    >
                        <img src={LeaveIcon.replace("public/", "")} alt="" />
                    </div>
                </div>
            </nav>

            <nav className="content" data-index={tabIndex > 5 ? 0 : tabIndex < 0 ? 0 : tabIndex}>
                {tabIndex == 1 ? (
                    <PropretyTab ref={propretyRef} players={displayPlayers} socket={prop.socket} />
                ) : tabIndex == 2 ? (
                    <>
                        <h3 style={{ textAlign: "center" }}>Chat</h3>
                        <div className="main-chat">
                            <div className="messages">
                                {messages.map((v, i) => (
                                    <div key={i} className="message">
                                        <p>{v.from}:</p>
                                        <p>{v.message}</p>
                                    </div>
                                ))}
                            </div>
                            <input
                                placeholder="Type Message Here..."
                                type="text"
                                onKeyDown={(e) => {
                                    if (e.which === 13 && e.currentTarget.value.length > 0) {
                                        //send the message
                                        const message = e.currentTarget.value;

                                        prop.socket.emit("message", message);
                                        e.currentTarget.value = "";
                                    }
                                }}
                            />
                        </div>
                    </>
                ) : tabIndex === 3 ? (
                    <>
                        <h3 style={{ textAlign: "center" }}>Trades</h3>
                    </>
                ) : tabIndex == 4 ? (
                    <>
                        <h3 style={{ textAlign: "center" }}>History</h3>
                    </>
                ) : tabIndex == 5 ? (
                    <SettingsNav />
                ) : (
                    <PlayersTab
                        ref={playersRef}
                        clickedOnPlayer={(position) => {
                            SetTab(1);
                            requestAnimationFrame(() => {
                                propretyRef.current?.clickedOnBoard(position);
                            });
                        }}
                        players={displayPlayers}
                        socket={prop.socket}
                        currentTurn={prop.currentTurn}
                    />
                )}
            </nav>
        </nav>
    );
});
export default MonopolyNav;