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

      // Lưu giá trị của trường fieldset vào phần tử tiếp theo trong mảng ingredient[]
    var inputValue = $('input[name="ingredient[]"]').eq(ingredientIndex).val();
    $('input[name="ingredient[]"]').eq(ingredientIndex + 1).val(inputValue);
    ingredientIndex++;
    });

  var dishForm = document.getElementById('form-register');
  // dishForm.addEventListener('submit', function(e) {
  //   e.preventDefault(); // Ngăn chặn gửi yêu cầu POST mặc định

  var finishButton = dishForm.querySelector(".actions a[href$='#finish']");
  finishButton.addEventListener('click', function(e) {
    e.preventDefault(); // Ngăn chặn gửi yêu cầu POST mặc định


    var formData = new FormData(dishForm);
    var ingredients = formData.getAll('ingredient[]');

    // Gửi yêu cầu POST tới '/add-dish' với dữ liệu ingredients
    $.ajax({
      url: '/add-dish',
      method: 'POST',
      data: {
        ingredient: ingredients
      },
     
    });
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
  
  