/*const p = document.createElement("p");
p.style.textAlign = "center";
p.style.fontSize = "18pt";
p.innerHTML = "C'mon, move your mouse!"
document.body.append(p); 
document.addEventListener("mousemove", e => {  p.innerHTML = `mouseX: ${e.clientX}, mouseY: ${e.clientY}`; } );
*/

/// Script CDN
const scrpt = document.createElement("script");
scrpt.src = "https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js";
document.head.append(scrpt);




/// Body Syle Modifiers (use only when no theme) /////
document.body.style.wordWrap = "break-word";
document.body.style.width = "40%";
document.body.style.textAlign = "justify";
document.body.style.margin = "auto";
document.body.style.letterSpacing = "auto";





///// Input Module /////////////////
const textarea = document.createElement("textarea");
const ts = textarea.style;  // Styling Variable
  ts.fontSize = "12pt";
  ts.height = "30%";
  ts.width = "100%";
  ts.resize = "vertical";
  ts.overflow = "auto";
  ts.Outline = "none";
  ts.borderLeft = "thick solid black";
  textarea.id = "txtinput";
  textarea.placeholder = "Put the Gibberish Thing Here";
document.body.append(textarea);

document.body.append(document.createElement("div"));

/****
//// Creating Button  /////
const button = document.createElement("button");
button.id = "button1";
button.innerHTML = "Magic Spell To Text";
document.body.append(button);

****/


const linebrake = document.createElement("br");
document.body.append(linebrake);






/// Output UI /////
var x = document.getElementById("txtinput");

const output = document.createElement("textarea");
output.id = "txtoutput";

const  os = output.style ;
  os.fontSize = "12pt";
  os.height = "30%";
  os.width = "100%";
  os.resize = "vertical";
  os.overflow = "auto";
  os.Outline = "none";
  os.border = "none";
  output.readOnly = "true";

const p = document.createElement("p");
p.innerHTML = "String Length : " + x.value.length; 

//var plaintext;
x.addEventListener("input", 
                   e => {    var plaintext = x.value;
                             var encrypted = CryptoJS.AES.encrypt(plaintext, "DEFAULT");
                             //output.value = plaintext;
                             output.value = encrypted;
                             
                        } );
//document.body.append(p);
document.body.append(output);
