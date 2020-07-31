$("html").on("click", ".ripple-btn", function (evt) {
    var btn = $(evt.currentTarget);
    var x = evt.pageX - btn.offset().left;
    var y = evt.pageY - btn.offset().top;
    // console.log(x, y)

    $("<div/>").prependTo(btn).css({
        left: x,
        top: y
    });
});