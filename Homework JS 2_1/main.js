function calculateQuadraticEquation(){
    let a = window.a.value;
    let b = window.b.value;
    let c = window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+ result;
    
}

function getResult(a,b,c){
    "use strict";
    let x;
    let discr = (b*b - 4*a*c);
    
    if (discr < 0) {
        x = "Корней нет";
        return x;
    } else if (discr == 0) {
        x = (-1*b)/(2*a) ;
        return x;
    } else {
        x = [((-1*b + Math.sqrt(discr)))/(2*a), ((-1*b - Math.sqrt(discr)))/(2*a)];
        return x;
    }

   
}
