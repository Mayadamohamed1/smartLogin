let signUpName=document.getElementById('signName')
let signUpEmail=document.getElementById('signEmail')
let signUpPassword=document.getElementById('signPassword')
let message=document.getElementById('message')

let users=[]
if(localStorage.getItem('locusers')!=null){
    users=JSON.parse(localStorage.getItem('locusers'))
}else{
    users=[]
}
function add(){
    if(signUpName.value=='' || signUpEmail.value=='' || signUpPassword.value==''){
message.innerHTML='<p class="text-center text-danger">All Inputs Are required</p>'
    }else{
        let obj={
            name :signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }
        users.push(obj)
        location.href='../signin/signin.html'
        localStorage.setItem('locusers',JSON.stringify(users))
    }
}