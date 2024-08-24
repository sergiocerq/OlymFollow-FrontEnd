import OlympicRings from "../../assets/Olympic_rings.svg";
import "./navbar.css";
import {useNavigate} from "react-router-dom";
import {SelectPaises} from "../Paises/SelectPaises.jsx";
import {SelectTipoMedalha} from "../Medalhas/SelectTipoMedalha.jsx";
import {useMedalha} from "../Medalhas/MedalhasHook.jsx";
import {useState} from "react";
import {Loader} from "../loader/Loader.jsx";

/**
 * @description Componente NavBar para exibir a barra de navegação do olympicsfollow.
 *
 * @param {Object} props  Propriedades que definem se um usuário é admin ou não.
 *
 * @example
 * <NavBar />
 * 
 * @returns {JSX.Element} O JSX do componente NavBar.
 */
export const NavBar = ({isAdmin}) => {
    const hasToken = sessionStorage.getItem("token");
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const { medalha, setMedalha, handleSubmit} = useMedalha();
    
    const setTipoMedalha= (tipoMedalha) => {
        setMedalha({...medalha, tipoMedalha: tipoMedalha})
    }

    const setCountryID = (countryID) => {
        setMedalha({...medalha, countryID: countryID})
    }

    return (
        <>
            <dialog id="dialog-logout" style={{
                top: "10%",
                left: "10%"
            }}>
                <div className="content">
                    <span className="title">Deseja sair da conta?</span>
                    <br/>
                    <br/>
                    <div className="actions">
                        <div style={{display: "flex"}}>
                            <button onClick={() => document.getElementById('dialog-logout').close()}
                                    className="unsubscribe">Não
                            </button>
                            <button onClick={() => {
                                sessionStorage.removeItem("token");
                                document.getElementById('dialog-logout').close()
                                navigate("/")
                            }} className="unsubscribe">Sim
                            </button>
                        </div>
                    </div>
                </div>
            </dialog>
            <dialog id="dialog-medal" className={"dialog-medal"} style={{
                top: "30%",
                left: "30%",
                width: "30%"
            }}>
                <button type="button" className="close" onClick={() => {
                    document.getElementById('dialog-medal').close()
                }}>
                    <svg style={{
                        margin: "5px;"
                    }} aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className="content">
                    <h3>Cadastrar Nova Medalha</h3>
                    <SelectTipoMedalha setTipoMedalha={setTipoMedalha}/>

                    <input type="text" name="" id="" placeholder={"Digite o nome do atleta"} onChange={(e) =>{
                        setMedalha({...medalha, nomeAtleta: e.target.value})
                    }}/>

                    <SelectPaises setCountryID={setCountryID}/>
                    <input type="text" name="" id="" placeholder={"Digite o esporte"} onChange={(e) =>{
                        setMedalha({...medalha, esporte: e.target.value})
                    }}/>
                    {isLoading ? <div style={{
                        padding: "30px",
                        display: "flex",
                        justifyContent: "center"
                    }}><Loader/></div> : <div className="actions">
                        <a onClick={() => handleSubmit(setIsLoading)} className="unsubscribe">Cadastrar</a>
                    </div>}
                </div>
            </dialog>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <nav className="nav-bar">
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <button onClick={() => navigate(-1)}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 448 512">
                                <path
                                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                            </svg>
                        </button>
                        <img width={100} src={OlympicRings} alt="Logo OlympicsFollow"/>
                    </div>
                    <div className="div-items-nav-bar">
                        {isAdmin === true && (<p onClick={() => {
                            document.getElementById('dialog-medal').showModal();
                        }}>
                            Adicionar Medalha
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
                            </svg>
                        </p>)}
                        {hasToken && (
                            <div className="dropdown">
                                <button className="dropbtn">Conta
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
                                    </svg>
                                </button>
                                <div className="dropdown-content">
                                    <button onClick={() => navigate("/settings")}>Config.
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path
                                                d="M308.5 135.3c7.1-6.3 9.9-16.2 6.2-25c-2.3-5.3-4.8-10.5-7.6-15.5L304 89.4c-3-5-6.3-9.9-9.8-14.6c-5.7-7.6-15.7-10.1-24.7-7.1l-28.2 9.3c-10.7-8.8-23-16-36.2-20.9L199 27.1c-1.9-9.3-9.1-16.7-18.5-17.8C173.9 8.4 167.2 8 160.4 8l-.7 0c-6.8 0-13.5 .4-20.1 1.2c-9.4 1.1-16.6 8.6-18.5 17.8L115 56.1c-13.3 5-25.5 12.1-36.2 20.9L50.5 67.8c-9-3-19-.5-24.7 7.1c-3.5 4.7-6.8 9.6-9.9 14.6l-3 5.3c-2.8 5-5.3 10.2-7.6 15.6c-3.7 8.7-.9 18.6 6.2 25l22.2 19.8C32.6 161.9 32 168.9 32 176s.6 14.1 1.7 20.9L11.5 216.7c-7.1 6.3-9.9 16.2-6.2 25c2.3 5.3 4.8 10.5 7.6 15.6l3 5.2c3 5.1 6.3 9.9 9.9 14.6c5.7 7.6 15.7 10.1 24.7 7.1l28.2-9.3c10.7 8.8 23 16 36.2 20.9l6.1 29.1c1.9 9.3 9.1 16.7 18.5 17.8c6.7 .8 13.5 1.2 20.4 1.2s13.7-.4 20.4-1.2c9.4-1.1 16.6-8.6 18.5-17.8l6.1-29.1c13.3-5 25.5-12.1 36.2-20.9l28.2 9.3c9 3 19 .5 24.7-7.1c3.5-4.7 6.8-9.5 9.8-14.6l3.1-5.4c2.8-5 5.3-10.2 7.6-15.5c3.7-8.7 .9-18.6-6.2-25l-22.2-19.8c1.1-6.8 1.7-13.8 1.7-20.9s-.6-14.1-1.7-20.9l22.2-19.8zM112 176a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM504.7 500.5c6.3 7.1 16.2 9.9 25 6.2c5.3-2.3 10.5-4.8 15.5-7.6l5.4-3.1c5-3 9.9-6.3 14.6-9.8c7.6-5.7 10.1-15.7 7.1-24.7l-9.3-28.2c8.8-10.7 16-23 20.9-36.2l29.1-6.1c9.3-1.9 16.7-9.1 17.8-18.5c.8-6.7 1.2-13.5 1.2-20.4s-.4-13.7-1.2-20.4c-1.1-9.4-8.6-16.6-17.8-18.5L583.9 307c-5-13.3-12.1-25.5-20.9-36.2l9.3-28.2c3-9 .5-19-7.1-24.7c-4.7-3.5-9.6-6.8-14.6-9.9l-5.3-3c-5-2.8-10.2-5.3-15.6-7.6c-8.7-3.7-18.6-.9-25 6.2l-19.8 22.2c-6.8-1.1-13.8-1.7-20.9-1.7s-14.1 .6-20.9 1.7l-19.8-22.2c-6.3-7.1-16.2-9.9-25-6.2c-5.3 2.3-10.5 4.8-15.6 7.6l-5.2 3c-5.1 3-9.9 6.3-14.6 9.9c-7.6 5.7-10.1 15.7-7.1 24.7l9.3 28.2c-8.8 10.7-16 23-20.9 36.2L315.1 313c-9.3 1.9-16.7 9.1-17.8 18.5c-.8 6.7-1.2 13.5-1.2 20.4s.4 13.7 1.2 20.4c1.1 9.4 8.6 16.6 17.8 18.5l29.1 6.1c5 13.3 12.1 25.5 20.9 36.2l-9.3 28.2c-3 9-.5 19 7.1 24.7c4.7 3.5 9.5 6.8 14.6 9.8l5.4 3.1c5 2.8 10.2 5.3 15.5 7.6c8.7 3.7 18.6 .9 25-6.2l19.8-22.2c6.8 1.1 13.8 1.7 20.9 1.7s14.1-.6 20.9-1.7l19.8 22.2zM464 304a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                                        </svg>
                                    </button>
                                    <button onClick={() => {
                                        document.getElementById('dialog-logout').showModal()
                                    }}> Sair <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path
                                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                                    </svg></button>
                                </div>
                            </div>
                        )}
                    </div>
                    {!hasToken && (
                        <div
                            style={{
                                display: "flex",
                                gap: "2rem",
                            }}
                        >
                            <button className="button-login" onClick={() => navigate("/login")}>
                                Login
                            </button>
                            <button
                                className="button-login"
                                onClick={() => navigate("/register")}
                                style={{padding: "0 4rem"}}
                            >
                                Cadastrar
                            </button>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
};
