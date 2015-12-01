/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=nobody 
  **/ 

		
		     var authKey = request.parameters['authKey'] + "|en|1";
		     var limit = request.parameters['limit'];
		     var fields = {"limits":limit};
		     return testHelper.updateDocumentUDFields(authKey,fields);    	
		   
	