async function newFormHandler(event) {
  event.preventDefault();
  const first_name = document.querySelector("#first-name").value;
  const last_name = document.querySelector("#last-name").value;
  const username = document.querySelector("#headliner").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const band_name = document.querySelector("#band-name").value;
  const label = document.querySelector("#label");
  const facebook = document.querySelector("#facebook");
  const twitter = document.querySelector("#twitter");
  const soundcloud = document.querySelector("#soundcloud");
  const bandcamp = document.querySelector("#bandcamp");
  const myspace = document.querySelector("#myspace");

  // Send fetch request to add a new concert
  const response = await fetch(`api/users`, {
    method: "POST",
    body: JSON.stringify({
      username,
      first_name,
      last_name,
      city,
      state,
      band_name,
      label,
      facebook,
      twitter,
      soundcloud,
      myspace,
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the user is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add user");
  }
}

document.querySelector("#post-user").addEventListener("submit", newFormHandler);
