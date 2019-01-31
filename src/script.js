let url = window.location.href;
if (url === 'http://localhost:1234/') {
  url += 'static/';
}

fetch(`${url}data.json`)
  .then(x => x.json())
  .then(y => {
    document.getElementById('start-btn').classList.remove('btn-hide');
    console.log(y);
  });
