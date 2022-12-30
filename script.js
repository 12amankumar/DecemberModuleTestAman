function submitForm(){
    let fullname=document.getElementById('fname');
    let lastname=document.getElementById('lname');
    let email=document.getElementById('email');
    let reason=document.getElementById('reason');
    console.log(firstname,lastname);
    if(firstname && lastname && email){
        alert('form submitted')
    } else {
        alert("All Field are required");
    }
        
    }
 