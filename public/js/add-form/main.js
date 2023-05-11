$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        stepsOrientation: "vertical",
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back Step',
            next : '<i class="zmdi zmdi-arrow-right"></i>',
            finish : '<i class="zmdi zmdi-check"></i>',
            current : ''
        },
    })
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function() {
    var i = 2;
    $('#add-ingredient').html('<i class="fa-solid fa-plus"></i> Thêm');
    $('#add-ingredient').click(function() {
      var newFieldset = $('<fieldset>').append(
        $('<input>').attr({
          type: 'text',
          name: 'ingredient[]',
          placeholder: 'Điền nguyên liệu thứ ' + i++ + ' của bạn'
        })
      );
      $('#ingredients').append(newFieldset);
    });
  });

  $(document).ready(function() {
    var i = 2;
    $('#add-step').html('<i class="fa-solid fa-plus"></i> Thêm');
    $('#add-step').click(function() {
      var newFieldset = $('<fieldset>').append(
        $('<input>').attr({
          type: 'text',
          name: 'step[]',
          placeholder: 'Bước ' + i++
        })
      );
      $('#step').append(newFieldset);
    });
  });
  
  