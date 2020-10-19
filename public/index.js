const accordianList = document.querySelector(".accordian-list");

accordianList.addEventListener("click", (e) => {
  const target = e.target;
  target.classList.toggle("active");

  console.log("target", target);

  const answer = target.nextSibling.nextSibling;
  console.log("answer", answer);
  answer.classList.toggle("hidden");
});
