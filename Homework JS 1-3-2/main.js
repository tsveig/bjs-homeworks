function getPersonData( secretData ){
  
  let name = helperPersonData( secretData.aaa );
  
  let surname = helperPersonData( secretData.bbb ); 
  
  let pirate = {firstName: name, lastName: surname};
  
  return pirate;

}



function helperPersonData( secretData ){
  
  if (secretData == 1){
    
    return `Эмилио`;
  
  } 
  
  if (secretData == 0){
    
    return `Родриго`;
  
  }

}

console.log(getPersonData( {aaa: 0, bbb: 0} ));

console.log(getPersonData( {aaa: 0, bbb: 1} ));

console.log(getPersonData( {aaa: 1, bbb: 0} ));

console.log(getPersonData( {aaa: 1, bbb: 1} ));