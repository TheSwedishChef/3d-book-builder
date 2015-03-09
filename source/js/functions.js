jQuery(document).ready(function($){

  // WRAP THE FLIPS INTO A REUSABLE FUNCTION, BECAUSE THEY'RE USED ELSEWHERE TOO
  function front_flip() {
    var $Cube = $("#cube")[0];
    $Cube.style.webkitTransform = "rotateY(-35deg)";
    $("#front_flip").addClass("active");
    $("#back_flip").removeClass("active");
  };

  function back_flip() {
    var $Cube = $("#cube")[0];
    $Cube.style.webkitTransform = "rotateY(-180deg)";
    $("#back_flip").addClass("active");
    $("#front_flip").removeClass("active");
  };

  $("#front_flip").click(front_flip);
  $("#back_flip").click(back_flip);

  // GILDING

  // UPDATE THE PREVIEW GILDING COLOR WHEN GILDING DROPDOWN CHANGED
  function gilding_color() {
    var $gilding = $("select#gilding_color").val();
    $("#album_preview").removeClass("gilding_color_black gilding_color_silver gilding_color_copper -color-");
    $("#album_preview").addClass($gilding);
  };

  $("#gilding_color").change(gilding_color);

  // COVER TEXT

  // get the Line 1 text and put it in the Line 1 DIV
  $("input#cover_text_line1").keyup(function() {
    var $line1 = $("input#cover_text_line1").val();
    $("#line-1").html( $line1 );
  });

  // get the Line 2 text and put it in the Line 2 DIV
  $("input#cover_text_line2").keyup(function() {
    var $line2 = $("input#cover_text_line2").val();
    $("#line-2").html( $line2 );
  });

  // get book size from dropdown and adjust the preview to match it
  $("select#size").change(function() {
    var $size = $("select#size").val();
    $("#album_preview, #trim_preview").removeClass('twelve-twelve twelve-nine nine-twelve ten-ten eight-eight eight-ten nine-six six-nine ten-eight eleven-fourteen fourteen-eleven fifteen-ten ten-fifteen eight-twelve twelve-eight');
    $("#album_preview, #trim_preview").addClass( $size );
  });

  // when text color is changed, update the preview
  $("select#text_color").change(function() {
    var $color = $("select#text_color").val();
    $("#front_face #cover_text").removeClass("text_color_black text_color_silver text_color_copper text_color_blind -color-");
    $("#front_face #cover_text").addClass( $color );
  });

  // when the leather color is changed, update the preview
  $("select#leather").change(function() {
    var $leather = $("select#leather").val();
    $("#album_preview").removeClass("leather_color_black leather_color_brown leather_color_red leather_color_grey -color-");
    $("#album_preview").addClass( $leather );
  });
});
