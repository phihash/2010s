const selectYear = document.getElementById("select-year");


selectYear.addEventListener("input",() => {
  console.log(selectYear.value);
  console.log(typeof selectYear.value);
})

