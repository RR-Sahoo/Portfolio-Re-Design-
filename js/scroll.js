let progress = document.getElementById('progressbar');
let progressLeft=document.getElementById('progressbar-left');
let totalHeight= document.body.scrollHeight-window.innerHeight;
window.onscroll=function(){
let progressHeight=(window.pageYOffset/totalHeight)*100;
progress.style.height=progressHeight+"%";
progressLeft.style.height=progressHeight+"%";
}
