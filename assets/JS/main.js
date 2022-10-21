// Element object, that we will use in the function
let elemObj=[
    {
        type:"text",
        value:"Full Name",
        placeholder:"Put your Full Name Here"
    },
    
    {
        type:"email",
        value:"Email",
        placeholder:"Put your Email Here"
    },
    {
        type:"text",
        value:"Date of Birth",
        placeholder:"Write your date of birth"
    },
    {
        type:"password",
        value:"password",
        placeholder:"password"
    }
]

// The form creation function
createForm(elemObj);


    // Empty validation by holding Form

var m = document.getElementById('js-powered-form-ubmit');
// console.log(m);
m.addEventListener("click",Submit);
function Submit(){
    let d = document.getElementsByClassName("js-powered-form")[0];
    console.log(d);
    for(let i=0; i<d.length; i++){
        // console.log(d[i].value);
        // let formdata= d[i].value;
        // let n = d[i].value;
        if(!d[i].value){
                alert('Please Enter Valid Data');
                return;
                }
        }
        
       
        
        }
    
// Valid code for empty form valiation by holding input

// Empty form validation algorithm: i) Hold the submit button with document.getelementById ii) Then add 
// add eventlistener to it iii) Now hold the form or input and take input data in a varible iv) wtite the
// if logic to give atert.

// var y = document.getElementById('js-powered-form-ubmit');
// // console.log(y)
// y.addEventListener("click",Submit);
// function Submit() {
//     var v = document.getElementsByClassName('firstValue').value;
//     if( !v ){
//     alert('Please enter value text.');
//     return;
//     }
    
// } 


