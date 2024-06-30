let container = document.getElementById("container");
let image = document.getElementById("image");
let parent = document.getElementById("parent");
let comment = document.getElementById("comment");
let Container2 = document.getElementById("Container2");
let tableBody = document.getElementById("tableBody");
let resultNumberElement = document.getElementById("resultNumber");
let resultNumber = 0;
function handleLogoutClick0() {
    window.location.href = "../quiz/quiz.html";
}

function handleLogoutClick() {
    window.location.href = "../home page/homePage.html";
}

function handleLogoutClick2() {
    parent.style.display = "none";
    container.style.filter = "none";
    console.log("1");
}

function changeResult() {
    Container2.style.background = "rgb(58, 153, 58)";
    image.src = "Hands.png";
    comment.innerHTML = "Congratulations";
}

function test() {
    if (resultNumber > 2) {
        changeResult();
        console.log("yes");
    } else {
        console.log("NO");
    }
}

function table() {
    let quistions = sessionStorage.getItem(questionsText);
    let correctAnswers = sessionStorage.getItem(correctAnswers)
    let answers = sessionStorage.getItem(userAnswers)
    let v = 0;

    for (let i = 0; i < 5; i++) {
        let row = document.createElement("tr");

        let cell1 = document.createElement("td");
        cell1.textContent = `${i + 1}`;
        row.appendChild(cell1);

        let cell2 = document.createElement("td");
        cell2.textContent = quistions[i];
        row.appendChild(cell2);

        let cell3 = document.createElement("td");
        cell3.textContent = correctAnswers[i].answerText;
        row.appendChild(cell3);

        let cell4 = document.createElement("td");
        cell4.textContent = answers[i].answerText;
        if (correctAnswers[i].choice === answers[i].choice) {
            cell4.style.color = "green";
            v += 1;
        } else {
            cell4.style.color = "red";
        }
        row.appendChild(cell4);

        tableBody.appendChild(row);
    }
    resultNumber = v;
    resultNumberElement.innerText = resultNumber;}

window.onload = function() {
    table();
    test();
};
