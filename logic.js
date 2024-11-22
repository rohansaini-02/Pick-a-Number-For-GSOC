let cnum = Math.floor(Math.random() * 100) + 1;
let attempt = 0;
let attemptData = document.getElementById("Attempt");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let msg = document.getElementById("msg");

function check() {
    let usernum = parseInt(userinp.value);
    if (cnum === usernum) {
        msg.innerHTML = "🎉Congratulations, you have guessed the number!🎉";
        msg.style.color = "green";
        resBtn.style.display = "block";
    //     setTimeout(() => {
    //         msg.innerHTML = ""; // Clear message after 10 seconds
    //     }, 10000); // 1000 milliseconds (1 second)
    } else if (cnum < usernum) {
        msg.innerHTML = "Too high! Try again 😵‍💫";
        msg.style.color = "red";
        setTimeout(()=>{
            msg.innerHTML="";
        },2000);
    } else {
        msg.innerHTML = "Too low! Try again 😶‍🌫️";
        msg.style.color = "red";
        setTimeout(()=>{
            msg.innerHTML="";
        },2000);
    }
    attempt++;
    attemptData.innerHTML = attempt;
    setTimeout(() => {
        userinp.value = "";
    }, 500); // 1000 milliseconds (1 second)
}

function restart() {
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    msg.innerHTML = "";
    attemptData.innerHTML = attempt;
    resBtn.style.display = "none";
}

subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);
