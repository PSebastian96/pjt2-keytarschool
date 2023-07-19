// Reviews

const reviews = [
    {
        name: "Keytar Player",
        occupation: "Synth Player",
        image: "assets/images/review1.jpg",
        review:
        "I like this website, it is cool and helps you learn the basics!:)"
    },
    {
        name: "Keyplayer",
        occupation: "Pianist",
        image: "assets/images/review2.jpg",
        review:
        "This website helped me learn to play my first chords!"
    },
    {
        name: "Keytee",
        occupation: "Musician",
        image: "assets/images/review3.jpg",
        review:
        "Cool little website for beginner musicians.",
    }
]; 


//current review
let a = 0;
// total reviews
let b = reviews.length;

let reviewContainer = document.getElementById("review-container");

let nextBttn= document.getElementById("next");
let prevBttn= document.getElementById("prev");

nextBttn.addEventListener("click", () => {
    a = (b+a+1) % b;
    dispReview();
});

prevBttn.addEventListener("click", () => {
    a = (b+a-1) % b;
    dispReview();
});

let dispReview = () => {
    reviewContainer.innerHTML = `
    <p>${reviews[a].review}<p>
    <img src=${reviews[a].image} id="rev-img">
    <h3>${reviews[a].name}</h3>
    <h6>${reviews[a].occupation}</h6>
    `;
};
window.onload = dispReview;