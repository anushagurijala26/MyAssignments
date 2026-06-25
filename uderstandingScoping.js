let genderType="female"
function printGender(){

        let color ="brown";
        if (genderType ==="female")
        {
            var age =30;
            let color ="pink"
            console.log("inside if :",color);
            
        }
        console.log("function inside:",color);
        console.log("age is :",age );
        
        
}
printGender()
console.log("global genderTypeis:", genderType);

genderType="male"
console.log("global genderTypeis:", genderType);
