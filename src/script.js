const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};
window.addEventListener('resize', appHeight);
appHeight();

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

document.getElementById('start-btn').addEventListener('click', () => {
  document.getElementById('transition').classList.remove('transition-hide');
  setTimeout(() => {
    document.getElementById('transition').classList.add('transition-hide');
  }, 200);
});
