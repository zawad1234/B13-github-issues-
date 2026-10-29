document.getElementById('btn').addEventListener('click', function(){



    const id = document.getElementById('idn')
    const pass = document.getElementById('password') 

    const idvalue = id.value
    const password = pass.value

    if(idvalue!=='admin'){
             
        alert('Invalid Id')
        return;

    }

    if(password!=='admin1234'){
        alert('invalid password')
        return;

    }
    else{
        alert('login successful')
        window.location.assign('./index.html')

    }

})