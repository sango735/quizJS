//問題文と選択肢と回答を用意
const quiz = "キャプテン翼の主人公は誰？";
const select = ["日向小次郎","デューター・ミューラー","岬太郎","大空翼"];
const answer = "大空翼";

const $btn = document.getElementsByTagName("button");

//選択肢をHTML上へ反映する為の関数を用意
const selectList = () =>{
  document.getElementById("question").textContent = quiz;
  let count = 0;
  while(count < select.length){
    $btn[count].textContent = select[count];
    count++;
  }
}
selectList();

//問題の正誤判定
count = 0;
while(count < select.length){
  $btn[count].addEventListener("click", (e) => {
    if(answer === e.target.textContent){
      window.alert("正解！");
    }else{
      window.alert(`残念！正解は「${answer}くん」です！`)
    }
  });
  count++;
}