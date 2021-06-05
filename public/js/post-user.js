async function newFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const first_name = document.querySelector("#first-name").value;
  const last_name = document.querySelector("#last-name").value;
  const email = document.querySelector("#email").value;
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const band_name = document.querySelector("#band-name").value;
  const label = document.querySelector("#label").value;
  const facebook = document.querySelector("#facebook").value;
  const twitter = document.querySelector("#twitter").value;
  const soundcloud = document.querySelector("#soundcloud").value;
  const bandcamp = document.querySelector("#bandcamp").value;
  const myspace = document.querySelector("#myspace").value;

  // Send fetch request to add a new user
  const response = await fetch(`api/users`, {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      first_name,
      last_name,
      city,
      state,
      band_name,
      label,
      facebook,
      twitter,
      soundcloud,
      bandcamp,
      myspace,
    }),

    headers: {
      "Content-Type": "application/json",
    },
  });
  document.location.replace("/api/users");
  // if (response.ok) {
  //   document.location.replace("/api/users");
  // } else {
  //   alert("Failed to add user");
  // }
}

function cancelForm(event) {
  event.preventDefault();
  document.location.replace("/");
}

document
  .querySelector("#submit-button")
  .addEventListener("click", newFormHandler);

document.querySelector("#cancel-button").addEventListener("click", cancelForm);
