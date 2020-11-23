export function setPlayer(arr) {
  let place = "";
  let randomNumber = 0;
  while(place == ""){
    randomNumber = Math.floor(Math.random() * 10)
    if(arr[randomNumber] == ""){
      place = randomNumber; 
    }
  } 
  return place;     
}