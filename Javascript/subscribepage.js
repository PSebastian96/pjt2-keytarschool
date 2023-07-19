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