const validator=require("validator");
const validateSignUpData=(req)=>{
    const{firstName,lastName,emailId,password,photoUrl}=req.body;
    if(!firstName||!lastName)
    {
        throw new Error("something is wrongs");
        
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("email id is not valid");
        
    }
   
      
    // else if(!validator.isStrongPassword(password))
    // {
    //     throw new Error("password is not strong");
    // }
    

};
const validateEditProfile = (req) => {
    const validprofiledata = [
      "firstName",
      "lastName",
      "emailId",
      "skills",
      "gender",
      "photoUrl",
      "age",
      "about" // include this if you're editing it
    ];
  
    const keys = Object.keys(req.body);
    if (keys.length === 0) return false; // reject empty updates
  
    return keys.every((field) => validprofiledata.includes(field));
  };
  


module.exports = {
    validateSignUpData,validateEditProfile
};