function getAverageMark(marks){
    let result = '';
    let sum = 0;
    
    for (let i = 0; i < marks.length; i++){
       sum += marks[i];
    }
    result += sum/marks.length;
    return result;
    
}


function getAverageScore( data ){
  let sum = 0;
  let num = 0;
  
  for (key in data){
    let avarage = Number(getAverageMark(data[key]));
    console.log(key + `: ` + avarage);
    sum += avarage;
    
    num ++;
  }
  console.log(`Avarage: ` + sum/num);
}



getAverageScore({algebra: [2, 4, 5, 2, 3, 4], 
                             geometry: [2, 4, 5],
                             russian: [3, 3, 4, 5],
                             physics: [5, 5],
                             music: [2, 2, 6],
                             english: [4, 4, 3],
                             poetry: [5, 3, 4],
                             chemistry: [2],
                             french: [4, 4]
});
