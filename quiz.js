const quizList = [
  {
    quiz: "キャプテン翼の主人公は誰？",
    select: ["日向小次郎","デューター・ミューラー","岬太郎","大空翼"],
    answer: "大空翼"
  },{
    quiz: "日向小次郎の必殺技は？",
    select: ["タイガーショット","ドライブシュート","ファイヤーショット","カミソリシュート"],
    answer: "タイガーショット"
  },{
    quiz: "南葛中学校のゴールキーパーは誰？",
    select: ["井沢守","高杉真吾","石崎了","森崎有三"],
    answer: "森崎有三"
  }
];

let quizCount = 0;
let total = 0;

const $btn = document.getElementsByTagName("button");

//選択肢をHTML上へ反映する為の関数を用意
const selectList = () =>{
  document.getElementById("question").textContent = quizList[quizCount].quiz;
  let count = 0;
  while(count < $btn.length){
    $btn[count].textContent = quizList[quizCount].select[count];
    count++;
  }
}
selectList();

//問題の正誤判定
const btnClick = (e) =>{
  if(quizList[quizCount].answer === e.target.textContent){
    window.alert("正解！");
    total++;
  }else{
    window.alert(`残念！正解は「${quizList[quizCount].answer}」です！`);
  }

  quizCount++;
  if(quizCount < quizList.length){
    selectList();
  }else{
    window.alert("終了です！正解数は" + quizList.length + "問中" + total + "問正解でした！");
  }

}

let btnCount = 0;
while(btnCount < $btn.length){
  $btn[btnCount].addEventListener("click", (e) => {
    btnClick(e);
  });
  btnCount++;
}