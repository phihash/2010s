const selectYearInput = document.getElementById("select-year");
const attentionText = document.getElementById("attention-text");


selectYearInput.addEventListener("input",() => {
  const selectYear = selectYearInput.value;

  if(isNaN(Number(selectYear))){//入力された値が数値以外であった場合
    attentionText.innerHTML = "数値以外のものが含まれています"
    return ;
  }

  if(selectYear.length != 4){
    attentionText.innerHTML = null
    return ;
  }else{
  console.log(Number(selectYear));
  }

})

const descriptionOfYear = [
  {
    2019:{
      "food":"タピオカ"
    }
  },
  {
    2020:{
      "food":"ダルゴナコーヒー"
    }
  }
]
