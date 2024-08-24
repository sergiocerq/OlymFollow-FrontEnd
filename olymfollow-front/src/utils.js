/**
 * @description Formata uma data para o formato curto internacionalizado.
 *
 * @param {string|Date} date - A data a ser formatada. Pode ser uma string ou um objeto Date.
 * @returns {string} A data formatada no estilo curto ou "-" se a data for inválida.
 *
 * @example
 * smallFormatDateToIntl("2023-10-05"); // Retorna "05/10/2023"
 */
export const smallFormatDateToIntl = (date) => {
  if (!date || date === "") return "-";

  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" }).format(
    new Date(date)
  );
};

/**
 * @description Formata uma data para o formato médio internacionalizado.
 *
 * @param {string|Date} date - A data a ser formatada. Pode ser uma string ou um objeto Date.
 * @returns {string} A data formatada no estilo médio ou "-" se a data for inválida.
 *
 * @example
 * mediumFormatDateToIntl("2023-10-05"); // Retorna "5 de out. de 2023"
 */
export const mediumFormatDateToIntl = (date) => {
  if (!date || date === "") return "-";

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
  }).format(new Date(date));
}

/**
 * @description Formata uma data para o formato longo internacionalizado.
 *
 * @param {string|Date} date - A data a ser formatada. Pode ser uma string ou um objeto Date.
 * @returns {string} A data formatada no estilo longo ou "-" se a data for inválida.
 *
 * @example
 * longFormatDateToIntl("2023-10-05"); // Retorna "5 de outubro de 2023"
 */
export const longFormatDateToIntl = (date) => {
  if (!date || date === "") return "-";

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  }).format(new Date(date));
}

/**
 * @description Manipula um token de autenticação, removendo o prefixo "Bearer ".
 *
 * @param {string} token - O token de autenticação.
 * @returns {string} O token sem o prefixo "Bearer " ou uma string vazia se o token for inválido.
 *
 * @example
 * handleToken("Bearer apo7gmNV"); // Retorna "apo7gmNV"
 */
export const handleToken = (token) => {
  if (!token || token === "") return "";
  return token.split(" ")[1];

}