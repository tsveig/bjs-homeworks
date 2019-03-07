function getAverageMark(marks){
  let result = '';
  let sum = 0;
  
  for (let i = 0; i < marks.length; i++){
     sum += marks[i];
  }
  result += sum/marks.length;
  return result;
  
}

function getAverageScore(data) {
let avarageObject = {algebra : 0,
                     geometry: 0,
                     russian: 0,
                     physics: 0,
                     music: 0,
                     english: 0,
                     poetry: 0,
                     chemistry: 0,
                     french: 0,
                     avarage: 0
}

let avarage = 0;
let sum = 0;
let num = 0;
for (key in data){
  avarage = Number(getAverageMark(data[key]));
  
  switch (key){
    case `algebra`: {
      avarageObject.algebra = avarage;
      break;
    }
    case `geometry`: {
      avarageObject.geometry = avarage;
      break;
    }
    case `russian`: {
      avarageObject.russian = avarage;
      break;
    }
    case `physics`: {
      avarageObject.physics = avarage;
      break;
    }
    case `music`: {
      avarageObject.music = avarage;
      break;
    }
    case `english`: {
      avarageObject.english = avarage;
      break;
    }
    case `poetry`: {
      avarageObject.poetry = avarage;
      break;
    }
    case `chemistry`: {
      avarageObject.chemistry = avarage;
      break;
    }
    case `french`: {
      avarageObject.french = avarage;
      break;
    }
  }
  sum += avarage;
  num ++;
}
avarageObject.avarage = sum/num;

return avarageObject;
}

console.log(getAverageScore({algebra: [2, 4, 5, 2, 3, 4], 
                           geometry: [2, 4, 5],
                           russian: [3, 3, 4, 5],
                           physics: [5, 5],
                           music: [2, 2, 6],
                           english: [4, 4, 3],
                           poetry: [5, 3, 4],
                           chemistry: [2],
                           french: [4, 4]
}));
