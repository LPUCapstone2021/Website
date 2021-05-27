
function getBaseUrl() {
    var re = new RegExp(/^.*\//);
    return re.exec(window.location.href)
}

$('form').on('submit', event => {
  event.preventDefault();

  const form = $('form').serializeArray()
  const preferences = form.filter(input => /^p/.test(input.name)).map(input => parseInt(input.value) || 0)
  const features = preferences.map(input => input ? 1 : 0)

  let body = { preferences, features }

  fetch(event.target.action, {
    method: event.target.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(result => {
      $('form')[0].reset()
      localStorage.setItem('recommendedCarsId', JSON.stringify(result.data))
      window.location.replace(`${getBaseUrl()}/recommendedCars.html`)
    })
    .catch(error => console.warn(error))
});
