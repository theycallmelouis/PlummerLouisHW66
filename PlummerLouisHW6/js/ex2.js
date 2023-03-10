// Get the <li> elements with class "400level"
const level400 = document.querySelectorAll(".400level");

// Loop through each <li> element and display its text content
level400.forEach(li => {
  console.log(li.textContent);
});