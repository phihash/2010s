'use strict';
const selectYearInput = document.getElementById("select-year");
const attentionText = document.getElementById("attention-text");
const resultDevided = document.getElementById("result-area");

selectYearInput.addEventListener("input",() => {
  const selectYear = Number(selectYearInput.value);
  if(isNaN(selectYear)){
    //入力された値が半角数値以外であった場合
    attentionText.innerHTML = "数値以外のものが含まれています";
    return ;
  }

  attentionText.innerHTML = null;
  resultDevided.innerHTML = null;

   for (const elem of descriptionOfYear) {
      if(selectYear in elem){ 
        const {foods,words,persons,events} = elem[selectYear]; 
        resultDevided.append(createDescriptionOfItem(words,"ワード"))
        resultDevided.append(createDescriptionOfItem(foods,"食べ物"))
        resultDevided.append(createDescriptionOfItem(persons,"人物"))
        resultDevided.append(createDescriptionOfItem(events,"出来事"))
        return;
      }
  }

})

/**
 * ある項目とその項目を説明する要素を生成する
 * @param {obj} obj
 * @returns {}
 */
function createDescriptionOfItem(obj,category){
  const Divided = document.createElement("div");
  const categoryName = document.createElement("h3");
  categoryName.innerHTML = category;
  Divided.append(categoryName);
  for(const prop in obj){
    const itemName = document.createElement("h4");
    const textOfItem = document.createElement("p");
    itemName.innerHTML = prop;
    textOfItem.innerHTML = obj[prop];
    Divided.append(itemName,textOfItem);
  }
  return Divided;
}

/**
 * ある要素の全ての子要素を削除する
 * @param
 * 
 */


// データ
const descriptionOfYear = [
  {
    "2021":{
      "foods":{
        "タピオカ":"ミルクティーと一緒に流行しました<br>",
        "ピスタチオ":"ピスタチオを利用した商品と一緒に流行しました。"
      },
      "words":{
          "タピる":"タピオカの流行を受け、タピオカを飲みに行くことをタピると言いました。<br>",
          "あざまる水産":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "BE-FIRST":"オーディンから選出されました。<br>",
          "INI":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
      }
    }
  },
  {
    "2012":{
      "foods":{
        "タピオカ":"ミルクティーと一緒に流行しました<br>",
        "ピスタチオ":"ピスタチオを利用した商品と一緒に流行しました。"
      },
      "words":{
          "タピる":"タピオカの流行を受け、タピオカを飲みに行くことをタピると言いました。<br>",
          "あざまる水産":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "BE-FIRST":"オーディンから選出されました。<br>",
          "INI":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
      }
    }
  },{
    "2019":{
      "foods":{
        "タピオカ":"ミルクティーと一緒に流行しました<br>",
        "ピスタチオ":"ピスタチオを利用した商品と一緒に流行しました。"
      },
      "words":{
          "タピる":"タピオカの流行を受け、タピオカを飲みに行くことをタピると言いました。<br>",
          "あざまる水産":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "BE-FIRST":"オーディンから選出されました。<br>",
          "INI":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
      }
    }
  },{
    "2016":{
      "foods":{
        "タピオカ":"ミルクティーと一緒に流行しました<br>",
        "ピスタチオ":"ピスタチオを利用した商品と一緒に流行しました。"
      },
      "words":{
          "タピる":"タピオカの流行を受け、タピオカを飲みに行くことをタピると言いました。<br>",
          "あざまる水産":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "BE-FIRST":"オーディンから選出されました。<br>",
          "INI":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
      }
    }
  },{
    "2015":{
      "foods":{
        "タピオカ":"ミルクティーと一緒に流行しました<br>",
        "ピスタチオ":"ピスタチオを利用した商品と一緒に流行しました。"
      },
      "words":{
          "あったかいんだからぁ":"クマムシというお笑いコンビ<br>",
          "あざまる水産":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "BE-FIRST":"オーディンから選出されました。<br>",
          "INI":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
      }
    }
  },
  {
    "2013":{
      "foods":{
        "タピオカ":"ミルクティーと一緒に流行しました<br>",
        "ピスタチオ":"ピスタチオを利用した商品と一緒に流行しました。"
      },
      "words":{
          "タピる":"タピオカの流行を受け、タピオカを飲みに行くことをタピると言いました。<br>",
          "あざまる水産":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "BE-FIRST":"オーディンから選出されました。<br>",
          "INI":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
      }
    }
  },
  {
    "2020":{
      "foods":{
        "ダルゴナコーヒー":"ミルクティーと一緒に流行しました<br>",
      },
      "words":{
          "タピる":"タピオカの流行を受け、タピオカを飲みに行くことをタピると言いました。<br>",
          "あざまる水産":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "BE-FIRST":"オーディンから選出されました。<br>",
          "INI":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
      }
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
    "2014":{
      "food":["パンケーキ","仮"],
      "person":["日本エレキテル連合,妖怪ウォッチ","小保方","佐村河内守"],
      "word":["ラッスンゴレライ"],
    }
  },  
]

