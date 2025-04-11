document
  .querySelector(".fidback__form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#user-name").value.trim();
    const phone = document.querySelector("#user-phone").value.trim();
    const email = document.querySelector("#fidback-email").value.trim();
    const comment = document.querySelector("#user-comment").value.trim();
    const privacyAccepted = document.querySelector("#user-privacy").checked;

    // Перевірка заповненості полів
    if (!name || !phone || !email || !comment) {
      alert("Будь ласка, заповніть усі поля форми.");
      return;
    }

    // Перевірка на прийняття політики
    if (!privacyAccepted) {
      alert("Будь ласка, прийміть політику конфіденційності.");
      return;
    }

    const formData = {
      name,
      phone,
      email,
      comment,
    };

    console.log("Дані з форми:", formData);
    alert("Дані відправлено.");
  });
