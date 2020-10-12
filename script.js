$(function () {
    var roles = ["Artist", "Dancer", "Student"];
    var count = 0;
    setInterval(() => {
        $("#intro .content h2 span").fadeOut("fast", function () {
         $(this).text(roles[count++ % roles.length]);
         $(this).fadeIn("fast");
        });
    }, 2500);
    });
