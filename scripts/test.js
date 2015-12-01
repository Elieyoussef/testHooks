/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 //var res =apsdb.callApi("ListConfiguration",null, null);
//return res.result.defaultRepositoryName;

var repositoryOwner = "jmrad";
 var repositoryAccessToken = "994aa5dbd7b8dbc0b6ff56f761e103bd677b6878";
    var repositoryName = "scriptriotest" ;

	var gitAPIUrl="https://api.github.com/repos/"+repositoryOwner+"/"+repositoryName+"/hooks?access_token="+repositoryAccessToken;
        				var postParams = {
        					"name": "web", 
        					"active": true, 
        					"events": ["push","deployment"], 
        					"config": {"url": "http://elieayoussef.globat.com/webhooks/hook.php?token=xxx", "content_type": "json"}		
        				};
        				var bodyParams=JSON.stringify(postParams);
var res= apsdb.callHttp(gitAPIUrl, "POST", null, null, null, null, true, bodyParams, false, false);
return res;			