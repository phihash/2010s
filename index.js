'use strict';
const selectYearInput = document.getElementById("select-year");
const resultDevided = document.getElementById("result-area");

selectYearInput.addEventListener("input",() => {
  const selectYear = Number(selectYearInput.value);


  // resultDevided.innerHTML = null;


   for (const elem of descriptionOfYear) {
      if(selectYear in elem){
        resultDevided.innerHTML = null;
        const {foods,words,persons,events} = elem[selectYear];
        const year =  document.createElement("h1");
        year.innerHTML = String(selectYear)+"年";
        resultDevided.appendChild(year);
        resultDevided.append(createDescriptionOfItem(words,"🐇 ワード"))
        resultDevided.append(createDescriptionOfItem(foods,"🌭 食べ物"))
        resultDevided.append(createDescriptionOfItem(persons,"👶 話題となった人物"))
        resultDevided.append(createDescriptionOfItem(events,"📌 出来事"))
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
  const categoryName = document.createElement("h2");
  categoryName.classList.add("category-name");
  categoryName.innerHTML = category;
  Divided.append(categoryName);
  for(const prop in obj){
    const itemName = document.createElement("h3");
    const textOfItem = document.createElement("p");
    textOfItem.classList.add("text-of-item");
    itemName.classList.add("item-name");
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
          "ま":"韓国の某有名オーディション番組から11人がデビューしました"
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
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました",
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました",
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
          "センテンススプリング":"有名人の不倫報道。<br>",
          "あざまる水産":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "ピコ太郎":"PPAPことペンパイナッポーアッポーペン<br>",
          "小池百合子":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "リオオリンピック":"コロナの影響で1年延期されましたが無事開催されました",
          "EU離脱":"EU",
          "SMAP解散":"SMAPが解散しました",
          "PokemonGO":"PokemonGo",
          "熊本地震":"k",
      }
    }
  },{
    "2015":{
      "foods":{
        "おにぎらず":"ミルクティーと一緒に流行しました<br>",
        "ピスタチオ":"ピスタチオを利用した商品と一緒に流行しました。"
      },
      "words":{
          "あったかいんだからぁ":"クマムシというお笑いコンビ<br>",
          "本能寺の変":"本能寺の変"
      },
      "persons":
        {
          "とにかく明るい安村":"オーディンから選出されました。<br>",
          "五郎丸":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "大阪都構想":"p",
          "マイナンバー":"p",
          "北陸新幹線":"p",
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
          "LISA":"オーディンから選出されました。<br>",
          "NIziu":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
      }
    }
  }
  ,
  {
    "2017":{
      "foods":{
        "チーズハットグ":"ミルクティーと一緒に流行しました<br>",
      },
      "words":{
          "タピる":"タピオカの流行を受け、タピオカを飲みに行くことをタピると言いました。<br>",
          "熱盛":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "ブルゾンちえみ":"おもしろ総",
          "INI":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
      }
    }
  },
  {
    "2018":{
      "foods":{
        "チーズダッカルビ":"ミルクティーと一緒に流行しました<br>",
      },
      "words":{
          "タピる":"タピオカの流行を受け、タピオカを飲みに行くことをタピると言いました。<br>",
          "熱盛":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "ブルゾンちえみ":"おもしろ総",
          "INI":"韓国の某有名オーディション番組から11人がデビューしました"
        },
      "events":{
          "東京オリンピック":"コロナの影響で1年延期されましたが無事開催されました"
      }
    }
  },
  {
    "2014":{
      "foods":{
        "チーズダッカルビ":"ミルクティーと一緒に流行しました<br>",
      },
      "words":{
          "タピる":"タピオカの流行を受け、タピオカを飲みに行くことをタピると言いました。<br>",
          "熱盛":"ありがとうの意味を言います。"
      },
      "persons":
        {
          "8.6秒バズーカー":"おもしろ総",
          "日本エレキテル連合":"韓国の某有名オーディション番組から11人がデビューしました",
          "小保方":"韓国の某有名オーディション番組から11人がデビューしました",
          "小保方":"韓国の某有名オーディション番組から11人がデビューしました",
        },
      "events":{
          "税率変更":""
      }
    }
  },
  {
    "2022":{
      "food":"ピスタチオ,マリトッツォ"
    }
  },
  {
    "2014":{
      "food":["パンケーキ","仮"],
      "person":["日本エレキテル連合,妖怪ウォッチ","小保方","佐村河内守"],
    }
  },
]

