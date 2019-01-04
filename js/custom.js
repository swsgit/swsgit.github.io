$(document).ready(function() {
  $(".various").fancybox({
    type : "iframe", //<--added
    maxWidth : 800,
    maxHeight : 600,
    fitToView : false,
    width : '100%',
    height : '100%',
    autoSize : false,
    closeClick : false,
    openEffect : 'none',
    closeEffect : 'none'
  });
})