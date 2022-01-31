var modal = document.getElementById("modalContato");

var btn = document.getElementById("btn-Modal");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

var email = document.getElementById("sendEmail");

email.onclick = function sendMail() {
  var link = "mailto:loja@vxcase.com.br"
           + "?cc=loja@vxcase.com.br"
           + "&subject=" + encodeURIComponent(document.getElementById('subject').value)
           + "&body=" + encodeURIComponent(document.getElementById('message').value)
  ;

  window.location.href = link;
}