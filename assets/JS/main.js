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

// let myForm = document.getElementById('myForm');
// let formData = new FormData(myForm);
// console.log(formData.entries());


// Empty field validation
// function getData(form) {
//     var formData = new FormData(form);
  
//     for (var pair of formData.entries()) {
//       console.log(pair[0] + ": " + pair[1]);
//     }
  
//     console.log(Object.fromEntries(formData));
//   }
  
//   var v= document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault();
//     getData(event.target);
//   });

// Empty form validation algorithm: i) Hold the submit button with document.getelementById ii) Then add 
// add eventlistener to it iii) Now hold the form or input and take input data in a varible iv) wtite the
// if logic to give atert.





var y = document.getElementById('js-powered-form-ubmit');
console.log(y)
y.addEventListener("click",Submit);
function Submit() {
    var v = document.getElementsByClassName('firstValue').value;
    if( !v ){
    alert('Please enter value text.');
    return;
    }
    
} 