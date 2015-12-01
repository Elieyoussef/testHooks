/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 // google analytics debugging collect url 
var analyticsDebugUrl="https://www.google-analytics.com/debug/collect";
// google analytics collect url 
var analyticsUrl="https://www.google-analytics.com/collect";

function getGoogleAnalyticsUrl(){
  return analyticsUrl;
}   				   				

function getGoogleAnalyticsDebugUrl(){
  return analyticsDebugUrl;
}   		   							