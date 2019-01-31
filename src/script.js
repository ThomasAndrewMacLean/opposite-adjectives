const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--app-height', `${window.innerHeight}px`);
};
window.addEventListener('resize', appHeight);
appHeight();

let url = window.location.href;
// if (url === 'http://localhost:1234/') {
//   //url += 'static/';
// }

const pageTransition = time => {
  document.getElementById('transition').classList.remove('transition-hide');
  setTimeout(() => {
    document.getElementById('transition').classList.add('transition-hide');
  }, time);
};

let data;
let counter = 0;

const setWords = (counter, ans, place, clear = false) => {
  document.getElementById(place).innerText = clear? '':data[counter][ans];
};

document.getElementById('show-btn').addEventListener('touchstart', () => {
  setWords(counter, 2, 'answer');
});
document.getElementById('show-btn').addEventListener('touchend', () => {
  setWords(counter, 1, 'answer',true);
});
document.getElementById('show-btn').addEventListener('mousedown', () => {
  setWords(counter, 2, 'answer');
});
document.getElementById('show-btn').addEventListener('mouseup', () => {
  setWords(counter, 1, 'answer',true);
});
function nextWord(ev) {

  pageTransition(200);
  counter++;
  setTimeout(()=>{
    if(counter === data.length){
      document.getElementById('page2').style.height = 0;
    }else{

      setWords(counter, 1, 'word');
    }

  },200)
}

document.getElementById('next-btn').addEventListener('click', nextWord,false);

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
    setTimeout(()=>{
  
      document.getElementById('page1').style.height = 0;
      setWords(counter, 1,'word');
    },200)
  });

  document.getElementById('close-btn').addEventListener('click', () => {
    pageTransition(200);
    setTimeout(()=>{

      document.getElementById('page1').style.height = '100%';
      document.getElementById('page2').style.height = '100%';
      counter = 0;
      data = shuffle(data)
    },200)
  });

  document.getElementById('reset-btn').addEventListener('click', () => {
    pageTransition(200);
    setTimeout(()=>{

      document.getElementById('page1').style.height = '100%';
      document.getElementById('page2').style.height = '100%';
      counter = 0;
      data = shuffle(data)
    },200)
  });
