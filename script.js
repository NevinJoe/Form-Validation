var email=document.getElementById('exampleInputEmail1');
var err1=document.getElementById('err1');
var phone=document.getElementById('exampleInputPhone1');
var err2=document.getElementById('err2');
var pass1=document.getElementById('exampleInputPassword1');
var err3=document.getElementById('err3');
var pass2=document.getElementById('exampleInputPassword2');
var err4=document.getElementById('err4');


var validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var validPhoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

//email validation
function validateEmail()
{
    //alert('Hello')
    if(email.value.trim()=='')
    {
        err1.innerText='Field cannot be empty';
        email.style.border= '3px solid red';
        return false;
    }
    else if(!email.value.match(validRegex))
    {
        err1.innerText='Email is not in correct format';
        email.style.border= '3px solid red';
        return false;
    }
    else
    {
        err1.innerText='';
        email.style.border= '3px solid green';
        return true;
    } 
}


//phone validation
function validatePhone()
{
    //alert('Hello')
    if(phone.value.trim()=='')
    {
        err2.innerText='Field cannot be empty';
        phone.style.border= '3px solid red';
        return false;
    }
    else if(!phone.value.match(validPhoneno))
    {
        err2.innerText=('Phone Number is not in correct format');
        phone.style.border= '3px solid red';
        return false;
    }
    else
    {
        err2.innerText='';
        phone.style.border= '3px solid green';
        return true;
    }
}


//password validation
function validatePassword()
{
    //alert('hello')
    if(pass1.value.trim()=='')
    {
        err3.innerText='Field cannot be empty';
        pass1.style.border= '3px solid red';
        return false;
    }
    else if(pass1.value!='')
    {
        //alert('test')
        uppercase=false;
        lowercase=false;
        number=false;
        plength=false;
        if(pass1.value.match(/[A-Z]/))
        {
            uppercase=true;
        }
        if(pass1.value.match(/[a-z]/))
        {
            lowercase=true;
        }
        if(pass1.value.match(/[0-9]/))
        {
            number=true;
        }
        if(pass1.value.length>=8)
        {
            plength=true;
        }
        if(!plength)
        {
            pass1.style.border= '3px solid red';
            err3.innerText= 'Must contain 8 characters';
            return false;
        }
        else
        {
            pass1.style.border= '3px solid orange';
            err3.innerText= 'Must contain lowercase,uppercase,number';   
        }
        if(uppercase && lowercase && number && plength)
        {
            pass1.style.border= '3px solid green';
            err3.innerText= '';
            return true;
        }
    }
}


//confirm password
function validateCPassword()
{
    //alert('hello')
    if(pass1.value.trim()=='')
    {
        err4.innerText='Please enter a Password first';
        pass2.style.border= '3px solid red';
        return false;
    }
    else if(pass1.value!=pass2.value)
    {
        err4.innerText='Passwords  do not Match';
        pass2.style.border= '3px solid red';
        return false;
    }
    else
    {
        err4.innerText='';
        pass2.style.border= '3px solid green';
        return true;
    }

}


//validate submit
function validateSubmit1()
{
    if(!(validateEmail() && validatePhone() && validatePassword() && validateCPassword()))
    {
        alert('Please fill the fields');
    }
    else
    {
        alert('Submited Sucessfully!!!');
    }
} 

function validateSubmit2()
{
    if(!(validateEmail() && validatePassword()))
    {
        alert('Please fill the fields');
    }
    else
    {
        alert('Submited Sucessfully!!!');
    }
}