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
  $(".go-down a").click(function (e) {
    e.preventDefault();
    var top = $($(this).attr("href")).position().top - 70;
    $("html, body").animate(
      {
        scrollTop: top
      },
      1000
    );
  });
});

$(function () {
  $(".hidden").hide().removeClass("hidden");
  $(".pager").append(new Array($(".slides .slide").length + 1).join("<li></li>"));
  $(".slides .slide").first().show();
  $(".pager li").first().addClass("active");
  var counter = 1;
  setInterval(() => {
    $(".slides .slide:visible").fadeOut(function () {
      curSlide = (counter++ % $(".slides .slide").length) + 1;
      $(".slides .slide:nth-child(" + curSlide + ")").fadeIn();
      $(".pager li.active").removeClass("active");
      $(".pager li:nth-child(" + curSlide + ")").addClass("active");
    });
  }, 2500);
});
