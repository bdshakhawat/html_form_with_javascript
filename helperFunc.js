

console.log("hello")






// helper function for input validation.
function typeValidation(inputType) {
    console.log("Function got input type: ",inputType)
    // Standard list for comparison
    let allowedTypeList = ["text", "email","password"]
    // Set default value as false

    let typeValidated = false;

    // logic to compare with user input for validation
    if (allowedTypeList.includes(inputType.toLowerCase())) {
        typeValidated = true;
       
    }

    return typeValidated;            
}



// property to property maping
// function propertyToPropertyMaping(passedProperty, allowedProperty) {
//     console.log("Passed property list: ", passedProperty);
//     console.log("Allowed property list: ", allowedProperty);
//     // 
//     // 
    
    
// }




// helper function for property validation
// function propertyValidation(propertyObject) {
//     console.log(propertyObject);
//     console.log(`Property Object ${propertyObject}`)
//     console.log("Function got property type: ", propertyObject);
    
//     const allowedPropertyList = ["type","value","placeholder"];
    
           
//         }
    
        // return propertyValidation;  
        // let propertyMapingValidated = propertyToPropertyMaping(passedPropertyList, allowedPropertyList);
        // if (!propertyMapingValidated) {
        //     alert("Property doesn't match!")
        //     return;
        // }
    // });
    // if (allowedPropertyList.includes(propertyObject.toLowerCase())){
    //     propertyValidated =true;
        
    // }
    // return propertyValidated;
    // let propertyValidated = false;

    // if (allowedPropertyList.includes(propertyObject.toLowerCase())) {
    //     propertyValidated = true;
       
    // }

    // return propertyValidated;           
// };
function validationProperty(propertyObject){
    let allowedPropertyList=["type","value","placeholder"];
    elemObj.forEach(elements => {
        // for (let key in elements) {
        //         console.log(`${key}: ${elements[key]}`)
        //         console.log(`${elements[key]}`);
        // }
        let passedProperty= Object.keys(elements);
        console.log(passedProperty);

    })
}

export default typeValidation

    