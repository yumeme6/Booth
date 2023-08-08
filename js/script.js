$(document).ready(function () {
    // 初期状態で非表示にする要素を取得
    var hiddenElements = $('.content-title').hide();
    
    // スクロール時の処理
    $(window).scroll(function () {
      // 要素が画面上に表示されたらフェードインさせる
      hiddenElements.each(function () {
        var elementTop = $(this).offset().top;
        var windowHeight = $(window).height();
        var scroll = $(window).scrollTop();
        
        if (scroll > elementTop - windowHeight + 100) { // 要素が画面の下から100pxの位置に来たら表示
          $(this).fadeIn();
        }
      });
    });
  });