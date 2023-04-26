console.log('hi');
addEventListener("DOMContentLoaded", function(event) {
  const link = document.getElementById("target");
  const hiddenP = document.querySelector(".hidden");

  console.log(event);
  console.log(link);
  console.log(hiddenP);

  link.addEventListener("click", function(event) {
    hiddenP.classList.remove('hidden');
    link.classList.add('hidden');
    event.preventDefault()
  });
});

