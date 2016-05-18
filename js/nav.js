/**
 * Created by Raoul on 2016/5/18.
 */
window.onload=function () {
    var oLi=document.getElementById('nav').getElementsByTagName('li');
    for(var i = 0; i<9 ; i++){
        console.log(i);
        console.log(oDiv[i]);
        oLi[i].onmouseover = function () {
            this.style.background="#073f7b";

        }
        oLi[i].onmouseout = function () {
            this.style.background="#004ea1";
        }
    }
   






}