import React from "react";
import "./UserInfo.css";

/**
 * @description Componente UserInfo para exibir informações do usuário.
 *
 * @param {Object} props - As propriedades passadas para o componente.
 * @param {string} props.nome - O nome do usuário.
 * @param {string} props.email - O e-mail do usuário.
 * @param {string} props.userImage - A URL da imagem do perfil do usuário.
 *
 * @example
 * <UserInfo 
 *   nome="Sérgio Cerqueira" 
 *   email="sergio@example.com" 
 *   userImage="https://localhost:8080/user-image.jpg" 
 * />
 *
 * @returns {JSX.Element} O JSX do componente UserInfo.
 */
export const UserInfo = ({ nome, email, userImage }) => {
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
            margin: "10px",
          }}
        >
          <div className={"userRow"}>
            <img
              style={{
                width: "75px",
                height: "75px",
                borderRadius: "50%",
              }}
              src={userImage}
              alt="User Profile Image"
            />
            <div
              style={{
                display: "block",
              }}
            >
              <div
                style={{
                  display: "flex",
                  marginTop: "10px",
                }}
              >
                <p>
                  <strong>Nome:</strong>
                </p>
                <p>{nome}</p>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <p>
                  <strong>E-mail:</strong>
                </p>
                <p>{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
