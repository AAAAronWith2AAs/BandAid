async function newFormHandler(event) {
  event.preventDefault();
  const venue_name = document.querySelector("#venue-name").value;
  const venue_city = document.querySelector("#city").value;
  const venue_state = document.querySelector("#state").value;
  const contact_email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const mgmt = document.querySelector("#management").value;
  const engineer = document.querySelector("#engineer").value;
  const rating = document.querySelector("#rating").value;

  // Send fetch request to add a new concert
  const response = await fetch(`api/venues`, {
    method: "POST",
    body: JSON.stringify({
      venue_name,
      venue_city,
      venue_state,
      contact_email,
      phone,
      mgmt,
      engineer,
      rating,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the venue is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/api/venues");
  } else {
    alert("Failed to add venue");
  }
}

function cancelForm(event) {
  event.preventDefault();
  document.location.replace("/");
}

document
  .querySelector("#submit-button")
  .addEventListener("click", newFormHandler);

document.querySelector("#cancel-button").addEventListener("click", cancelForm);
