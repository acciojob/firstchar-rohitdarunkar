let text = prompt("Enter text");

if (text !== null) {
  text = text.trim();

  let firstChar = "";      // ✅ declared

  if (text.length > 0) {
    firstChar = text[0];
  }

  alert(firstChar);
}



// Do not change the code below
//Uncomment the following line to show the prompt popup
//const text = prompt("Enter text:");
alert(firstChar(text));
