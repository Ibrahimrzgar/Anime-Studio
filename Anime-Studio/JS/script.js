

var theme = document.getElementById("theme");//geting element by the id save it inside theme variable

theme.onclick = function(){//when we click the theme the function will work

    document.body.classList.toggle("light-theme"); //calling the id in the css file

    if(document.body.classList.contains("light-theme"))//if light theme exist show moon png
    {
        theme.src = "images/header-theme/moon.png";
    }

    else//if light theme not exist show sun png
    {
        theme.src = "images/header-theme/sun.png";
    }

}


var mo = document.getElementById("motivation-btn");//geting element by the id save it inside theme variable

mo.onclick = function motivation()//when we click the motivation-btn the function will work
{
    alert("Never give up without even trying. Do what you can, no matter how small the effect it may have! (--Onoki--). , No matter how hard or impossible it is, never lose sight of your goal. (--Monkey D Luffy--).");
    
    confirm("you have to try hard!!");//confirm the user
    
    prompt("did you like it","yes","no");//asking user
    
    alert("thank you ;) ");//alert
}