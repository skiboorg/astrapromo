let divs = document.getElementsByClassName('inner-circle')

for (let div in divs) {
    divs[div].addEventListener('mouseover', function () {
    let text = this.getElementsByClassName('super-text')[0].innerHTML
    $('.inner-text').html(text)
    })

}


function modalCallback() {
    client_name = document.getElementById("callBack_name").value;
    client_phone = document.getElementById("callBack_phone").value;
    $('#modalSubmit').attr('disabled','disabled');
    $('#modalSubmit').html('Отправка...');
    $('.nameError').css('display','none');
    $('.phoneError').css('display','none');
    if (client_name == ''){
         $('#modalSubmit').html('ОТПРАВИТЬ');
        $('#modalSubmit').removeAttr('disabled');
        console.log('name empty');
        $('#callBackModal').removeClass('input-error');
        $('.nameError').css('display','block');
        setTimeout(function(){
          $('#callBackModal').addClass('input-error');
        },500);

        return;
    }
     if (client_phone == ''){
         $('#modalSubmit').html('ОТПРАВИТЬ');
        $('#modalSubmit').removeAttr('disabled');
        console.log('phone empty');
        $('#callBackModal').removeClass('input-error');
        $('.phoneError').css('display','block');
        setTimeout(function(){
            $('#callBackModal').addClass('input-error');
        },500);
        return;
    }
    csrfmiddlewaretoken = document.getElementsByName("csrfmiddlewaretoken")[0].value;

        $.ajax({
            type:"POST",
            url:'/user/callback/',
            data:{
                'csrfmiddlewaretoken': csrfmiddlewaretoken,
                'client_name':client_name,
                'client_phone':client_phone,
            },
            success : function(data){
                console.log(data);
                 $('#modalSubmit').html('ОТПРАВИТЬ');
                $('#modalSubmit').removeAttr('disabled');
                $('#callBack_send').css('display','none');
                $('#callBack_done').css('display','block');
            }
        });
}

function callBack_home(e) {
    e.preventDefault();
    client_name = document.getElementById("callBackHome_name").value;
    client_phone = document.getElementById("callBackHome_phone").value;
    client_email = document.getElementById("callBackHome_email").value;
    $('#homeSubmit').addClass('is-loading');
    csrfmiddlewaretoken = document.getElementsByName("csrfmiddlewaretoken")[0].value;

        $.ajax({
            type:"POST",
            url:'/user/callback/',
            data:{
                'csrfmiddlewaretoken': csrfmiddlewaretoken,
                'client_name':client_name,
                'client_phone':client_phone,
                'client_email':client_email,
            },
            success : function(data){
                console.log(data);
                $('#callBackForm').css('display','none');
                $('#callBackHome_done').css('display','block');
            }
        });

}

