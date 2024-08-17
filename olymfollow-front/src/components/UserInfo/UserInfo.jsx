import React from "react";
import "./UserInfo.css"


export const UserInfo = ({nome, email, userImage}) => {
    return (
        <>
            <h3>Minha Conta</h3>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    border: "3px solid #e4e4e4",
                    borderRadius: "10px",
                    width: "700px",
                    height: "120px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        backgroundColor: "#e4e4e4",
                        borderRadius: "10px",
                        width: "700px",
                        margin: "10px"
                    }}
                >
                    <div className={"userRow"}>
                        <img
                            style={{
                                width: "75px",
                                height: "75px"
                            }}
                            src={userImage} alt="User Profile Image"/>
                        <div style={{
                            display: "block"
                        }}>
                            <div style={{
                                display: "flex",
                                marginTop: "10px"
                            }}>
                                <p><strong>Nome:</strong></p>
                                <p>{nome}</p>
                            </div>
                            <div style={{
                                display: "flex"

                            }}>
                                <p><strong>E-mail:</strong></p>
                                <p>{email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}