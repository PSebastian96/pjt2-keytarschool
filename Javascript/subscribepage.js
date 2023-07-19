//FAQ section

let faqLi = document.querySelectorAll(".faq-arrow");

for ( i = 0; i < faqLi.length; i++) {
    faqLi[i].addEventListener("click", (e) => {
     let clickedList;
     if (e.target.classList.contains("faq-arrow")) {
        clickedList = e.target.parentElement;
     } else {
        clickedList = e.target.parentElement.parentElement;
        console.log(clickedList);
     };
     clickedList.classList.toggle("showAnswer");
    });
};

// subscription section
let modal = document.getElementById("myModal");
let buttons = document.querySelectorAll(".sub-btn");
let span = document.getElementsByClassName("close")[0];
let cancelBtn = document.getElementById('cancel-btn');

for (let i=0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    modal.style.display = "block";
    console.log("clicked sub button");
  })
}

cancelBtn.addEventListener('click', () => {
  modal.style.display = "none";
})

span.onclick = function() {
  modal.style.display = "none";
}