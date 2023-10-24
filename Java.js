let box = document.querySelector('.box');
for(i = 0;i < 200; i++){
    box.addEventListener('mouseover', function(){
        let Son = parseInt(Math.random() * -10000);
        let Son2 = parseInt(Math.random() * 5000);
        let img = document.createElement('img');
        img.classList.add('img');
        img.src = 'yomg`ir.jpg';
        img.style = '--i:'+ Son +'px;' + '--a:'+ Son2 +'px;';
    
        box.appendChild(img)
    })
}