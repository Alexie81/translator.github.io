window.onload = function(e) {
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
            var input = document.getElementById("input"), output = document.getElementById("output");
            console.log(input.value);

            input.style.cssText = "width: 47%;"
            output.style.cssText = "width: 0px;"
            output.value = input.value;
            setTimeout(function(){document.getElementById("output").style.cssText = "width: 47%;"}, 900)
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
    setTimeout(function(){document.getElementById("contactdiv").style.width = "630px"}, 1000)

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
