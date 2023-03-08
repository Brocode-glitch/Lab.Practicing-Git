let submitButton = document.getElementById("name-input-button");
let nameInput = document.getElementById("name-input");
let nameLabel = document.getElementById("name-label");
let nameContainer = document.getElementById("name-input-container");
let p1h1 = document.getElementById("p1-name");
let p2h1 = document.getElementById("p2-name");
let p1Name;
let p2Name;
let p1Entered = false;
console.log(submitButton);
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (!p1Entered) {
    //Change label text
    p1Name = nameInput.value;
    if (p1Name === "") {
      alert("Please enter name.");
    } else {
      p1Entered = true;
      nameLabel.innerHTML = "Enter Player 2 Name";
      nameInput.value = "";
    }
  } else {
    // Set P2 name
    // Hide form inputs in display player names with the board
    p2Name = nameInput.value;
    if (p2Name === "") {
      alert("Please enter name.");
    } else {
      nameContainer.style.display = "none";
      //Display PLayer Names
      p1h1.innerHTML = p1Name;
      p2h1.innerHTML = p2Name;
      //Display board
    }
  }
});

//Add board actions
