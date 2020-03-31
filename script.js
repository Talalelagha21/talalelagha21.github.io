

original();



document.querySelector('.btn').addEventListener('click', function () {
    document.querySelector(".header").textContent = "NO, please stay home";
    document.querySelector(".header").style.color = "red";
    document.querySelector('.help').textContent= "For more Information ";
    document.querySelector('.link').textContent= "click here ";
   
    
    
    
});

document.querySelector('.btn2').addEventListener('click', function () {
  original();
    
    
    
});



function original(){
    document.querySelector('.header').textContent= "Can I leave my house? ";
    document.querySelector('.header').style.color = "black";
    
}

