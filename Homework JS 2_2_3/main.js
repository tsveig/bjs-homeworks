function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');
 
        const average = getAverageMark(marks);
 
        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}
 
function getAverageMark(marks) {
  
  let sum = 0;
 
  for (let i = 0; i < marks.length; i++){
    sum += Number(marks[i]);
  }
  let average = sum/marks.length;
  let roundedAverage = Math.round(average);
    
  return roundedAverage;
}
 