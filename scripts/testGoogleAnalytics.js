/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var clientModule = require("googleanalytics/client");
var googleAnalytics = new clientModule.GoogleAnalyticsClient("UA-66177855-1");


try {  
  var params={"eventCategory":"scriptCall","eventAction":"action","optionalParamsObj":{},"userID":request.user.id,"cid":"35009a79-1a05-49d7-b876-2b884d0f825b","debug":true};
  
  
 	console.log(googleAnalytics.track(params));  
  
  return "done";
}catch(exception){
  return exception;
}        				   				   							