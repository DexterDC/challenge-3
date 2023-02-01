const menu = document.getElementById('hamburger');

menu.addEventListener("click", function() {
    document.getElementById("menu-full").classList.remove('hidden');
    document.getElementById('container').classList.add('hidden');
  }); 

const close = document.getElementById('close');

close.addEventListener("click", function(){
    document.getElementById('menu-full').classList.add('hidden');
    document.getElementById('container').classList.remove('hidden');
});