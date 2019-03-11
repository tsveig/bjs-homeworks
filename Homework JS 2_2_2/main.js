function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };
 
    const result = getAnimalSound(animal);
 
    document.getElementById('sound').innerHTML = result;   
}
 
function getAnimalSound(animal) {
  let sound = animal.sound;
  if (animal === undefined) {
    return null;
  } else {
    return sound;
  }
  
 }
