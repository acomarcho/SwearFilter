const filterText = require("./brutehamming");

window.addEventListener('DOMContentLoaded', () => {
  const inputArea = document.querySelector(".inputArea");
  const submitBtn = document.querySelector(".submitBtn");
  const resultArea = document.querySelector(".resultArea");
  
  const onSubmit = (e) => {
    e.preventDefault();
    resultArea.value = filterText(inputArea.value);
  };
  
  submitBtn.onclick = onSubmit;
})
