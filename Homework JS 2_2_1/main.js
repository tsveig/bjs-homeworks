function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;
 
    const result = checkBirthday(birthday) ? "Да" : "Нет";
 
    document.getElementById('disclaimer').innerHTML = result;   
}
 
function checkBirthday(birthday) {
    let now = new Date();
    let eightteen = 18*365.25*24*60*60*1000;
    birthday = new Date(birthday);
    let diff = now - birthday;
    let age = diff/(365.2421897*24*60*60*1000);
    
    return (age > 18);
    
}
