let _scroll = document.getElementById("scroll");
_sec.addEventListener("scroll", (e) => {
  _scroll.style.display = "flex";
  let sech = _sec.clientHeight;
  let secdiv = document.querySelector("#sec > div ");
  let th = secdiv.clientHeight;
  th = th - sech;
  console.log("im here");
  let st = e.target.scrollTop;
  _scroll.style.top = (st * 82) / th + "%";
});
