let users=[]
users=JSON.parse(localStorage.getItem('locusers'))
let signinEmail=document.getElementById('signEmail')
let signinPassword=document.getElementById('signPassword')
let btn=document.getElementById('login')

btn.addEventListener('click' , function(){
    if(signinEmail.value == '' || signinPassword.value == ''){
        document.getElementById('message').innerHTML='<p class="text-center text-danger">All Inputs Are required</p>'
    }else{
        checkUser()
    }
})
function checkUser(){
    for(let i=0 ;i<users.length; i++){
        if(signinEmail.value == users[i].email && signinPassword.value == users[i].password){
            let userName = users[i].name
            localStorage.setItem('userName',userName)
            location.href='../../home/index.html'
            break;
        }
    }
}