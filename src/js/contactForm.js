const axios = require('axios');
const url = 'https://iq8a6387pj.execute-api.us-east-1.amazonaws.com/dev/email/send';
const form = document.querySelector('.contact__form');
const toast = document.querySelector('.contact__toast');
const submit = document.querySelector('.contact__submit');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  toast.innerHTML = 'Wysyłam ...';
  submit.disabled = true;
  axios
    .post(url, {
      name: form.name.value,
      email: form.email.value,
      content: form.content.value
    })
    .then(function success() {
      toast.innerHTML =
        'Dziękuję za wiadomość. Postaram się odpisać najszybciej jak to możliwe :)';
      submit.disabled = false;
      submit.blur();
      form.name.focus();
      form.name.value = '';
      form.email.value = '';
      form.content.value = '';
    })
    .catch(function error(err) {
      toast.innerHTML =
        'Wystąpił błąd przepraszam, postaram się go usunąć. Proszę o kontak na email.';
      submit.disabled = false;
      console.log(err);
    });
});
