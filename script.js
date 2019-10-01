let COOKIE = document.getElementById("cookie");
let cookies = 0;
let autoClick = 0;
let clickerPrice = 20;


function cookieClick()
{
    document.getElementById("cookie").style.height = 193;
    document.getElementById("cookie").style.width = 217;
    setTimeout(enlarge, 100); // Starts cooking click animation.

    if (cookies === 99)
    {
        document.getElementById("cookieBalance").innerHTML = `Cookies: ${++cookies}!`;
        document.getElementById("cookieBalance").style.color = "red";
    }
    else
    {
        document.getElementById("cookieBalance").innerHTML = `Cookies: ${++cookies}`;
        document.getElementById("cookieBalance").style.color = "black";
    }

}

function enlarge()
{
    document.getElementById("cookie").style.height = 213;
    document.getElementById("cookie").style.width = 237;
}

function startAuto()
{
    console.log("Activated auto clickers.")
    setInterval(autoClickers, 1000);
}

function increaseClickers()
{
    if (cookies >= clickerPrice)
    {
        autoClick += 1;
        cookies -= clickerPrice;
        document.getElementById("cookieBalance").innerHTML = `Cookies: ${cookies}`;
        clickerPrice *= 1.3;
        clickerPrice = parseInt(clickerPrice);
        document.getElementById("price").innerHTML = `Price of clicker: ${clickerPrice}`;
    }
    else 
    {
        console.log("Insufficient funds.");
    }
}

function autoClickers()
{
    console.log("Auto-clicked.")
    cookies += autoClick;
    document.getElementById("cookieBalance").innerHTML = `Cookies: ${cookies}`;
}
