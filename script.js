$(function () {
  var roles = ["Artist", "Dancer", "Student"];
  var count = 0;
  /*var $typeSpan = $("#intro .content h2 span").typist*/

  setInterval(() => {
      $("#intro .content h2 span").fadeOut("fast", function () {
       $(this).text(roles[count++ % roles.length]);
       $(this).fadeIn("fast");
      });
  }, 2500);
  $(".navbar").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $(".navbar").slideDown(100);
    } else {
      $(".navbar").slideUp(100);
    }
  });
});