let text = prompt("Enter name");

if (text !== null) {
  text = text.trim(); 

  if (text.length > 0) {
    alert(text[0]);
  } else {
    alert("");
  }
}


// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
