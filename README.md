# translator.github.io
#this is the link:
#this is the code



 <html><head>
   <link rel="shotcut icon" type="icon/png" href="https://icons.iconarchive.com/icons/graphicloads/medical-health/256/medicine-box-2-icon.png">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark light">

<title>Translator</title>
<style>
    body {
  font-family: "Lato", sans-serif;
  background-color: white;
  color: black;
}

#translateb{
    margin-right: 1%;
    float: right;
    background-color: #111;
    color: white;
    border-style: none; 
    height: 50px;
    width: 120px;
    transition: 0.7s;
}

#translateb:hover{
    color: black;
    background-color:#e9e9e9;
    transform: translateY(10px);
}

.input{
  border-radius: 10px;
    margin-top: 0%;
    width: 48.7%;
    height: 150px;
    font-size: 20px;
    border-style: solid;
    border-color: black;
    border-width: 3px;
    color: black;
    resize: none;
}

#input{
  overflow-x: hidden;
  transition: 0.7s;
  z-index: 1;
}

#output{
  overflow-x: hidden;
  transition: 0.9s;
  z-index: 1;
}

.sidenav {
pointer: click;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a{
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 60px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav button {
text-transform: underline ;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  background-color: transparent;
  border-style: none;
  width: 100%;
  height: 90px;
}

.sidenav button:hover {
  background-color: rgb(167, 167, 167);
  color: black;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}

::selection{
  background-color: rgb(179, 98, 255);
}

#contactdiv{
  text-align: center;
  border-radius: 20px;
  margin-top: 11%;
    width: 530px;
    height: 340px;
    font-size: 20px;
    border-style: solid;
    border-color: black;
    border-width: 3px;
    color: black;
    transition: 0.6s;
}
#switchbutton{
margin-top: 4%;
background-color: transparent;
text-transform: inherit;
border-style: solid;
width: 50px;
height: 30px;
border-radius: 5px;
border-width: 2px;
border-color: midnightblue;

}
.chosen{
  height:30px;
  width: 130px;
  border-radius: 5px;
border-width: 2px;
  text-align: center;
  border-color: midnightblue;
  transition: 0.5s;
  text-transform: uppercase;

}
</style>

<script>
    window.onload = function(){
      document.getElementById("output").style.display = "none"
      document.getElementById("input").style.cssText = "width:97%;";
    document.getElementById("main").style.display = "inline"
    document.getElementById("settings").style.display = "none"
    document.getElementById("about").style.display = "none"
    document.getElementById("contact").style.display = "none"
    document.getElementById("community").style.display = "none"
}


var s;
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function showout() {
  var x;
  var sel = document.getElementById('dp1');
  var sel1 = document.getElementById('dp2');
  if(sel.value == sel1.value) {
    alert("Select lenguages !");
  } else {
    document.getElementById("input").style.cssText = "width: 48.7%;"
  document.getElementById("output").style.cssText = "width: 0px;"
  setTimeout(function(){document.getElementById("output").style.cssText = "width: 48.7%;"}, 900)
  s = "true";
  }
}

function main() {
  if(s=="true") {
    document.getElementById("output").style.display = "inline"
  } else {
document.getElementById("output").style.display = "none"
  }
document.getElementById("main").style.display = "inline"
document.getElementById("settings").style.display = "none"
document.getElementById("about").style.display = "none"
document.getElementById("contact").style.display = "none"
document.getElementById("community").style.display = "none"
closeNav();
    
}
function settings(){
  document.getElementById("output").style.display = "none"
document.getElementById("main").style.display = "none"
document.getElementById("settings").style.display = "inline"
document.getElementById("about").style.display = "none"
document.getElementById("contact").style.display = "none"
document.getElementById("community").style.display = "none"
closeNav();
}
function about() {
  document.getElementById("output").style.display = "none"
document.getElementById("main").style.display = "none"
document.getElementById("settings").style.display = "none"
document.getElementById("about").style.display = "inline"
document.getElementById("contact").style.display = "none"
document.getElementById("community").style.display = "none"
closeNav();
} 
function contact() {
  document.getElementById("output").style.display = "none"
document.getElementById("main").style.display = "none"
document.getElementById("settings").style.display = "none"
document.getElementById("about").style.display = "none"
document.getElementById("contact").style.display = "inline"
document.getElementById("community").style.display = "none"
setTimeout(function(){document.getElementById("contactdiv").style.width = "950px"}, 100)
setTimeout(function(){document.getElementById("contactdiv").style.width = "530px"}, 1000)

closeNav();
}
function community() {
  document.getElementById("output").style.display = "none"
document.getElementById("main").style.display = "none"
document.getElementById("settings").style.display = "none"
document.getElementById("about").style.display = "none"
document.getElementById("contact").style.display = "none"
document.getElementById("community").style.display = "inline"
closeNav();
}
function transfer() {
  var x;
  var sel = document.getElementById('dp1');
  var sel1 = document.getElementById('dp2');
  if(sel.value == sel1.value) {
    alert("Select lenguages !");
  } else {
    var y = sel.value;
    sel.value = sel1.value;
    sel1.value = y;
  }
}
</script>
</head>
<body>
<div id="mySidenav" class="sidenav" align="center" style="width: 0px;">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
  <br>
  <button href="#" align="center" onclick="main()"><u>Home</u></button>
  <br>
  <button href="#" onclick="about()"><u>About Us</u></button>
  <br>
  <button href="#" onclick="contact()"><u>Contact Us</u></button>
  <br>
</div>
<span style="font-size:30px;cursor:pointer;" onclick="openNav()">☰  <i><strong><u>Translator Express</u></strong></i></span>
<div id="main" style="display: none;">
<br>
<p align="center"><select id="dp1" class="chosen"><option value="1" id="op1" selected="selected">English</option><option value="2">German</option></select> <button id="switchbutton" align="center" onclick="transfer()">⇄</button> <select id="dp2" class="chosen"><option value="1" id="op2">English</option><option value="2" selected="selected">German</option></select> </p>
<p align="center"><textarea id="input" class="input" align="left" placeholder="//INPUT" style="width: 97%;"></textarea>    <textarea id="output" class="input" align="right" placeholder="//OUTPUT" style="display: none;"></textarea></p>


<button id="translateb" onclick="showout()">Translate  ››</button>
</div>
<div id="settings" style="display: none;">

</div>
<div id="about" style="display: none;">
</div>
<div id="contact" align="center" style="display: inline;">
  <br>
  <br>
  <div id="contactdiv" align="center" style="width: 530px;">
  <pre>On github:
<a href="https://github.com/stoianmihail">https://github.com/stoianmihail</a>

<a href="https://github.com/Alexie81">https://github.com/Alexie81</a>

And in collaboration with The Programmers team:

<a href="https://discord.gg/PU4AZR4b3F">https://discord.gg/PU4AZR4b3F</a>

<a href="https://steamcommunity.com/id/AlexiePopescu">https://steamcommunity.com/id/AlexiePopescu</a>

<a href="https://www.twitch.tv/alexie01">https://www.twitch.tv/alexie01</a>
</pre>
</div>
</div>
<div id="community" style="transition: all 0.4s ease 0s; overflow-x: hidden; display: none;">
</div>

   

 
</body></html>
