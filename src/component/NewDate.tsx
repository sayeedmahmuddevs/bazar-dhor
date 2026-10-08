function NewDate() {
  const date = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long",
  });

  return <span>{date}</span>;
}

export default NewDate;