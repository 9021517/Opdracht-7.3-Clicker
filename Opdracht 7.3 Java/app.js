let counter = 0;


const counterDisplay = document.getElementById("counter");
const clickButton = document.getElementById("clickButton");


clickButton.addEventListener("click", () => {
   
    counter += 1;

   
    if (counter === 10) {
        
        counter = 0;
    }

    counterDisplay.textContent = counter;
});
