const title = document.getElementById("title");
title.textContent = "DOM Manipulation Project";
title.innerHTML = "<span>Welcome <b>Students</b></span>";
title.style.color = "white";
title.style.background = "blue";
title.style.padding = "10px";
const input = document.getElementById("studentName");

const addBtn = document.getElementById("addBtn");

const removeBtn = document.getElementById("removeBtn");

const container = document.getElementById("container");

console.log(title);
console.log(input);
console.log(addBtn);
console.log(removeBtn);
console.log(container);