import React from "react";


export const PaisesFavoritados = () =>{
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                border: "3px solid #e4e4e4",
                borderRadius: "10px"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>Países favoritos</h1>
                <table className="quadro-medalhas">
                    <thead>
                    <tr>
                        <th>País</th>
                        <th>
                            Ouro <div className="gold"></div>
                        </th>
                        <th>
                            Prata <div className="silver"></div>
                        </th>
                        <th>
                            Bronze <div className="bronze"></div>
                        </th>
                        <th>Total</th>
                        <th>Ações</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style={{
                            textAlign: "start"
                        }}>
                            <img src="https://s.sde.globo.com/media/nationalities/Brasil-65.png" alt=""/>
                            Brasil
                        </td>
                        <td>2</td>
                        <td>7</td>
                        <td>5</td>
                        <td>3</td>
                        <td>
                            <button className="mytooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                                </svg>
                                <span className="tooltiptext">Parar de receber notificações</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            textAlign: "start"
                        }}>
                            <img
                                src="https://s.sde.globo.com/media/nationalities/Estados_Unidos-65.png"
                                alt=""
                            />
                            Estados Unidos
                        </td>
                        <td>5</td>
                        <td>4</td>
                        <td>3</td>
                        <td>12</td>
                        <td>
                            <button className="mytooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                                </svg>
                                <span className="tooltiptext">Parar de receber notificações</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            textAlign: "start"
                        }}>
                            <img
                                src="https://s.sde.globo.com/media/nationalities/China-65.png"
                                alt=""
                            />
                            China
                        </td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>9</td>
                        <td>
                            <button className="mytooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                                </svg>
                                <span className="tooltiptext">Parar de receber notificações</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            textAlign: "start"
                        }}>
                            <img
                                src="https://s.sde.globo.com/media/nationalities/Estônia-65.png"
                                alt=""
                            />
                            Estônia
                        </td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>9</td>
                        <td>
                            <button className="mytooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                                </svg>
                                <span className="tooltiptext">Parar de receber notificações</span>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td style={{
                            textAlign: "start"
                        }}>
                            <img
                                src="https://s.sde.globo.com/media/nationalities/Rep._Tcheca-65_6DTVHyq.png"
                                alt=""
                            />
                            República Tcheca
                        </td>
                        <td>4</td>
                        <td>3</td>
                        <td>2</td>
                        <td>9</td>
                        <td>
                            <button className="mytooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path
                                        d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/>
                                </svg>
                                <span className="tooltiptext">Parar de receber notificações</span>
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}