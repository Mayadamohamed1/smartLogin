let userNamme= document.getElementById('userNamme')
let logBtn= document.getElementById('logBtn')
userNamme.innerHTML=localStorage.getItem('userName')

logBtn.addEventListener('click',function(){
localStorage.removeItem('userName')
})
