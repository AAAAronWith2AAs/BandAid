async function searchFormHandler(event) {
  event.preventDefault();
  const category = document.querySelector("#nav-select").value;
  const name = document.querySelector("#search-value").value;
  switch (category) {
    case "Concert by Band":
      {
        document.location.replace(`api/users/search/${name}`);
      }
      break;
    case "Venue by Name":
      {
        document.location.replace(`api/venues/search/${name}`);
      }
      break;
    case "Band by Name":
      {
        document.location.replace(`api/users/search/${name}`);
      }
      break;
  }
}
document
  .querySelector("#search-button")
  .addEventListener("click", searchFormHandler);
