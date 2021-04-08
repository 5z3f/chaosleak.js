
// -------------------------------------
// This is just an example how library should be used.
// Please do not use this file in your server as it's not production ready and may contain bugs.
// -------------------------------------

let submitBtn = document.getElementById("check-password-btn");
let passwordInput = document.getElementById("password-input");

const translate = {
   'v0': "<br/><span class=\"badge bg-warning text-dark my-1\"><i class=\"fas fa-exclamation-triangle\"></i> Vulnerable</span><br/>This password have been seen over {0} times in various breaches.",
   'v1': "<br/><span class=\"badge bg-danger text-dark my-1\"><i class=\"fas fa-user-secret\"></i> Compromised</span><br/>This password have been leaked from Last Chaos in the past.",
   'v2': "<br/><span class=\"badge bg-warning text-dark my-1\"><i class=\"fas fa-exclamation-triangle\"></i> Weak</span><br/>This password was found in our most common list.",
   'v3': "<br/><span class=\"badge bg-success text-dark my-1\"><i class=\"fas fa-check-square\"></i> Not Found</span><br/>I think you're safe! (for now)"
}

const settings = {
   'mode': {
      'hibp': true,
      'mostcommon': true,
      'lastchaos': true
   },
   'hibp-api': 'https://api.pwnedpasswords.com/range/',
   'data-dir': './asset/data/'
};

submitBtn.onclick = function() {
   if(passwordInput.value.length > 0)
      testPassword();
};

passwordInput.addEventListener("keyup", function(event) {
    if (event.key === "Enter")
        testPassword();
});

function toElement(html)
{
   var template = document.createElement('template');
   template.innerHTML = html.trim();

   return template.content.firstChild;
}

async function testPassword()
{
   let result = document.getElementById("result");

   while (result.lastElementChild)
      result.removeChild(result.lastElementChild);
   
   var test = await chaosleak(settings, passwordInput.value);
   var msg = "";

   if(test.found)
   {
      if(test.hibp > 0)
         msg += translate['v0'].replace("{0}", test.hibp) + "<br/>";
         
      if(test.lastchaos)
         msg += translate['v1'] + "<br/>";

      if(test.mostcommon)
         msg += translate['v2'];

   }
   else
      msg = translate['v3'];
   
   result.appendChild(toElement('<hr class="my-3" style="color: white"/>'));
   result.appendChild(toElement('<h4 class="text-center my-3"><span class="badge bg-primary text-dark"><i class="fas fa-info-circle"></i> Result</span></h4>'));
   result.appendChild(toElement('<h6 style="color: white">' + msg + '</h6>'));
}
