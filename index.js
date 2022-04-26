'use strict';
const selectYearInput = document.getElementById("select-year");
const attentionText = document.getElementById("attention-text");
const wordDivided = document.getElementById("word-area");
const personDivided = document.getElementById("person-area");
const eventDivided = document.getElementById("event-area");
const resultDevided = document.getElementById("result-area");

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
        wordDivided.innerHTML = elem[selectYear].word;
        personDivided.innerHTML = elem[selectYear].person;
        eventDivided.innerHTML = elem[selectYear].event;
        return;
      }
  }

  
})

// データ
const descriptionOfYear = [
  {
    "2021":{
      "food":[
      {
        "タピオカ":"ミルクティーと一緒に流行しました"
      },
      {
        "ピスタチオ":"ピスタチオを利用した商品と一緒に流行しました。"
      }
      ],
      "word":[
        {
          "タピる":"タピオカの流行を受け、タピオカを飲みに行くことをタピると言いました"
        },
        {
          "あざまる水産":"ありがとうの意味を言います。"
        }
      ],
      "person":[
        {
          "BE-FIRST":"オーディンから選出されました"
        },
        {
          "INI":"韓国の某有名オーディション番組から11人がデビューしました"
        }
      ],
      "event":[
        {
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
        }
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
    "2022":{
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

