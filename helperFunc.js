// console.log("This is helper func js file!");


// helper function for input validation.
function typeValidation(inputType) {
    console.log("Function got input type: ",inputType)
    let allowedTypeList = ["text", "email","password"]
    let typeValidated = false;

    // logic
    if (allowedTypeList.includes(inputType.toLowerCase())) {
        typeValidated = true;
    }

    return typeValidated            
}

// property to property maping
function propertyToPropertyMaping(passedProperty, allowedProperty) {
    console.log("Passed property list: ", passedProperty);
    console.log("Allowed property list: ", allowedProperty);
    //
    //
    //
}

// helper function for property validation
function propertyValidation(propertyObject) {
    // console.log(`Property Object ${propertyObject}`)
    const allowedPropertyList = ["type","value","placeholder"];
    propertyObject.forEach(element => {
        let passedPropertyList = Object.keys(element)
        console.log(`Element: ${passedPropertyList[0]}`)
        let propertyMapingValidated = propertyToPropertyMaping(passedPropertyList, allowedPropertyList);
        // if (!propertyMapingValidated) {
        //     alert("Property doesn't match!")
        //     return;
        // }
    });
};