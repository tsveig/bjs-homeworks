function calculateAverageRating(){
    let marks = window.marks.value.split(" ").map(Number);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    let result = '';
    let num;
    if (marks.length > 5) {
        num = 5;
        result = 'Введено больше пяти значений. ';
    } else {
        num = marks.length;

    }

    let sum = 0;

    for (let i = 0; i < num; i++){
       sum += marks[i];
    }
    result += sum/num;
    console.log(sum);

    return result;
    
}
