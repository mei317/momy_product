// const tabs = document.getElementsByClassName('c-product__tab');
// for(let i = 0; i < tabs.length; i++) {
//   tabs[i].addEventListener('click', tabSwitch, false);
// }

// function tabSwitch(){
//   // タブのclassの値を変更
//   document.getElementsByClassName('is-active')[0].classList.remove('is-active');
//   this.classList.add('is-active');
//   // コンテンツのclassの値を変更
//   document.getElementsByClassName('is-show')[0].classList.remove('is-show');
//   const arrayTabs = Array.prototype.slice.call(tabs);
//   const index = arrayTabs.indexOf(this);
//   document.getElementsByClassName('c-product__panel')[index].classList.add('is-show');
// };


$(function(){
  //tabをクリックしたときの動作
  $('.c-product__tab li').click(function(){
      //クリックしたタブのindexを取得
      var index = $('.c-product__tab li').index(this);

      $('.c-product__panel .c-product__panelInner').hide().removeClass('active');
      $('.c-product__panel .c-product__panelInner').eq(index).fadeIn().addClass('active');

      $('.c-product__tab li').removeClass('active');
      $(this).addClass('active');
  });

  //ページャーをクリックしたときの動作
  $('.c-product__tabSub li').click(function(){
      //クリックしたページャーのindexを取得
      var index = $('.c-product__panelInner.active .c-product__tabSub li').index(this);

      $('.c-product__panelInner.active .c-product__tabSub li').removeClass('active');
      $(this).addClass('active');

      //テーブル操作
      $('.c-product__panelInner.active .c-product__panelItem').hide().removeClass('active');
      $('.c-product__panelInner.active .c-product__panelItem').eq(index).fadeIn().addClass('active');
  });
});