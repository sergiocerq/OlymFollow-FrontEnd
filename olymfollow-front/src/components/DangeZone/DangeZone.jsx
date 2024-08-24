import React from "react";
import { FetcherFactory } from "../../data/fetchers/FetcherFactory.js";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { styleToastError } from "../../styles.js";

const fecherFactory = new FetcherFactory();

/**
 * 
 * @description Componente que renderiza a zona de perigo, onde o usuário pode deletar sua conta.
 * @name DangerZone
 */
export const DangerZone = () => {
  const navigate = useNavigate();

    /**
     * 
     * @description Função que deleta a conta do usuário.
     * @name deleteUser
     */
  const deleteUser = async () => {
    const userFetcher = fecherFactory.createUserFetcher();
    await userFetcher.deleteUserById();
    sessionStorage.removeItem("token");
    navigate("/");
    toast.success("Conta excluída com sucesso!", {
      style: styleToastError,
      duration: 3000,
    });
  };

  return (
    <>
      <h3 style={{ color: "#84421E" }}>Zona de Perigo</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          border: "3px solid #84421E",
          borderRadius: "10px",
          width: "700px",
          height: "85px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "600px",
            margin: "10px",
          }}
        >
          <p
            style={{
              marginBottom: "0",
            }}
          >
            <strong>Deletar conta</strong>
          </p>
          <p
            style={{
              marginBottom: "0",
            }}
          >
            Depois de excluir sua conta, todos seus dados serão excluidos.
          </p>
        </div>
        <button className="buttonDelete" onClick={() => deleteUser()}>
          <svg viewBox="0 0 448 512" className="svgIcon">
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};
