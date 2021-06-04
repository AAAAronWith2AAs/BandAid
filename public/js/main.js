async function searchFormHandler(event) {
  event.preventDefault();
  const category = document.querySelector("#nav-select").value;
  const name = document.querySelector("#search-value").value;

  switch (category) {
    case "Concert by Band":
      {
        await fetch(`api/bands/search/${name}`, {
          method: "GET",
        });
      }
      break;
    case "Venue by Name":
      {
        await fetch(`api/venues/search/${name}`, {
          method: "GET",
        });
      }
      break;
    case "Band by Name":
      {
        await fetch(`api/users/search/${name}`, {
          method: "GET",
        });
      }
      break;
  }
}

document
  .querySelector("#nav-search")
  .addEventListener("submit", searchFormHandler);
