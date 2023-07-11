
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;
  




$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus');
});

document.addEventListener("DOMContentLoaded", function () {
  pTag = document.querySelector("div");
  newVal = document.createElement("p");
  newVal.innerHTML = 'Hello, Hello';
  pTag.appendChild(newVal);
});


