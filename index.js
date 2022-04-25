const selectYearInput = document.getElementById("select-year");
const attentionText = document.getElementById("attention-text");
const foodDivided = document.getElementById("food-area");
const wordDivided = document.getElementById("word-area");
const personDivided = document.getElementById("person-area");
const eventDivided = document.getElementById("event-area");


selectYearInput.addEventListener("input",() => {
  const selectYear = selectYearInput.value;

  if(isNaN(Number(selectYear))){
    //入力された値が半角数値以外であった場合
    attentionText.innerHTML = "数値以外のものが含まれています"
    return ;
  }

  if(selectYear.length != 4){
    attentionText.innerHTML = null
    return ;
  }else{
   foodDivided.innerHTML = null;
   
   for (const elem of descriptionOfYear) {
    
    if(Object.keys(elem) == Number(selectYear)){
      foodDivided.innerHTML = elem[Number(selectYear)].food;
      wordDivided.innerHTML = elem[Number(selectYear)].word;
      personDivided.innerHTML = elem[Number(selectYear)].person;
      eventDivided.innerHTML = elem[Number(selectYear)].event;
      return;
    }
  }

  }
})

// データ
const descriptionOfYear = [
  {
    "2019":{
      "food":"タピオカ",
      "word":"タピる<br>あざまる水産"
    }
  },
  {
    "2020":{
      "food":"ダルゴナコーヒー",
      "word":"〇〇しか勝たん"
    }
  },
  {
    "2018":{
      "food":"チーズダッカルビ",
      "word":"aaaaaaa"
    }
  },
  {
    "2021":{
      "food":"ピスタチオ,マリトッツォ"
    }
  },
  {
    "2017":{
      "food":"チーズハットグ",
      "words":"熱盛",
      "person":"ブルゾンちえみ"
    }
  },
  {
    "2016":{
      "food":"タピオカ"
    }
  },  
  {
    "2014":{
      "food":"パンケーキ"
    }
  },  
]
