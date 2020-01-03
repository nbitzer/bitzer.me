$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
        $(".navbar").addClass("navbar-inverse", 1000);
    } else {
        $(".navbar").removeClass("navbar-inverse", 1000);
    }
});

new WOW().init();

$(function() {
  var readOnly = true;
  var thickness = 0.1;
  var width = 120;
  var height = 120;
  var lineCap = 'rounded';
  var max = 5;
  var inputColor = '#778899'
  var fgColor = '#778899'

    $(".python-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Proficient';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    $(".qa-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Expert';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    $(".bash-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Competent';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    $(".java-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Adv. Beg.';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    $(".tp-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Expert';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    $(".webdev-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Adv. Beg.';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    /* Second row */

    $(".linux-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Proficient.';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    $(".scripting-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Proficient.';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    $(".sql-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Adv. Beg.';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    $(".aws-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Adv. Beg.';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    $(".docker-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'Beginner';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });

    $(".taco-dial").knob({
      'readOnly': readOnly,
      'thickness': thickness,
      'width': width,
      'height': height,
      'lineCap': lineCap,
      'max': max,
      'fgColor': fgColor,
      'inputColor': inputColor,
      format : function (value) {
        return 'EXPERT!';
      },
      'draw': function() {
        $(this.i).css('font-size', '9pt').css('color', '#465570');
      }
    });
});

$(function() {
    $("#contactFrom input,#contactForm textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name    = $("input#name").val();
            var email   = $("input#email").val();
            var message = $("textarea#message").val();
            $.ajax({
                url: "./././././mailer.php",
                type: "POST",
                data: {
                    name: name,
                    email: email,
                    message: message
                },
                cache: false,
                success: function() {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Your message has been sent. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
            })
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});
