// main.js
$(function(){

    // 1단계 메뉴에 마우스가 올라가면 depth2 class='on'
    // ... 마우스가 나가면 depth2 class on 제거
    $('#gnb > ul > li').hover(
      function(){
        $(this)
        .children()
        .addClass('on');
      },
      function(){
        $(this).children().removeClass('on');
      }
    );
    
    // 페럴랙스 배경 스크롤
    $.stellar({
      horizontalScrolling: false,
      verticalScrolling: true,
      verticalOffset: 50,
    });
  
   })