

$(document).ready(function(){
$("#feed").PaRSS(
"https://www.reddit.com/r/soccer/.rss", 10,"F jS, g:i a",true); // (feed_url,item_count,date_format,show_descriptions)
window.addEventListener('click',function(e){  
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})  // To open injected hyperlinks in new tabs, chrome block them otherwise.
  }
});
});
