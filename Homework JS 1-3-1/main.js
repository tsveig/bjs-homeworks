function calculateQuadraticEquation() {
  let a = window.a.value;
  let b = window.b.value;
  let c = window.c.value;
  let result = showSolutionsMessage(a, b, c);
  window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
  let span = window.result;
  span.textContent = result;

}

function getSolutions(a, b, c) {
  "use strict";
  let x;
  let discriminant = (b*b - 4*a*c);

  if (discriminant < 0) {
    x = {D: discriminant};

  } else if (discriminant == 0) {
    x = {roots: [(-1*b)/(2*a)], 
         D: discriminant 
    };

  } else {
    x = {roots: [((-1*b + Math.sqrt(discriminant)))/(2*a), 
                 ((-1*b - Math.sqrt(discriminant)))/(2*a)], 
                 D: discriminant
    };
  }
    //console.log(x);
    return x;
  }
  
  function showSolutionsMessage(a, b, c) {
    console.log(`Находим корни квадратного уравнения: ${a}*x^2 + (${b})*x + (${c}) = 0`);
    let result = getSolutions(a, b, c);
    let message;
    console.log(`Находим дискриминант: ${result.D}`);
    if (result.D < 0){
      message = `Уравнение не имеет вещественных корней`; 
    } else if (result.D == 0){
      message = `Уравнение имеет один корень X1 = ${result.roots}`;
    } else {
      message = `Уравнение имеет два корня. X1 = ${result.roots[0]}, X2 = ${result.roots[1]}`;
    }
    console.log(message);
    return message;
    
    
  }