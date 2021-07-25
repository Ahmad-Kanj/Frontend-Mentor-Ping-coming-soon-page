var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  document.getElementById("email").value = "";
  document.querySelector(".submitBtn").addEventListener("click", (e) => {
    if (
      document
        .getElementById("email")
        .value.match(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi)
    ) {
      document.getElementById("email").classList.remove("error");
      document.querySelector(".errorMsg").style.display = "none";
      location.reload();
    } else {
      document.querySelector(".emailInput").classList.add("error");
      document.querySelector(".errorMsg").style.display = "block";
    }
  });

  window.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.querySelector(".submitBtn").click();
      }
    },
    true
  );
});
