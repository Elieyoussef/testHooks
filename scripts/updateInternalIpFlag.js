/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=nobody 
  **/ 

		  
		     //enables or disables flag for internal IPs
		     var apiKey = request.parameters['apiKey'];
		     var enable = request.parameters['enable'];
		     var flag = request.parameters['flag'];
		     var fields = {};
		     if(apiKey != null){
		     	apiKey = apiKey + "|en|1";
		    	 if(enable == "true"){
		    		 fields[flag]  = 'true';
		    	 }else{
		    		  fields[flag] = null;
		    	 }
		    	 return testHelper.updateDocumentUDFields(apiKey,fields)    	
		     }
		     return {"status" : "failure"};
		
	