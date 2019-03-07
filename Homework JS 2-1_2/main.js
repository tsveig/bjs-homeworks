function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}
 
function getGreeting(name) {
    if ((name == `` || name == null)){
      return `Привет, мир! Меня зовут Аноним`;
    }
    return `Привет, мир! Меня зовут ` + name;
    
}