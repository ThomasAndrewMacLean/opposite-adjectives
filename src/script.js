const url = window.location.href;

fetch(`${url}data.json`)
  .then(x => x.json())
  .then(y => {
    console.log(y);
  });
