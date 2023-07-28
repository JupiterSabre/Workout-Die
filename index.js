/* hiiiii welcome to HIIT die. :3 */


    // EVENT LISTENER HOOKS UP ROLL DIE UP WITH GENERATOR
    document.querySelector(`#logo`).addEventListener(`click`, (e) => {

        const logo = document.querySelector("#logo");
    logo.classList.add("spin-animation");
    setTimeout(() => {
      logo.classList.remove("spin-animation");
    }, 3000);
    
    // GRABS WORKOUT DATABASE AND GENERATES A RANDOM WORKOUT PROPERTY FROM THE ARRAY
    fetch("http://localhost:3000/workouts")
    .then(res => res.json())
    .then(workOuts => getRandomWorkout(workOuts))
    const getRandomWorkout = (workOuts) => { 
        if (!Array.isArray(workOuts) || workOuts.length === 0) {
            return null;
        }

    // RENDER WORKOUT NAME AND IMAGE        
        const randomIndex = Math.floor(Math.random() * workOuts.length);
        const generatedWorkOut = workOuts[randomIndex];
        const circuitList = document.querySelector(`#current-circuit`)
        const newP = document.createElement(`li`)
        const workoutImg = document.createElement(`img`)
        workoutImg.style.height = `200px`
        workoutImg.src = generatedWorkOut.img
        newP.innerText =  generatedWorkOut.workout
        newP.setAttribute(`class`, `current`)
        circuitList.appendChild(newP)
        const imgSpan = document.createElement(`span`)
        // imgSpan.setAttribute(`id`, `span`)
        imgSpan.append(workoutImg)
        newP.append(imgSpan)

    // SET TIMEOUT TO MAKE CURRENT GIF DISPLAYED EXPIRE, CHANGE TIMEOUT TO 2000 MS WHEN DEMO-ING
        setTimeout(() => {
            workoutImg.remove();
        }, 6000);    
      }})

    
      
      
    // CLEARS CURRENT CIRCUIT BUTTON
    const circuitList = document.body.querySelector(`#current-circuit`)
    const clearButton = document.body.querySelector(`#clear-circuit`)
    clearButton.addEventListener(`click`, () => {
        console.log(`i am cleared!`)
        circuitList.innerText = ``
    })
    
    
    
    // CIRCUIT IS ARCHIVED IN ITS OWN DIV BELOW
    const archiveButton = document.querySelector(`#save-circuit`)
    archiveButton.addEventListener(`click`, () => {
        console.log(`i am archived!`)
        const circuitHistory = document.querySelector(`#circuit-history`)
        const allWorkouts = document.querySelectorAll(`#current-circuit .current`)
      
        

    // CREATE & FORMAT DISPLAY CARD FOR COMPLETED CIRCUIT, INCLUDING TIMESTAMP
        const archiveDiv = document.createElement(`div`)
        archiveDiv.setAttribute(`class`, `card` )
        archiveDiv.style.borderStyle = `outset`
        archiveDiv.prepend(getTimestamp())



    //FUNCTIONALITY FOR DELETING CARDS
        const deleteButton = document.createElement(`button`)
        deleteButton.setAttribute(`class`, `rmv-button card-button`)
        deleteButton.textContent = `remove`    
        archiveDiv.appendChild(deleteButton)
        console.log(deleteButton)
        deleteButton.addEventListener(`dblclick`, (e) => {
            console.log(`be gone!`)
            archiveDiv.remove()
        })



    // FUNCTIONALITY FOR EMAIL BUTTON FOR EACH COMPLETED CIRCUIT CARD
        const emailBtn = document.createElement(`button`)
        emailBtn.textContent = `email circuit`
        emailBtn.setAttribute(`class`, `email-btn card-button`)
        emailBtn.addEventListener(`click`, () => {
            console.log(`EMAILLLL`)
            window.location.href="mailto:mail@example.com?subject=My Circuit"+"&body="+oneCircuit.textContent
        })
        archiveDiv.appendChild(emailBtn)


        
   // FUNCTIONALITY FOR FOCUSING AN ARCHIVE DIV WITH A HIGHLIGHTED BACKGROUND
        archiveDiv.addEventListener(`mouseover`, () => {
            archiveDiv.style.backgroundColor = `rgb(195, 40, 80, .20)`
        })
        archiveDiv.addEventListener(`mouseout`, () => {
            archiveDiv.style.backgroundColor = `white`
        })   
        
        

    // FUNCTIONALITY FOR APPENDING WORKOUT CIRCUIT INTO ITS OWM DIV CARD
        const oneCircuit = document.createElement(`ul`)
        oneCircuit.setAttribute(`class`, `saved-list`)
        allWorkouts.forEach(workout => {
            console.log(workout)
            archiveDiv.appendChild(oneCircuit)
            oneCircuit.appendChild(workout.cloneNode(true));
            circuitHistory.prepend(archiveDiv)
            circuitList.textContent = `` 
        })
    })



    // CONFIGURE TIMESTAMP AND CALL BACK IN ARCHIVE DIV AND ARCHIVE BUTTON
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



    // CALL FUNCTION TO GET TIME STAMP
        const timestamp = getTimestamp();
    


