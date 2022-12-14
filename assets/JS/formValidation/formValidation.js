


function createForm(clsName, elemObj){
    // console.log(clsName);

    // ---------------------------------------- //
    // ---------VALIDATION WAY 3--------------- //
    // ---------------------------------------- //
    // Type & Property validation outside of for loop.
    // So, we won't initiate any loop unless the input is validated
    // if (!objectValidation(elemObj)) {
    //     alert("Type & Property error!")
    //     return;
    // }

    // Initialize form storage variable. 
    // We will assign form object in the loop if all validation pass
    let f

    for(let x=0; x<elemObj.length; x++){

        // ---------------------------------------- //
        // ---------VALIDATION WAY 1--------------- //
        // ---------------------------------------- //
        // Property validation
        let propertyValidated = validationProperty(Object.keys(elemObj[x]))
        if (!propertyValidated){
            alert("Property type doesn't match!")
            return;
        }

        // Type validation
        let typeValidated = typeValidation(elemObj[x]);
        if (!typeValidated){
            alert("Field type not allowed!")
            return;
        }


        // ---------------------------------------- //
        // ---------VALIDATION WAY 2--------------- //
        // ---------------------------------------- //
        // // Both Type & Property validation can be done in a single check
        // if (!typeValidation(elemObj[x]) || !validationProperty(Object.keys(elemObj[x]))) {
        //     alert("Type & Property error!")
        //     return;
        // }
        
        // Validation completed. Create a form object. 
        // It's a loop, so we will create the object for once.
        x == 0 ? f = document.createElement("form") : null;
        f.setAttribute("class", "js-powered-form")
        // f.setAttribute('id', 'formdata');

        let i = document.createElement("input");
        // i.setAttribute("class", "firstValue");
        i.setAttribute("type", elemObj[x]["type"],"id","text" );
        i.setAttribute("value", elemObj[x]["value"], "id","email");
        i.setAttribute("placeholder", elemObj[x]["placeholder"],"id","place");

        f.appendChild(i);
        // let form = document.getElementsByClassName("js-form");
        // form.appendChild(f);
        // f.appendChild("js-form");


    }                    
        

    const s = document.createElement("input");
    s.setAttribute('type', "submit");
    s.setAttribute('value', "Submit");
    s.setAttribute('id', "js-powered-form-ubmit");
    f.appendChild(s);

    document.body.appendChild(f);
    var form = document.getElementsByClassName('js-form');
    form.innerHTML = f;
    // document.getElementsByClassName("js-form").appendChild(f);


    

    // var y = document.getElementById('js-powered-form-ubmit');
    //    y.addEventListener  ("click",Submit);
    //     function Submit() {
    //         var v = document.getElementById('firstValue').value;
    //         if( v.length==0 ){
    //         alert('Please enter value text.');
    //         return;
    //         }
    //         var title = document.getElementById('form-header');
    //         title.innerHTML = v;
            
    // } 
}

// var y = document.getElementById('js-powered-form-ubmit');
// console.log(y)
// y.addEventListener("click",Submit);
// function Submit() {
//     var v = document.getElementById('firstValue').value;
//     if( v.length==0 ){
//     alert('Please enter value text.');
//     return;
//     }
//     var title = document.getElementById('form-header');
//     title.innerHTML = v;
    
// } 