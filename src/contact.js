function onSubmit(token) {
  alert("thanks " + document.getElementById("name").value);
}

function validate(event) {
  event.preventDefault();
  if (
    !document.getElementById("name").value ||
    !document.getElementById("message").value ||
    !document.getElementById("email").value
  ) {
    alert("You must add text to the required fields");
  } else {
    grecaptcha.execute();
  }
}

function onSubmit(token) {
  alert("thanks " + document.getElementById("name").value);
}

function onload() {
  var element = document.getElementById("submit");
  element.onclick = validate;
}
