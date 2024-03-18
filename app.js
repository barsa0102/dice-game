// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийн 0 хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var avtivePlaye = 1;


// Тоглогчийн цуглуулсан оноог хадгалах хувьсагч.
var scores = [0, 0];
// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч.
var roundScore = 0;

//Шооний аль талаараа буусныг хадгалах хувьсагч хэрэгтэй 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
var dice = Math.floor (Math.random() * 6) + 1;
{/* <div class="player-score" id="score-0">43</div> */}
// window.document.querySelector('#score-0').textContent = dice

// Программ эхлэхэд бэлтгэе
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;
document.querySelector('.dice').style.display = "none"

console.log('Шоо :' + dice);