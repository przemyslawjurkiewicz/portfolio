const form = document.querySelector('.contact__form')
const url = 'https://iq8a6387pj.execute-api.us-east-1.amazonaws.com/dev/email/send'
const toast = document.querySelector('.contact__toast')
const submit = document.querySelector('.contact__submit')

function post(url, body, callback) {
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  req.setRequestHeader("Content-Type", "application/json");
  req.addEventListener("load", function () {
    if (req.status < 400) {
      callback(null, JSON.parse(req.responseText));
    } else {
      callback(new Error("Request failed: " + req.statusText));
    }
  });
  req.send(JSON.stringify(body));
}
function success () {
  toast.innerHTML = 'Dziękuję za wiadomość. Postaram się odpisać najszybciej jak to możliwe :)'
  submit.disabled = false
  submit.blur()
  form.name.focus()
  form.name.value = ''
  form.email.value = ''
  form.content.value = ''
}
function error (err) {
  toast.innerHTML = 'Wystąpił błąd przepraszam, postaram się go usunąć. Proszę o kontak na email.'
  submit.disabled = false
  console.log(err)
}

form.addEventListener('submit', function (e) {
  e.preventDefault()
  toast.innerHTML = 'Wysyłam ...'
  submit.disabled = true

  const payload = {
    name: form.name.value,
    email: form.email.value,
    content: form.content.value
  }
  post(url, payload, function (err, res) {
    if (err) { return error(err) }
    success()
  })
})