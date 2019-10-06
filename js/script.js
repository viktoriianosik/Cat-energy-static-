var navigation = document.querySelector(".navigation");
var navToggle = document.querySelector(".navigation-toggle");

navigation.classList.remove("navigation--nojs");

navigation.addEventListener("click", function() {
  if (navigation.classList.contains("navigation--closed")) {
    navigation.classList.remove("navigation--closed");
    navigation.classList.add("navigation--opened");
  } else {
    navigation.classList.add("navigation--closed");
    navigation.classList.remove("navigation--opened");
  }
})

var form = document.querySelector(".forms");
if (form) {
  var weightForm = form.querySelector("[name=weight]");
  var mailForm = form.querySelector("[name=mail]");
  var phoneForm = form.querySelector("[name=phone]");
  var nameForm = form.querySelector("[name=name]");
  var mailImage = form.querySelector (".form-contact__mail");
  var phoneImage = form.querySelector (".form-contact__phone");

  form.addEventListener("submit", function (evt) {
    if (!nameForm.value || !emailForm.value || !weightForm.value || !phoneForm.value) {
      evt.preventDefault();
    }

    if (!nameForm.value) {
      nameForm.classList.remove("form__input--error");
      nameForm.offsetWidth = nameForm.offsetWidth;
      nameForm.classList.add ("form__input--error");
    }

    if (!mailForm.value) {
      mailForm.classList.remove("form__input--error");
      mailImage.classList.remove("form-contact__mail--error");
      mailForm.offsetWidth = mailForm.offsetWidth;
      mailForm.classList.add ("form__input--error");
      mailImage.classList.add("form-contact__mail--error");
    }

    if (!weightForm.value) {
      weightForm.classList.remove("form__input--error");
      weightForm.offsetWidth = weightForm.offsetWidth;
      weightForm.classList.add ("form__input--error");
    }

    if (!phoneForm.value) {
      phoneForm.classList.remove("form__input--error");
      phoneImage.classList.remove("form-contact__phone--error");
      phoneForm.offsetWidth = phoneForm.offsetWidth;
      phoneForm.classList.add ("form__input--error");
      phoneImage.classList.add("form-contact__phone--error");
    }
  });
}
