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
        type:"date",
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
createForm("js-form", elemObj);


// *************Empty input field validation (Beginers way) Start:*************


// Firstly hold the submit button with document.getElementByID. Then add eventListener with submit button.Now declear a function
// Submit and inside the function hold the form with document.getElementsByClassName(js-powered-form)[0] and keep it inside a
// variable. Run a for loop on the form to collect form data. After getting the data of individual field valu apply if else
// condition of individual input field and set an alert for them. 
var m = document.getElementById('js-powered-form-ubmit');
// console.log(m);
m.addEventListener("click",Submit);
function Submit(e){
    e.preventDefault();
    let d = document.getElementsByClassName('js-powered-form')[0];
    
    // console.log(d);
    
    for(let i=0; i<d.length; i++){
        
        console.log( d[i].type);

        if(!d[i].value){ 
            alert(`${d[i].type} field empty!`);
            return;
        }

    }
        
        
       
        
}

// *********Empty input field validation (Beginers way) Ends.***********



//*********** */ Form input field's empty state validation Expert way Start:*****************
let formSubmitButton = document.getElementById("js-powered-form-submit");
formSubmitButton.addEventListener("click", function(e) {
    e.preventDefault()
    let allInputFields = document.getElementsByClassName("js-powered-form")[0];

    // ES6 way
    for (const singleInput of allInputFields) {
        // console.log(singleInput.value)
        if (!singleInput.value) {
            alert(`Empty ${singleInput.type} field isn't accepted!`)
            break;
        }
    }

    //******** */ Form input field's empty state validation Ends.**********
    
    
    //**** */ Old school for...loop way Start:******
    
    
    // for (i=0; i<allInputFields.length; i++) {
    //     // console.log(allInputFields[i].value, allInputFields[i].type)
    //     if (!allInputFields[i].value) {
    //         alert(`Empty ${allInputFields[i].type} field isn't accepted!`)
    //         break;
    //     }
    // }

})
// *******Old school for...loop way Ends.*******






    // Empty validation by holding Form Starts:

// var m = document.getElementById('js-powered-form-ubmit');
// // console.log(m);
// m.addEventListener("click",Submit);
// function Submit(){
//     let d = document.getElementsByClassName("js-powered-form")[0];
//     console.log(d);
//     for(let i=0; i<d.length; i++){
//         console.log(d[i].value);
//         // let formdata= d[i].value;
//         // let n = d[i].value;
//         if(!d[i].value){
//             setErrorMsg("")

//                 // alert('Please Enter Valid Data');
//                 return;
//                 }
//         }
        
       
        
//         }
// Empty validation by holding Form Ends.
    




// Valid code for empty form valiation by holding input Starts:


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

// Valid code for empty form valiation by holding input Ends.


