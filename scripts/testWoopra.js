/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var clientModule = require("woopra/client");
var woopra = new clientModule.WoopraClient("test.scriptr.io");


try {  
  var params={"eventName":"bruna","cookieHash":"","userID":request.user.id,"optionalParamsObj":{"cv_name":"John+Smith","cv_email":"john@mail.com","ce_item":"Coffee+Machine","ce_category":"Electric+Appliances","ce_sku":"K5236532"}};
 	console.log(JSON.stringify(woopra.track(params)));  
  //{"cv_name":"John+Smith","cv_email":"john@mail.com","ce_item":"Coffee+Machine","ce_category":"Electric+Appliances","ce_sku":"K5236532"}
  return "done";
}catch(exception){
  return exception;
}         				   				   				   							