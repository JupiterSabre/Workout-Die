fetch("http://localhost:3000/workouts")
.then(res => res.json())
.then(workOuts => console.log(workOuts))


// TO DO
// -find bootstrap landing page template.
// -create button out of die that triggers workout suggestion & displays workout gif. Get it to spin a bit.
// -create form to record workout circuit

document.querySelector("#logo").addEventListener("click", function() {
    const logo = document.getElementById("logo");
    logo.classList.add("spin-animation");
    setTimeout(() => {
      logo.classList.remove("spin-animation");
    }, 3000); 
  });