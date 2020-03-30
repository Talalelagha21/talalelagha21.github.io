

original();



document.querySelector('.btn').addEventListener('click', function () {
    document.querySelector(".header").textContent = "NO, please stay home";
    
    
    
});

document.querySelector('.btn2').addEventListener('click', function () {
  original();
    
    
    
});



function original(){
    document.querySelector('.header').textContent= "Can I leave my house? ";
}