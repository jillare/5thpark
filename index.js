// // 動きのきっかけの起点となるアニメーションの名前を定義
// function fadeAnime(){

//     // ふわっ
//     $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
//       var elemPos = $(this).offset().top-50;//要素より、50px上の
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll >= elemPos - windowHeight){
//       $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
//       }
//       });
//   }

//   // 画面をスクロールをしたら動かしたい場合の記述
//     $(window).scroll(function (){
//       fadeAnime();/* アニメーション用の関数を呼ぶ*/
//     });// ここまで画面をスクロールをしたら動かしたい場合の記述

//   // 画面が読み込まれたらすぐに動かしたい場合の記述
//     $(window).on('load', function(){
//       fadeAnime();/* アニメーション用の関数を呼ぶ*/
//     });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// .fadeUp がついたタグに対してアニメーション
const sample = document.querySelectorAll(".fadeUp");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        // // 可視領域から外れたらリセット
        // entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.5 }
);

sample.forEach((item) => {
  observer.observe(item);
});
