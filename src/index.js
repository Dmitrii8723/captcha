(function() {
  console.log("index.js");
})();

function onSubmit(token) {
  alert("thanks " + document.getElementById("firstname").value);
}
function validate(event) {
  event.preventDefault();
  if (
    !document.getElementById("firstname").value ||
    !document.getElementById("lastname").value ||
    !document.getElementById("email").value
  ) {
    alert("You must add text to the required fields");
  } else {
    grecaptcha.execute();
  }
}
function onload() {
  var element = document.getElementById("submit");
  element.onclick = validate;
}
