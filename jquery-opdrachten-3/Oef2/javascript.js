var count = 0;

$(".buttonPlus").click(function() {
    count++;
    $(".timesPressed").text("My current count is: "+count);
});

$(".buttonMin").click(function() {
    count--;
    $(".timesPressed").text("My current count is: "+count);
});
