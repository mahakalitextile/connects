document.getElementById("shareButton").addEventListener("click", function() {
  document.getElementById("sharePopup").style.display = "block";
  document.getElementById("linkInput").value = "https://linktr.ee/mahakalitextile";
});

document.getElementById("copyButton").addEventListener("click", function() {
  document.getElementById("linkInput").select();
  document.execCommand("copy");
  document.getElementById("copyButton").innerHTML = "Copied";
  document.getElementById("copyButton").disabled = true;
});

document.addEventListener("click", function(event) {
  var sharePopup = document.getElementById("sharePopup");
  var shareButton = document.getElementById("shareButton");

  if (event.target !== sharePopup && event.target !== shareButton) {
    sharePopup.style.display = "none";
  }
});

document.getElementById("shareButton").addEventListener("click", function() {
  document.getElementById("sharePopup").style.display = "block";
  document.getElementById("linkInput").value = "https://linktr.ee/mahakalitextile";
  document.body.classList.add("overlay");
});

document.getElementById("closeButton").addEventListener("click", function() {
  document.getElementById("sharePopup").style.display = "none";
  document.body.classList.remove("overlay");
});