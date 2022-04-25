const selectYearInput = document.getElementById("select-year");
const attentionText = document.getElementById("attention-text");
const testText = document.getElementById("test-text");


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
   testText.innerHTML = null;
   
   for (const elem of descriptionOfYear) {
    if(Object.keys(elem)[0] == Number(selectYear)){
      testText.innerHTML = elem[Number(selectYear)].food;
      return;
    }
  }

  }
})

const descriptionOfYear = [
  {
    "2019":{
      "food":"kkkkk"
    }
  },
  {
    "2020":{
      "food":"タピオカ"
    }
  },
  
]
