document.addEventListener("DOMContentLoaded", ready);
function ready() {

var q = {question:'1+1', answer: 2}, w = {question:'1+2', answer: 3}, e = {question:'1+3', answer: 4}, r = {question:'1+4', answer: 5}, t = {question:'1+5', answer: 6}, y = {question:'1+6', answer: 7},
u = {question:'1+7', answer: 8}, i = {question:'1+8', answer: 9}, o = {question:'1+9', answer: 10}, p = {question:'2+1', answer: 3}, a = {question:'2+2', answer: 4}, s = {question:'2+3', answer: 5},
d = {question:'2+4', answer: 6}, f = {question:'2+5', answer: 7}, f = {question:'2+6', answer: 8}, g = {question:'2+7', answer: 2}, h = {question:'2+8', answer: 10}, j = {question:'2+9', answer: 11},
k = {question:'3+1', answer: 4}, l = {question:'3+2', answer: 5}, z = {question:'3+3', answer: 6}, x = {question:'3+4', answer: 7}, c = {question:'3+5', answer: 8}, v = {question:'3+6', answer: 9},
b = {question:'3+7', answer: 10}, n = {question:'3+8', answer: 11}, m = {question:'3+9', answer: 12}, q1 = {question:'4+1', answer: 5}, w1 = {question:'4+2', answer: 6}, e1 = {question:'4+3', answer: 7},
r1 = {question:'4+4', answer: 8}, t1 = {question:'4+5', answer: 9}, y1 = {question:'4+6', answer: 10}, u1 = {question:'4+7', answer: 11}, i1 = {question:'4+8', answer: 12},
o1 = {question:'4+9', answer: 13}, p1 = {question:'5+1', answer: 6}, a1 = {question:'5+2', answer: 7}, s1 = {question:'5+3', answer: 8}, d1 = {question:'5+4', answer: 9},
f1 = {question:'5+5', answer: 10}, g1 = {question:'5+6', answer: 11}, h1 = {question:'5+7', answer: 12}, j1 = {question:'5+8', answer: 13}, k1 = {question:'5+9', answer: 14},
l1 = {question:'6+1', answer: 7}, z1 = {question:'6+2', answer: 8}, x1 = {question:'6+3', answer: 9}, c1 = {question:'6+4', answer: 10}, v1 = {question:'6+5', answer: 11},
b1 = {question:'6+6', answer: 12}, n1 = {question:'6+7', answer: 13}, m1 = {question:'6+8', answer: 14}, q2 = {question:'6+9', answer: 15}, w2 = {question:'7+1', answer: 8},
e2 = {question:'7+2', answer: 9}, r2 = {question:'7+3', answer: 10}, t2 = {question:'7+4', answer: 11}, y2 = {question:'7+5', answer: 12}, u2 = {question:'7+6', answer: 13},
i2 = {question:'7+7', answer: 14}, o2 = {question:'7+8', answer: 15}, p2 = {question:'7+9', answer: 16}, a2 = {question:'8+1', answer: 9}, s2 = {question:'8+2', answer: 10},
d2 = {question:'8+3', answer: 11}, f2 = {question:'8+4', answer: 12}, g2 = {question:'8+5', answer: 13}, h2 = {question:'8+6', answer: 14}, j2 = {question:'8+7', answer: 15},
k2 = {question:'8+8', answer: 16}, l2 = {question:'8+9', answer: 17}, z2 = {question:'9+1', answer: 10}, x2 = {question:'9+2', answer: 11}, c2 = {question:'9+3', answer: 12},
v2 = {question:'9+4', answer: 13}, b2 = {question:'9+5', answer: 14}, n2 = {question:'9+6', answer: 15}, m2 = {question:'9+7', answer: 16}, q3 = {question:'9+8', answer: 17},
w3 = {question:'9+9', answer: 18},
arr = [
  q, w, e, r, t, y, u, i, o, p, a, s, d, f, g, h, j, k, l, z, x, c, v, b, n, m, q, w1, e1, r1, t1, y1, u1, i1, o1, p1, a1, s1, d1, f1, g1, h1, j1, k1, l1, z1, x1, c1, v1, b1,
  n1, m1, q2, w2, e2, r2, t2, y2, u2, i2, o2, p2, a2, s2, d2, f2, g2, h2, j2, k2, l2, z2, x2, c2, v2, b2, n2, m2, q3, w3
];

//var userName = prompt('Введите ваше имя:');
var targetCell = document.getElementById('question'),
nameField = document.getElementById('name'),
winNumber = document.getElementById('winCount'),
loseNumber = document.getElementById('loseCount'),
user1 = document.getElementsByClassName('runner1')[0],
winner1 = document.getElementsByClassName('winner1')[0],
winner2 = document.getElementsByClassName('winner2')[0],
user1Coord = user1.offsetLeft,
answer1 = document.getElementById('number');

function checkCurentName() {
  var userName = nameField.value;
  if(userName == '' && !localStorage.name) {
    localStorage.setItem('name', 'Неизвестный умник');
    document.getElementById('result').innerHTML = 'Играет ' + localStorage.name;
  }
  if(userName == '') {
    userName = localStorage.name;
    nameField.value = localStorage.name;
  }
  if (localStorage.name == userName) {
	setUserCount();
}
}
setTimeout(checkCurentName, 9000);

function setWinNumber() {
  if (localStorage.win) {
	   localStorage.win = Number(localStorage.win) + 1;
  }
  else {
    localStorage.setItem('win', '1');
  }
  winNumber.innerHTML = ' ' + localStorage.win + ' раз';
  }

function setLoseNumber() {
    if (localStorage.lose) {
  	   localStorage.lose = Number(localStorage.lose) + 1;
    }
    else {
      localStorage.setItem('lose', '1');
    }
    loseNumber.innerHTML = ' ' + localStorage.lose + ' раз';
}

function checkUser() {
  var min = 0,
  max = arr.length - 1,
  rand = min + Math.floor(Math.random() * (max + 1 - min));
  targetCell.innerHTML = 'Cколько будет: ' + arr[rand].question +' ?';

  setTimeout(function() {
    var userAnswer = answer1.value;
    if(userAnswer == arr[rand].answer) {
      user1Coord += 76;
      user1.style.left = user1Coord + 'px';
      answer1.value = '';
      if(user1.offsetLeft > 759) {
        winner1.style.display = 'block';
        setWinNumber();
    setTimeout(function () {
      window.location.reload([false]);
  }, 2000);
  }
}
else {
  targetCell.innerHTML = 'Ответ неверный!';
    }
  }, 4500);
};

setInterval(checkUser, 5000);
var runner1 = document.getElementsByClassName('runner2')[0];
  function runnerComp() {
  runner1.style.transitionProperty = 'left';
  runner1.style.transitionDuration = '80s';
  runner1.style.transitionTimingFunction = 'linear';
  runner1.style.left = '21px';
}

function runnerComp1() {
  runner1.style.left = '760px';
}

setTimeout(runnerComp, 9000);

setTimeout(runnerComp1, 10000);

function checkCoord() {
  if(runner1.offsetLeft > 703) {
    winner2.style.display = 'block';
    setLoseNumber();
    setTimeout(function () {
      window.location.reload([false]);
    }, 2000);
  }
}
setInterval(checkCoord, 2000);

function setUserCount() {
  if (localStorage.count) {
	   localStorage.count = Number(localStorage.count) + 1;
  }
  else {
    localStorage.setItem('count', '1');
  }
  document.getElementById('result').innerHTML = 'Количиство игр ' + localStorage.count + ' раз';
  }
}
