let joinBtn = document.getElementById("joinBtn");
let countDisplay = document.getElementById("count");

// Load stored data
let count = localStorage.getItem("joinedCount") 
           ? parseInt(localStorage.getItem("joinedCount")) 
           : 0;

let alreadyJoined = localStorage.getItem("userJoined") === "yes";

countDisplay.innerText = count;

if (alreadyJoined) {
    joinBtn.innerText = "Joined ✓";
    joinBtn.classList.add("joined");
    joinBtn.disabled = true;
}

joinBtn.addEventListener("click", () => {
    if (!alreadyJoined) {
        count++;
        countDisplay.innerText = count;

        localStorage.setItem("joinedCount", count);
        localStorage.setItem("userJoined", "yes");

        joinBtn.innerText = "Joined ✓";
        joinBtn.classList.add("joined");
        joinBtn.disabled = true;

        alreadyJoined = true;
    }
});