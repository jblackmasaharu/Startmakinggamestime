var myCreatTime = new Date(2020, 05, 20, 00, 00);
function updateParagraph(){
  var now = new Date();
  var seconds = (now.getTime() - myCreatTime.getTime()) / 1000;
  document.getElementById('birth-time').innerText = `ゲーム制作を始めてから${seconds.toFixed(0)}秒経過。`;
}
setInterval(updateParagraph, 50);
