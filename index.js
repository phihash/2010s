'use strict';
import { descriptionOfYear } from "./dataset.js"
const selectYearInput = document.getElementById("select-year");
const resultDevided = document.getElementById("result-area");

function viewContent(){
  const selectYear = Number(selectYearInput.value);
  // resultDevided.innerHTML = null;
   for (const elem of descriptionOfYear) {
      if(selectYear in elem){
        resultDevided.innerHTML = null;
        const {hits,words,persons,events} = elem[selectYear];
        const year =  document.createElement("h1");
        year.innerHTML = String(selectYear)+"年";
        resultDevided.appendChild(year);
        resultDevided.append(createDescriptionOfItem(hits,"🎈 ヒット"));
        resultDevided.append(createDescriptionOfItem(words,"🐇 ワード"));
        resultDevided.append(createDescriptionOfItem(persons,"👶 人物"));
        resultDevided.append(createDescriptionOfItem(events,"📌 出来事"));
        return;
      }
  }
}


selectYearInput.addEventListener("input",() => {
  viewContent();
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


viewContent(); // 1度目あとはinputのリスナーを随時
