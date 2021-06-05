const { URLSearchParams } = require("url");

async function searchFormHandler(event) {
  event.preventDefault();
  const category = document.querySelector("#nav-select").value;
  const name = document.querySelector("#search-value").value;
  console.log(category);
  console.log(name);
  switch (category) {
    case "Concert by Band":
      {
        const url =
          "api/concerts/search/" +
          new URLSearchParams({
            name: name,
          });
        await fetch(url, {
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
        const url =
          "api/users/search/" +
          new URLSearchParams({
            name: name,
          });
        await fetch(url, {
          method: "GET",
        });
      }
      break;
  }
}

document
  .querySelector("#nav-search")
  .addEventListener("click", searchFormHandler);
