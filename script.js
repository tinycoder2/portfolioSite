$(function () {
  var roles = ["an Artist", "a Dancer", "a Student"];
  var count = 0;
  var $typeSpan = $("#intro .content h2 span")
  .typist({
    text: roles[count]
  });
  setInterval(() => {
    $typeSpan
    .typistRemove(roles[count++ % roles.length].length)
    .typistPause(1900)
    .typistAdd(roles[count % roles.length]);
  }, 5000);


  $(".navbar").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $(".navbar").slideDown(100);
    } else {
      $(".navbar").slideUp(100);
    }
  });
});