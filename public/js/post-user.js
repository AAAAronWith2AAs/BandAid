async function newFormHandler(event) {
  console.log("the function is running");
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const first_name = document.querySelector("#first-name").value;
  const last_name = document.querySelector("#last-name").value;
  const email = document.querySelector("#email").value;
  // const password = document.querySelector("#password").value;
  const city = document.querySelector("#city").value;
  const state = document.querySelector("#state").value;
  const band_name = document.querySelector("#band-name").value;
  const label = document.querySelector("#label").value;
  const facebook = document.querySelector("#facebook").value;
  const twitter = document.querySelector("#twitter").value;
  const soundcloud = document.querySelector("#soundcloud").value;
  const bandcamp = document.querySelector("#bandcamp").value;
  const myspace = document.querySelector("#myspace").value;
  console.log(username);
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
      // password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the user is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/api/users");
  } else {
    alert("Failed to add user");
  }
}

document
  .querySelector("#submit-button")
  .addEventListener("click", newFormHandler);
