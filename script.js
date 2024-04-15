// selected all html id
const cards = document.querySelectorAll(".cad");
console.log(cards);

// window.onload function
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  cards.forEach(function (card) {
    const textStyle = card.querySelector(".text-data");
    card.addEventListener("mouseover", function () {
      textStyle.style.display = "block";
      
    });
    card.addEventListener("mouseout", function () {
      textStyle.style.display = "none";
    });
  });
}
