import React, { useState } from "react";

export const TableRow  = ({data}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
      <>
        <tr onClick={toggleExpand} style={{ cursor: "pointer" }}>
          <td>data.nome</td>
          <td>{isExpanded ? "↑" : "↓"}</td>
        </tr>
        {isExpanded && (
            <tr>
              <td colSpan="2">
                <table>
                  <tbody>
                  <tr>
                    <td>Detalhe 1:</td>
                  </tr>
                  <tr>
                    <td>Detalhe 2:</td>
                  </tr>
                  </tbody>
                </table>
              </td>
            </tr>
        )}
      </>
  );
};

export const QuadroMedalhas = () => {
  const tableData = [
    {id: 1,  nome: "Item 1", ulrImage: "Detalhe 1.1", numberOfGolds: "Detalhe 1.2" , numberOfSilvers: "Detalhe 1.2" , numberOfMedal: "Detalhe 1.2" },
    {id: 2,  nome: "Item 2", ulrImage: "Detalhe 2.1", numberOfGolds: "Detalhe 2.2" , numberOfSilvers: "Detalhe 2.2" , numberOfMedal: "Detalhe 2.2" },
    // Adicione mais itens aqui
  ];

  return (
      <table border="1">
        <thead>
        <tr>
          <th>Item</th>
          <th>Expandir</th>
        </tr>
        </thead>
        <tbody>
        {tableData.map((data, index) => (
            <TableRow key={index} country={data} />
        ))}
        </tbody>
      </table>
  );
};
