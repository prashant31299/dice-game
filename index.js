var randomnumber1 = Math.floor(Math.random()*6)+1;
 var randomdiceimage= "dice" + randomnumber1 + ".png";
var randomimage = "images/" + randomdiceimage;
 
 var image1= document.querySelectorAll("img")[0];
 
  image1.setAttribute("src",randomimage);



var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomdiceimage2 = "dice" + randomnumber2 + ".png";
var randomimage2 = "images/" + randomdiceimage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" ,randomimage2);

if(randomnumber1 >randomnumber2){
    document.getElementById("win").innerHTML= "You win ";

}else if(randomnumber1 == randomnumber2){
    document.getElementById("win").innerHTML= "match draw";
}
else{
    document.getElementById("win").innerHTML= " computer win ";


}




function refresh(){
    window.location.reload();
}