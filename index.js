'use strict';
const selectYearInput = document.getElementById("select-year");
const attentionText = document.getElementById("attention-text");
const foodDivided = document.getElementById("food-area");
const wordDivided = document.getElementById("word-area");
const personDivided = document.getElementById("person-area");
const eventDivided = document.getElementById("event-area");
const hogehoge = document.getElementById("hogehoge");

selectYearInput.addEventListener("input",() => {
  const selectYear = Number(selectYearInput.value);
  if(isNaN(selectYear)){
    //入力された値が半角数値以外であった場合
    attentionText.innerHTML = "数値以外のものが含まれています";
    return ;
  }

  attentionText.innerHTML = null;
   
   for (const elem of descriptionOfYear) {
      if(selectYear in elem){
        const subtitle = document.createElement("h3");
        subtitle.innerHTML = "Food";
        const items = document.createElement("h4");
        items.innerHTML = "タピオカ";
        const para = document.createElement("p");
        para.innerHTML = "taito";
        foodDivided.append(subtitle,items,para)
        wordDivided.innerHTML = elem[selectYear].word;
        personDivided.innerHTML = elem[selectYear].person;
        eventDivided.innerHTML = elem[selectYear].event;
        hogehoge.classList.add("fadein");
        // hogehoge.classList.remove("fadein"); 
        return;
      }
  }

  
})

// データ
const descriptionOfYear = [
  {
    "2022":{
      "food":[
      {
        "タピオカ":"ミルクティーと一緒に流行しました"
      },
      {
        "":""
      }],
      "word":[
        {"タピる":""},{"あざまる水産":""}
      ]
    }
  },
  {
    "2019":{
      "food":{
        "タピオカ":"ミルクティー、"
      },
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
    "2015":{
      "food":"",
      "word":"あったかいんだからぁ,本能寺の変"
    }
  },  
  {
    "2014":{
      "food":["パンケーキ","仮"],
      "person":["日本エレキテル連合,妖怪ウォッチ","小保方","佐村河内守"],
      "word":["ラッスンゴレライ"],
    }
  },  
]

