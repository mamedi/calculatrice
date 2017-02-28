var log = function log(data) {
  "use strict";
  window.console.log(data);
};

var calculatrice = function calculatrice() {
  "use strict";
  var btn, saisie, add, sub, mult, div;
  btn = document.getElementsById("btn");
  saisie = document.getElementsById("ma_saisie");
  log(btn);
  log(saisie);

  //btn.onclick = function click(){
  //log("click 1!!");
  //};

  function gererCLicks() {
    log("click 2 !!!");
    log(saisie.value);
    var res = add();
    log(res);
  }

  function add(a, b){
    return a + b;
  }

  btn.onclick = gererCLicks;

  //btn.addEvenListener("click", genererClicks);
};
