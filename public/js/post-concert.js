async function newFormHandler(event) {
  event.preventDefault();
  const venue_name = document.querySelector("#venue-name").value;
  const date = document.querySelector("#date").value;
  const headliner = document.querySelector("#headliner").value;
  const guarantee = document.querySelector("#guarantee").value;
  const presale = document.querySelector("#presale").value;
  const presale_sold = document.querySelector("#presale-sold").value;
  const actual_payout = document.querySelector("#actual-payout").value;
  const merch_sales = document.querySelector("#merch-sales").value;
  const is_21 = document.querySelector("#21:checked") ? true : false;

  // Send fetch request to add a new concert
  const response = await fetch(`api/concerts`, {
    method: "POST",
    body: JSON.stringify({
      venue_name,
      date,
      headliner,
      guarantee,
      presale,
      presale_sold,
      actual_payout,
      merch_sales,
      is_21,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the concert is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to add concert");
  }
}

document
  .querySelector("#post-concert")
  .addEventListener("submit", newFormHandler);
