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

const pageTransition = time => {
  document.getElementById('transition').classList.remove('transition-hide');
  setTimeout(() => {
    document.getElementById('transition').classList.add('transition-hide');
  }, time);
};

let data;
let counter = 0;

const setWords = (counter, ans) => {
  console.log(counter), console.log(ans), console.log(data);
  document.getElementById('word').innerText = data[counter][ans];
};

document.getElementById('page2').addEventListener('touchstart', () => {
  setWords(counter, 2);
});
document.getElementById('page2').addEventListener('touchend', () => {
  setWords(counter, 1);
});
document.getElementById('next-btn').addEventListener('click', event => {
  event.stopPropagation();
  pageTransition(200);
  counter++;
  setWords(counter, 1);
});

function shuffle(arra1) {
  let ctr = arra1.length;
  let temp;
  let index;

  // While there are elements in the array
  while (ctr > 0) {
    // Pick a random index
    index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
    ctr--;
    // And swap the last element with it
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}

fetch(`${url}data.json`)
  .then(x => x.json())
  .then(d => {
    document.getElementById('start-btn').classList.remove('btn-hide');
    console.log(d);
    data = shuffle(d);
  });

document.getElementById('start-btn').addEventListener('click', () => {
  pageTransition(200);
  document.getElementById('page1').style.height = 0;
  setWords(counter, 1);
});
