$(document).ready(function () {
  var $form = $("#mc-embedded-subscribe-form");
  if ($form.length > 0) {
    $('form input[type="submit"]').bind("click", function (event) {
      if (event) event.preventDefault();
      register($form);
    });
  }
});

function register($form) {
  $("#mc-embedded-subscribe").val("Susbcribing... please wait");
  $.ajax({
    type: $form.attr("method"),
    url: $form.attr("action"),
    data: $form.serialize(),
    cache: false,
    dataType: "jsonp",
    contentType: "application/json; charset=utf-8",
    error: function (err) {
      console.log(err);
    },
    success: function (data) {
      $("#mc-embedded-subscribe").val("Subscribe!");
      if (data.result === "success") {
        // Yeahhhh Success
        $("#mce-EMAIL").css("borderColor", "#ffffff");
        $("#subscribe-result").css("color", "rgb(53, 114, 210)");
        $("#subscribe-result").html("<p>Thank you for subscribing!</p>");
        $("#mce-EMAIL").val("");
      } else {
        // Something went wrong, do something to notify the user.
        // console.log(data.msg)
        $("#mce-EMAIL").css("borderColor", "#ff8282");
        $("#subscribe-result").css("color", "#ff8282");
        $("#subscribe-result").html("<p>" + data.msg + "</p>");
      }
    },
  });
}
