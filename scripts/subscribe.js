/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var pubsub=require("pubsub");
return pubsub.subscribe("channel5","2359","PUSH_GROUP");
			