$(document).ready(function() {
  var currentIndex = 0,
      items = $(".slider div"),
      itemAmt = items.length;

  function cycleItems() {
    var item = $(".slider div").eq(currentIndex);
    items.hide();
    item.css("display", "inline-block");
  }

  $(".next").click(function() {
    currentIndex += 1;
    if (currentIndex > itemAmt-1){
      currentIndex = 0;
    }
    cycleItems();
  });

  $(".prev").click(function() {
    currentIndex -= 1;
    if(currentIndex < 0){
      currentIndex = itemAmt-1;
    }
    cycleItems();
  });

  $(function() {
  	$(".slider > div:gt(0)").hide();
  	setInterval(function() {
  		$(".slider > div:first-child")
  		.fadeOut()
  		.next()
      .delay(500)
  		.fadeIn()
  		.end()
  		.appendTo(".slider");
  	}, 4000)
  });
});
