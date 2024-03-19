// Тоглоомын бүх газарт ашиглагдах глобаль хуьсагчдыг энд зарлья
// Тоглоом дууссан эсэхийг хадгалах төлөвийн хувьсагч
var isNewGame;
// Аль тоглогч шоо вэ гэдгийг энд хадгална
var activePlayer;

// Хоёр тоглогчийн цуглуулсан оноонууд
var scores;

// Идэвхтэй тоглогчийн цуглуулж байгаа ээлжийн оноо
var roundScore;

// Шооны зургийг үзүүлэх элементийг DOM-оос хайж олоод энд хадгалья
var diceDom = document.querySelector(".dice");
// Тоглоомыг эхлүүлнэ
initGame();

// Тоглоомыг шинээр эхлэхэд бэлтгэнэ
function initGame() {

    // Тоглоом эхэлээ гэдэг төлөвт оруулнө.
    isNewGame = true;

    // Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийн 0 хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
    activePlayer = 0;

    // Тоглогчийн цуглуулсан оноог хадгалах хувьсагч.
    scores = [0, 0];

    // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч.
    roundScore = 0;


// Программ эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// Тоглогчдийн нэрийг буцааж гаргах
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");

diceDom.style.display = "none"
}
// Шоог шидэх эвент листернер
document.querySelector(".btn-roll").addEventListener("click", function() {

    if (isNewGame) {
        // 1-6 доторх санамсаргүй нэг тоо гаргаж авна
        var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Шоог зургын веб дээр гаргаж ирнэ
        diceDom.style.display = "block"

    // Буусан санамсаргүй тоонд харгалзах шооны зургийг веб дээр гаргаж ирнэ
        diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоон нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ 
        if(diceNumber !== 1){

        // 1-ээс ялгаатай тоо буулаа. Буусан тоог тоглогчид нэмж өгнө
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
        } else {
        // 1 буусан тул тоглогчийн ээлжийг энэ хэсэгт сольж өгнө.
        switchTonextPlayer();
        }
    } 
}); 
// Hold товчний эвент листернер
document.querySelector(".btn-hold").addEventListener("click", function() {

   if(isNewGame) 
   {
 // Уг тоглогчийн цуглуулсан оноог глобал оноон дээр нэмж өгнө
    // if (activePlayer === 0) {
    //     scores[0] = scores[0] + roundScore;
    // } else {
    //     scores[1] = scores[1] + roundScore;
    // } 
    scores[activePlayer] = scores[activePlayer] + roundScore;

    // Дэлгэц дээр код нь өөрчилнө
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

    // Уг тоглогч хожсон эсэхийг (оноо нь 100-аас их эсэх) шалгах
if (scores[activePlayer] >= 100 ) {

    // Тоглоомийг дууссан төлөвт оруулна.
    isNewGame = false;

    // Ялагч гэсэн текстийг нэрний оронд гаргана.
    document.getElementById("name-" + activePlayer).textContent = "Winner !!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner")
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active")
} else {
    // Тоглогчийн ээлжийг солино.
    switchTonextPlayer();   
}
   } else {

   }
});
// Энэ функц нь тоглох ээлжийг дараачийн тоглогчруу шилжүүлнэ.
function switchTonextPlayer() {

     // Энэ тоглогчийн ээлжийн дээр цуглуулсан оноог 0 болгоно.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    // Тоглогчийн ээлжийг нөгөө тоглогчруу шилжүүлнэ. 
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0); 

    // Улаан цэгийг шилжүүлэх 
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
    // Шоог түр алга болгоно.
    diceDom.style.display = "none";
}
// Шинэ тоглоом эхлүүлэх эвент лестерен
document.querySelector(".btn-new").addEventListener("click", initGame);
