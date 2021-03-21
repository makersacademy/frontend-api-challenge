// username: CamelTrain_Case_Is_BestCase; password: mypassword

var session;
function createPage(){
  checkLoggedIn();
  loadPeeps();
}

function checkLoggedIn(){
  if (session == null){
    loggedInElements = document.getElementsByClassName("loggedIn")
    for(element of loggedInElements){
      element.setAttribute('hidden', true);
    }
    headerText(false);
  }
  else{
    notLoggedInElements = document.getElementsByClassName("notLoggedIn")
    for(element of notLoggedInElements){
      element.setAttribute('hidden', true);
    }
    headerText(username);
  }
}

function headerText(username = false){
  // fills the header text
  var text;
  if(username === false){
    text = "Sign in or create a new account to post"
  }
  else{
    text = "Signed in as " + username;
  }
  document.getElementById('headerSpan').innerText = text;
}

var loadInterval;
function loadPeeps(){
  if (!gettingPeeps){
    getPeeps();
  }
  loadInterval = setInterval(checkPeepsReady, 100)
}

function checkPeepsReady(){
  if (peepsReady){
    clearInterval(loadInterval);
    showPeeps();
  }
}

function showPeeps(){
  // shows the peeps on the page
  var peepsContainer = document.getElementById("allPeepsContainer");
  
  for(peep of peeps){
    // var peepNode = document.createElement("LI");
    var peepTime = makePeepTimeNice(peep.created_at);
    console.log('peepTime: ' + peepTime);
    peepsContainer.insertAdjacentHTML("beforeEnd",
    `<li>
    <div class="peepContainer" name="pc-${peep.id}">
      <div id='p-${peep.id}' class='peep'>
        <div class='peepInfo' id='pi-${peep.id}'>
          <span class='nameBlock'>
            <span class='username'>${peep.user.handle}</span>
          </span>
          <span class="dateTime fRight" data-utc='0'>
            ${peepTime} <!-- I might want to change how the time is displayed later, so it's easier to format it here than somewhere else -->
          </span>
        </div>
        <div class="empty"><br></div>
        <div blockquote class='peepMessage' id="m-${peep.id}">
          ${peep.body}
        </div>
      </div>
    </div>
  </li>`
  );
  // peepsContainer.appendChild(peepNode)
  }
}

function makePeepTimeNice(time){
  var groups = peep.created_at.match(/(?<y>\d{4})-(?<m>\d{2})-(?<d>\d{2})T(?<time>\d*:\d*):/).groups
  var date = groups.d + '/' + groups.m + '/' + groups.y.slice(2);
  return date + ' ' + groups.time;
}