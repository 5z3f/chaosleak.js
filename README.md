# chaosleak.js <img align="left" src="https://user-images.githubusercontent.com/39301116/114009190-38f9a080-9863-11eb-87ce-64d7b30fb367.png" width="150px">

Simple javascript library to check if user password was leaked in the past <br/>
For security reasons, the comparison takes place only in the user's browser without sending any data. <br/>
Except 6 char long sha1 hash prefix for have i been pwned api if enabled <br/>

# Informations
You can check user's password in three modes: <br/>
 * __HIBP__ - use haveibeenpwned.com api to check if password exists in leaked databases <br/>
 * __Most Common__ - 100.000 most common passwords dictionary <br/>
 * __Last Chaos__ <br/>

# Usage
```js
var settings = {
   'mode': {
      'hibp': true,
      'mostcommon': true,
      'lastchaos': true
   },
   'hibp-api': 'https://api.pwnedpasswords.com/range/',  // have i been pwned api url
   'data-dir': './data/' // password dictionaries location
};

var test = await chaosleak(settings, "password123");
```

## You can test it out at
https://5z3f.github.io/chaosleak.js/
