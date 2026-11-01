function validatestatusCode(statusCode){    
    if(statusCode>=200 && statusCode<300){   
        console.log("Success");                                                                                                                                           
}    
}

const validatestatusCode_Exp = function(statusCode){
    if(statusCode>=200 && statusCode<300){
        console.log("Success");
    }
}

const validatestatusCode_Arrow = (statusCode) => {
    if(statusCode>=200 && statusCode<300){
        console.log("Success");
    }
};

validatestatusCode(200);
validatestatusCode_Exp(200);
validatestatusCode_Arrow(200);