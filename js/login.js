document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();
    // get the phone number
    const phoneNumber = document.getElementById('phone-Number').value;
    
    const password = document.getElementById('password').value;
    const  parentDiv3 = document.getElementById('parent-div3');
    const p = document.createElement('p');

    if(phoneNumber === '5' && password === '1234'){
        window.location.href = '/home.html';
    }
    else{
        document.getElementById('phone-Number').value = "";
         document.getElementById('password').value = "";
       p.innerText = "Wrong Password or Phone Number";
       parentDiv3.appendChild(p).style.color = 'red';
    }

})