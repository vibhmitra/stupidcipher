////// Script CDN CryptoJS /////
const scrpt = document.createElement("script");
scrpt.src = scrpt.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js";
document.head.append(scrpt);


////// Input Module ///////

const keyinput = document.createElement("input");
keyinput.id = "keyId";
document.body.append(keyinput);

const linebrake = document.createElement("br");
document.body.append(linebrake);

const inputarea = document.createElement("textarea");
inputarea.id = "textorgibberish";
document.body.append(inputarea);

document.body.append(document.createElement("br"));

///// Output Module //////
var inputId = document.getElementById("textorgibberish");

const outputarea = document.createElement("textarea");
outputarea.id = "plainoutput";
outputarea.readOnly = "true";

inputId.addEventListener("input", e => {
    var mystring = inputId.value;
    var key = keyinput.value;
    var decrypted = CryptoJS.AES.decrypt(mystring, key).toString(CryptoJS.enc.Utf8);
    outputarea.value = decrypted;
} );

document.body.append(outputarea);