//collapsible
var coll= document.getElementsByClassName("collapsible");
for (let i=0;i<coll.length;i++)
{
    coll[i].addEventListener("click",function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight = null;
        }else{
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    
    if(hours<10){
        hours = "0" + hours;
    }
    if(minutes<10) {
        minutes = "0" + minutes;
    }
    let time = hours + ":" + minutes
    return time;
}
function firstBotMessage() {
    let firstMessage = "how is it going?"
    document.getElementById("botstartermessage").innerHTML='<p class="bottext"><span>' + firstMessage + '</span></p>';
    
    let time = getTime();

    document.getElementById("chat-timestamp").append(time);
    document.getElementById("userinput").scrollIntoView(false);
}
firstBotMessage();

 function getHardResponse(usertext) {
     let botresponse = getBotResponse(usertext);
     let botHTML = '<p class="bottext"><span>'+ botresponse +'</span></p>';
      $("#chatbox").append(botHTML);
      document.getElementById("chat-bar-bottom").scrollIntoView(true);
 }
 function getResponse() {
     let userText = $("#textinput").val();
     if(userText == ""){
         userText = "i love code palace!";
     }
     let userHTML = '<p class="usertext"><span>'+ userText +'</span></p>'; 
     $("#textinput").val("");
     $("#chatbox").append(userHTML);
     document.getElementById("chat-bar-bottom").scrollIntoView(true);

     setTimeout(() => {
         getHardResponse(userText);
     } , 1000)
    }
    function buttonSendText(sampletext) {
        let userHTML = '<p class="usertext"><span>' + sampletext + '</span></p>'
      $("#textinput").val("");
      $("#chatbox").append(userHTML);
      document.getElementById("chat-bar-bottom").scrollIntoView(true);   
    }
    function sendButton(){
      getResponse();
    }
    function heartButton() {
        buttonSendText("heart clicked :)")
    }
 $("#textinput").onkeypress(function (e) {
     if(e.which == 13)
     {
         getResponse();
     }
 });
