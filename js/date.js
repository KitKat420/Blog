function currentDate() {
  const date = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return date.toLocaleDateString(undefined, options);
}

document.querySelector(".date").innerHTML = currentDate();
