function getPeeps() {
  $.get('https://chitter-backend-api.herokuapp.com/peeps', function(data){
    loadPeeps(data);
  })
}

function loadPeeps(peepsJson) {
  $('#peepsHolder').empty();
  for (var i = 0; i < peepsJson.length; i++) {
    $('#peepsHolder').append(`<div id="peep${i}" class="w3-card"></div>`);
    $(`#peep${i}`).append(`<p>${peepsJson[i].body}<p>`);
    $(`#peep${i}`).append(`<p>User: ${peepsJson[i].user.handle}<p>`);
    $(`#peep${i}`).append(`<p>${getTimeValue(peepsJson[i].created_at)}<p>`);
  }
}

function getTimeValue(datetime) {
 var tTime=new Date(datetime);
 var cTime=new Date();
 var sinceMin=Math.round((cTime-tTime)/60000);
 if(sinceMin==0)
 {
     var sinceSec=Math.round((cTime-tTime)/1000);
     if(sinceSec<10)
       var since='less than 10 seconds ago';
     else if(sinceSec<20)
       var since='less than 20 seconds ago';
     else
       var since='half a minute ago';
 }
 else if(sinceMin==1)
 {
     var sinceSec=Math.round((cTime-tTime)/1000);
     if(sinceSec==30)
       var since='half a minute ago';
     else if(sinceSec<60)
       var since='less than a minute ago';
     else
       var since='1 minute ago';
 }
 else if(sinceMin<45)
     var since=sinceMin+' minutes ago';
 else if(sinceMin>44&&sinceMin<60)
     var since='about 1 hour ago';
 else if(sinceMin<1440){
     var sinceHr=Math.round(sinceMin/60);
 if(sinceHr==1)
   var since='about 1 hour ago';
 else
   var since='about '+sinceHr+' hours ago';
 }
 else if(sinceMin>1439&&sinceMin<2880)
     var since='1 day ago';
 else
 {
     var sinceDay=Math.round(sinceMin/1440);
     var since=sinceDay+' days ago';
 }
 return since;
};
