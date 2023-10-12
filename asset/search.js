let _searchbar = document.getElementById("searchbar");
let _li2a = document.querySelector("#li2>a");
let _searchinp = document.getElementById("searchinp");
let _closesearch = document.getElementById("closesearch");
let _sec = document.getElementById("sec");
let _searchdiv = document.getElementById("searchdiv");
let _asearch = document.querySelectorAll("#searchdiv > ul > li > a");
let _liearch = document.querySelectorAll("#searchdiv > ul > li");


_searchinp.value = ''
_searchbar.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.style.backgroundColor = "#121212";
  _li2a.style.backgroundColor = "black";
  _searchinp.focus();
});

_li2a.addEventListener("click", (e) => {
  e.preventDefault();
  e.target.style.backgroundColor = "#121212";
  _searchbar.style.backgroundColor = "black";
});

_searchinp.addEventListener("focus", () => {
  _searchbar.style.backgroundColor = "#121212";
  _li2a.style.backgroundColor = "black";
});
_searchinp.addEventListener("input", () => {
  _sec.style.display = "none";
  _closesearch.style.display = "flex";
  _searchdiv.style.display = "flex";
});
_closesearch.addEventListener("click", (e) => {
  _searchinp.value = "";
  _closesearch.style.display = "none";
  _sec.style.display = "block";
  _searchdiv.style.display = "none";
});

document.getElementById("searchinp").addEventListener("input", (e) => {
  let val = e.target.value;

  if (val == null || val == "") {
    _asearch.forEach((i) => {
      i.parentElement.style.display = "none";
    });
  } else {
    _asearch.forEach((item) => {
      let txt = item.innerText;
      console.log(txt);
      console.log(txt.substring(0, val.length));
      if (txt.substring(0, val.length) == val) {
        item.parentElement.style.display = "flex";
        console.log('flexxxxxxxxx');
      } else {
        item.parentElement.style.display = "none";
      }
    });
  }
});


document.getElementById('btnsearch').addEventListener('click', () => {
  _liearch.forEach((i) => {
    i.style.display = 'flex'
  })
})
