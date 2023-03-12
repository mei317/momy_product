
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