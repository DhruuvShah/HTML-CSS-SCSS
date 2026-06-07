document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contact-form");
  var confirmPanel = document.getElementById("confirm-panel");
  var resetBtn = document.getElementById("reset-form");

  if (!form || !confirmPanel) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    form.hidden = true;
    confirmPanel.hidden = false;
    confirmPanel.focus();
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      confirmPanel.hidden = true;
      form.hidden = false;
      form.querySelector("input").focus();
    });
  }
});
