fetch("http://localhost:3000/workouts")
.then(res => res.json())
.then(workOuts => console.log(workOuts))



// TO DO
// -find bootstrap landing page template.
// -create button out of die that triggers workout suggestion & displays workout gif. Get it to spin a bit.
// -create form to record workout circuit


document.querySelector("#logo").addEventListener("click", function() {
    const logo = document.querySelector("#logo");
    logo.classList.add("spin-animation");
    setTimeout(() => {
        logo.classList.remove("spin-animation");
    }, 3000); 
});



                         
 // EVENT LISTENER HOOKS UP ROLL DIE UP WITH GENERATOR
document.querySelector(`#logo`).addEventListener(`click`, (e) => {
// GRABS WORKOUT DATABASE AND GENERATES A RANDOM WORKOUT PROPERTY FROM THE ARRAY
fetch("http://localhost:3000/workouts")
.then(res => res.json())
.then(workOuts => getRandomWorkout(workOuts))
const getRandomWorkout = (workOuts) => { 
    if (!Array.isArray(workOuts) || workOuts.length === 0) {
        return null;
    }
        const randomIndex = Math.floor(Math.random() * workOuts.length);
        const generatedWorkOut = workOuts[randomIndex];
        const circuitList = document.querySelector(`#current-circuit`)
        const newP = document.createElement(`li`)
    
          
        const workoutImg = document.createElement(`img`)
        workoutImg.style.height = `200px`
        workoutImg.src = generatedWorkOut.img
        newP.innerText = generatedWorkOut.workout
        newP.setAttribute(`class`, `current`)
        circuitList.appendChild(newP)
        const imgSpan = document.createElement(`span`)
        imgSpan.append(workoutImg)
        newP.append(imgSpan)   
        setTimeout(() => {
            workoutImg.remove();
        }, 5000);  
        }})
    
    
    
    // CLEARS CURRENT CIRCUIT BUTTON
    const circuitList = document.body.querySelector(`#current-circuit`)
    const clearButton = document.body.querySelector(`#clear-circuit`)
    clearButton.addEventListener(`click`, () => {
        console.log(`i am cleared!`)
        circuitList.innerText = ``
    })

    
    
    //CIRCUIT IS ARCHIVED IN ITS OWN DIV BELOW
    const archiveButton = document.querySelector(`#save-circuit`)
    archiveButton.addEventListener(`click`, () => {
        console.log(`i am archived!`)
        const circuitHistory = document.querySelector(`#circuit-history`)
        const allWorkouts = document.querySelectorAll(`#current-circuit .current`)
        // LOOP THROUGH EACH ELEMENT IN NODE LIST AND APPEND TO CIRCUIT HISTORY
        const archiveDiv = document.createElement(`div`)
        archiveDiv.style.borderStyle = `outset`
        archiveDiv.prepend(getTimestamp())
        allWorkouts.forEach(workout => {
            const oneCircuit = document.createElement(`ul`)
            console.log(workout)
            archiveDiv.appendChild(oneCircuit)
            oneCircuit.appendChild(workout.cloneNode(true));
            circuitHistory.append(archiveDiv)
            circuitList.textContent = `` 
            
        })
        
    })
     // CONFIGURE TIMESTAMP AND CALL BACK IN  ARCHIVE DIV AND ARCHIVE BUTTON
     function getTimestamp() {
        const now = new Date();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
        const day = String(now.getDate()).padStart(2, '0');
        const year = now.getFullYear();
        let hours = now.getHours();
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        hours = String(hours % 12 || 12).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const timestamp = `${month}/${day}/${year} ${hours}:${minutes} ${amOrPm}`;
        return timestamp;
     }
 
//  CALL FUNCTION TO GET TIME STAMP
      const timestamp = getTimestamp();
      
      