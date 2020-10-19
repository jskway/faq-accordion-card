const accordianList = document.querySelector(".accordian-list");
const accordianItems = accordianList.children;

accordianList.addEventListener("click", (e) => {
  const [question, answer] = e.target.children;

  question.classList.toggle("active");
  answer.classList.toggle("hidden");

  [...accordianItems].forEach((item) => {
    if (item !== e.target) {
      const [itemQuestion, itemAnswer] = item.children;

      itemQuestion.classList.remove("active");

      if (![...itemAnswer.classList].includes("hidden")) {
        itemAnswer.classList.add("hidden");
      }
    }
  });
});
