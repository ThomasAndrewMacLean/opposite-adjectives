const url = window.location.href;

fetch(`${url}static/data.json`)
  .then(x => x.json())
  .then(y => {
    document.getElementById('start-btn').classList.remove('btn-hide');
    console.log(y);
  });
