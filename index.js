const selectYearInput = document.getElementById("select-year");
const attentionText = document.getElementById("attention-text");


selectYearInput.addEventListener("input",() => {
  const selectYear = selectYearInput.value;

  if(isNaN(Number(selectYear))){//入力された値が数値以外であった場合
    attentionText.innerHTML = "数値以外のものが含まれています"
    return ;
  }

  attentionText.innerHTML = null

  console.log(Number(selectYear));
  console.log(typeof Number(selectYear));
})

