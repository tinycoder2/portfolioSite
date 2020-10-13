$(function () {
  var roles = ["Artist", "Dancer", "Student"];
  var count = 0;
  var $typeSpan = $("#intro .content h2 span")
  .typist({
    text: roles[count]
  });
  setInterval(() => {
      //$("#intro .content h2 span").fadeOut("fast", function () {
      // $(this).text(roles[count++ % roles.length]);
      // $(this).fadeIn("fast");
      //});

    $typeSpan
    .typistRemove(roles[count++ % roles.length].length)
    .typistPause(2000)
    .typistAdd(roles[count % roles.length]);
  }, 5000);

  //$("#intro .content h2 span").typist({
    //text: "Artist"
  //})

  $(".navbar").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $(".navbar").slideDown(100);
    } else {
      $(".navbar").slideUp(100);
    }
  });
});