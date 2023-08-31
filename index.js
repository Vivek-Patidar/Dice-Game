var randomnumber1= Math.random();
randomnumber1=Math.floor(randomnumber1*6)+1;
var randomnumber2= Math.random();
randomnumber2=Math.floor(randomnumber2*6)+1;
if(randomnumber1===randomnumber2)
{
    document.querySelector(".container h1").innerHTML="🚩Draw🚩";
}
else if(randomnumber1>randomnumber2)
{
    document.querySelector(".container h1").innerHTML="🚩Player1 wins!";
}
else{
    document.querySelector(".container h1").innerHTML="Player2 wins!🚩";
}