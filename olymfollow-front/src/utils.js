export const smallFormatDateToIntl = (date) => {
  if (!date || date === "") return "-";

  return new Intl.DateTimeFormat("pt-BR", { dateStyle: "short" }).format(
    new Date(date)
  );
};

export const mediumFormatDateToIntl = (date) => {
  if (!date || date === "") return "-";

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
  }).format(new Date(date));
}

export const longFormatDateToIntl = (date) => {
  if (!date || date === "") return "-";

  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "long",
  }).format(new Date(date));
}

export const handleToken = (token) => {
  if (!token || token === "") return "";
  return token.split(" ")[1];

}