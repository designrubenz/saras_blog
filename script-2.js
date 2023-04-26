// script
document.addEventListener("DOMContentLoaded", function(event) {
  const link = document.getElementById('target');
  const hiddenP = document.getElementById('hidden');

  link.addEventListener("click", function(event) {
    hiddenP.removeAttribute('id');
    link.setAttribute('id', 'hidden');
  });

  console.log(link);
  console.log(hiddenP);
});
