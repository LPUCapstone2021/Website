function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}

$('form').on('submit', event => {
  event.preventDefault();
  let body = {
    form: $('form').serialize()
  };
  fetch(event.target.action, {
    method: event.target.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      window.location.replace(`${getBaseUrl()}/index.html`)
    })
    .catch(error => console.warn(error));
});
