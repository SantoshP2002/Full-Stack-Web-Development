

let container = document.getElementById("container");

console.log(container.clientHeight);
console.log(container.scrollHeight);
// console.log(container.scrollTop);

container.addEventListener("scroll", () => {
  let clientHeight = container.clientHeight;
  let scrollHeight = container.scrollHeight;
  let scrollTop = container.scrollTop;

  console.log(clientHeight, scrollHeight, scrollTop);

  if (Math.ceil(scrollHeight - clientHeight) <= Math.ceil(scrollTop)) {
    console.log("Reaches to Bottom");
  }
});
