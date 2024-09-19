document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
     
    if(phoneNumber === '1234' && pinNumber === '0000'){
        window.location.href = '/modeul-27/home.html'
    }
    else{
        alert('False Information');
    }
})