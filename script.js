//wait till the dom is ready
$(function () {
    var roles = ["artist", "dancer", "vitian"];
    var count = 0;
    setInterval(() => {
        $("#intro .content h2 span").fadeOut("slow", function () {
         $(this).text(roles[count++ % roles.length]);
         $(this).fadeIn("slow");
        });
    }, 2500);
    });
