console.log('Hi, Welcome to our chanels');

$(document).ready(function(){
    $('.submit').click(function(event){
        console.log('Clicked button')

        var email= $('.email').val();
        var subject =$('.subject').val();
        var message = $('.message').val();
        var statusEl = $('.status');
        statusEl.empty();

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusEl.append('<div>Email is vaild</div>');
        }
        else{
            event.preventDefault()
            statusEl.append('<div>Email is not vaild</div>');
        }

        if(subject.length > 5){
            statusEl.append('<div>Subject is vaild</div>');
        }
        else{
            event.preventDefault()
            statusEl.append('<div>Subject is not vaild</div>');
        }

        if(message.length > 20){
            statusEl.append('<div>Message is vaild</div>');
        }
        else{
            event.preventDefault()
            statusEl.append('<div>Message is not vaild</div>');
        }
    })
});