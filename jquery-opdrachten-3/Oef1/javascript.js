var count = 0;

$(".button").click(function() {
    count++;
    $(".timesPressed").text("My current count is: "+count);
});
