



// Register page
const registerform=document.getElementById('register-form');
const firstnameinput=document.getElementById('first-name');
const usernameinput=document.getElementById('user-name');
const emailinput=document.getElementById('email');
const passwordinput=document.getElementById('password');
const confirmpasswordinput=document.getElementById('Confirm password');



function register(){

document.getElementById('confirm-password-error').innerHTML=''
    document.getElementById('confirm-password-error').innerHTML=''
    document.getElementById('first-name-error').innerHTML=''
  document.getElementById('user-name-error').innerHTML=''
  document.getElementById('email-error').innerHTML=''
 document.getElementById('password-error').innerHTML=''





if(firstnameinput.value!=='' && usernameinput.value!=='' && emailinput.value!=='' && emailinput.value.includes('@') && emailinput.value!==localStorage.getItem('email') && passwordinput.value!=='' && confirmpasswordinput.value!=='' && confirmpasswordinput.value===passwordinput.value && usernameinput.value!==localStorage.getItem('username') && passwordinput.value!==localStorage.getItem('password')  && passwordinput.value.length>=6){
  
              window.location.href='Home page.html';

 
   document.querySelector('.succefuly-register-messeage').style.display='block'
  document.querySelector('.succefuly-register-messeage').innerHTML='Succesful';

  localStorage.setItem('email',emailinput.value);
 localStorage.setItem('password',passwordinput.value);
 localStorage.setItem('username',usernameinput.value);
 setTimeout(()=>{
  document.querySelector('.succefuly-register-messeage').style.display='none'
 },3000)

}


  registerform.addEventListener('click',(event)=>{

  //  wrong inputs
ErrorMessages()
function ErrorMessages() {
if (firstnameinput.value==='' ){
  document.getElementById('first-name-error').innerHTML='Please enter your full name'
  }
else if(usernameinput.value===''){
  document.getElementById('user-name-error').innerHTML='Please enter your username'
  }

else if(emailinput.value===''){
  document.getElementById('email-error').innerHTML='Please enter your email address'
}

else if(passwordinput.value===''){
  document.getElementById('password-error').innerHTML='Please enter your password'
}


else if(confirmpasswordinput.value===''){
  document.getElementById('confirm-password-error').innerHTML='Please confirm your password'

 

}


else if(  confirmpasswordinput.value!==passwordinput.value){
  document.getElementById('confirm-password-error').innerHTML='Password does not match'
document.getElementById('password-error').innerHTML=''
}

else if(!emailinput.value.includes('@')){
  document.getElementById('email-error').innerHTML='Please enter a valid email address'
   document.getElementById('user-name-error').innerHTML=''
    
}
else if (usernameinput.value.length<4){
  document.getElementById('user-name-error').innerHTML='Username must be at least 4 characters long'
}

// else if (usernameinput.value===localStorage.getItem('username') ){
//   document.getElementById('user-name-error').innerHTML='Username already exist'
// }

else if(passwordinput.value.length<6){
  document.getElementById('password-error').innerHTML='Password must be at least 3 characters long'
}

else if (emailinput.value===localStorage.getItem('email') || usernameinput.value===localStorage.getItem('username')){
   document.querySelector('.success-message').style.display='block'
  document.querySelector('.success-message').innerHTML='Email or username already exist';

  setTimeout(()=>{
    document.querySelector('.success-message').style.display='none'

  },3000)
}

// else if(){

//    document.querySelector('.success-message').style.display='block'
//   document.querySelector('.success-message').innerHTML='Password already exist'

//   setTimeout(()=>{
//     document.querySelector('.success-message').style.display='none'
//   },3000)

//   }

// else if(usernameinput.value===localStorage.getItem('username')){
//   document.getElementById('user-name-error').innerHTML='Username already exist'
// }

else if (usernameinput.value.length>6){
  document.getElementById('user-name-error').innerHTML='Username must be max 6 characters long'
}

}
    

   event.preventDefault() 

})













// everythin correct

//  correctdetails()
// function correctdetails(){
// if(confirmpasswordinput.value===passwordinput.value){
  
//   console.log('success')

  

// }

// if(confirmpasswordinput.value!==''){
  
// }


// else if(firstnameinput.value!==''){

// }

// else if(usernameinput.value!==''){
  
// }

//  else if(emailinput.value!==''){

// }

// else if(passwordinput.value!==''){
  
// }

// }



}




// Register page End


// Login page



 let loginemail=document.getElementById('loginemail');
  let loginpassword=document.getElementById('loginpassword');
  const loginform=document.getElementById('login-form');
const logingmessage=document.querySelector('.loging-message')
  
function login(){

document.querySelector('.useer-name-error').innerHTML='';
    document.querySelector('.password-error').innerHTML=''

document.querySelector('.useer-name-error').innerHTML='';
    document.querySelector('.password-error').innerHTML=''

 loginform.addEventListener('click',(event)=>{

  if(  loginpassword.value===localStorage.getItem('password')&&loginemail.value===localStorage.getItem('email') || loginemail.value===localStorage.getItem('username')){

     logingmessage.style.display='block';
    logingmessage.innerHTML='Login Succesful';
    window.location.href='Home page.html';


    setTimeout(()=>{
       logingmessage.style.display='none';

    },3000)

  }


else if (loginpassword.value===''){
  document.querySelector('.password-error').innerHTML='Empty password';
  
}


else if(loginemail.value===''){
  document.querySelector('.useer-name-error').innerHTML='Empty Email or username';
  
}


else{
    logingmessage.style.display='block';

    logingmessage.innerHTML='Incorrect details';



    setTimeout(()=>{
       logingmessage.style.display='none';

    },3000)


  }

event.preventDefault()

 }

)


}


// Login page end
let homeuserdisplay=document.getElementById ('homeuserdisplay')

if(homeuserdisplay){
 homeuserdisplay.innerHTML=localStorage.getItem('username')
}





// second feature page
let fundvartransaeter=document.querySelector('.fund-var-bank')

if (fundvartransaeter){
  const banks={
  palmpaydetails:'9025342728',
  kudadetails:'2272837352',
  opaydetails:'7028273737',


}

let transaferaccountname=document.getElementById('transaferaccountname');
let transferbankname=document.getElementById('transaferbankname')
let transaferaccountnumber=document.getElementById('transaferaccountnumber')

const firstsign=document.querySelector('.firstsing')
const secondsign=document.querySelector('.secondsing')
const thirdsing=document.querySelector('.thiredsing')

transaferaccountnumber.innerHTML=banks.palmpaydetails
transferbankname.innerHTML='Palmpay';
  transaferaccountname.innerHTML=`Densub-${localStorage.getItem('username')}`
firstsign.style.display='block'


let firstbank=document.querySelector('.first-bank').addEventListener('click',()=>{
   firstsign.style.display='block';
    secondsign.style.display='none'
  thirdsing.style.display='none'
transaferaccountnumber.innerHTML=banks.palmpaydetails
  transferbankname.innerHTML='Palmpay';
  transaferaccountname.innerHTML=`Densub-${localStorage.getItem('username')}`; firstbank.classList.add('green')
 
 
})



let secondbank=document.querySelector('.second-bank').addEventListener('click',()=>{

transaferaccountnumber.innerHTML=banks.kudadetails
  transferbankname.innerHTML='Kuda';
transaferaccountname.innerHTML=`Densub-${localStorage.getItem('username')}`
  firstsign.style.display='none';
  secondsign.style.display='block'
  thirdsing.style.display='none'
})

let thiredbank=document.querySelector('.third-bank').addEventListener('click',()=>{
transaferaccountnumber.innerHTML=banks.opaydetails
 transferbankname.innerHTML='Opay';
  transaferaccountname.innerHTML=`Densub-${localStorage.getItem('username')}`
  firstsign.style.display='none';
  secondsign.style.display='none'
  thirdsing.style.display='block'

})



}

// const copyimage=document.querySelector('.copya-image')
// let theacoun='38829'

// copyimage.addEventListener('click',()=>{
//   navigator.clipboard.writeText(theacoun.textContent)
// })

// const accountNumber = document.getElementById("transaferaccountnumber");
// const copyBtn = document.getElementById("copyBtn");

// copyBtn.addEventListener("click", () => {
//     navigator.clipboard.writeText(accountNumber);
//     console.log('click')
// });



// second feature page end







// Change page

const oldpassword=document.getElementById('oldpassword')
const resetpasswordform=document.getElementById('reset-password-form')
const newpassword=document.getElementById('New-password')
const confirmnewpassword=document.getElementById('confirm-new-password')
let succfulreset= document.getElementById('reset-password-succeful')
function submbitbnt(){
document.getElementById('confirm-new-password-error').innerHTML='';
   document.getElementById('new-password-error').innerHTML='';

     document.getElementById('old-password-error').innerHTML='';

  resetpasswordform.addEventListener('click',(event)=>{


 if (newpassword.value!=='' && oldpassword.value===localStorage.getItem('password') && confirmnewpassword.value===newpassword.value){
  localStorage.setItem('password',newpassword.value)


     succfulreset.innerHTML='Password changed'
succfulreset.style.display='block'

     setTimeout(()=>{
succfulreset.style.display='none'

     },3000)

}

else if (oldpassword.value!==localStorage.getItem('password')){
  document.getElementById('old-password-error').innerHTML='Incorrect password'
}

else if (newpassword.value===''){
  document.getElementById('new-password-error').innerHTML='Enter your new password'
}

else if (confirmnewpassword.value===''){
  document.getElementById('confirm-new-password-error').innerHTML='Please confirm password'
}

else if (confirmnewpassword.value!==newpassword.value){
  document.getElementById('confirm-new-password-error').innerHTML='Password does not match'
}

else{
   
}

event.preventDefault()
  })

}


// change page End







//  Profile page

document.getElementById('usershow').innerHTML=localStorage.getItem('username')


// Profile page end


































// AIRTIME PAGE



// const the=document.getElementById('the').innerHTML='am hooo';


// let landingpageemail=document.getElementById('subscibeemail');
// const subscribebtn=document.getElementById('subscribebtn');



//   function subscrib(){
//     console.log(landingpageemail.value)
//     subscribebtn.innerHTML='subscribed'
//   }


// const airtimform=document.getElementById('airtime-form');
// let airtimeamountinput=document.getElementById('airtimeamountinput')

// function Purchasebtn(){

//   airtimform.addEventListener('click',(event)=>{

//     if (airtimeamountinput.value<1000){
//       alert('hi')
//     }
    
// event.preventDefault()

// })
// }




// `<div class="transactions">
//     <div>
// <span id="thenetwork"></span>
// <span id="thetransaction">Data</span>
// <span  id="data-bundle"></span>
// <P> <!--date and time--> </P>

// </div>
// <div class="thedebitamount-rap">
// <span>₦</span>
// <span id="thedebitamount"></span>
// </div>


// </div>`

































// const purchaseairtim=document.getElementById('purchaseairtim')

// // // const Airtimbtn=document.getElementById('buyairtimebtn');
// const airatimeagree=document.getElementById('airtimeagree');

// if (airatimeagree){
// const airtimform=document.getElementById('airtime-form');

// const airtimeinput=document.getElementById('airtimeamount');

// let networkairtime=document.getElementById('networkairtime');
//  let pleseselectnetwork=document.querySelector('.select-airtime-network');
// const purchaseairtim=document.querySelector('.purchaseairtim');
// const continueairtim=document.querySelector('.continueairtim');

//  let minimumairtime= document.querySelector('.minimu-airtime')

//   function airtimebtn(){
   

 
//       airtimform.addEventListener('click',(event)=>{

//      if (networkairtime.value==='selectairtime'){
//      pleseselectnetwork.innerHTML='please select network'
      
//      }
// else if (airtimeinput.value<100){
// minimumairtime.innerHTML='Minimun:100'
// } 

// else if(networkairtime.value!=='selectairtime' && airtimeinput.value>=100){
//   let confimnumber=document.querySelector('.please-confirm').style.display='block'
// purchaseairtim.style.display='none'
// continueairtim.style.display='block'

//   }

//       event.preventDefault() 

//   })
 
 
// }
// }

//   networkairtime.addEventListener('click',(event)=>{
//      pleseselectnetwork.innerHTML=''
//   })


//  let airtimesuccesfuldislap=document.getElementById('airtime-succesful-dislap');
// let airtimeproccessing= document.getElementById('airtimproccesing');
//   continueairtim.addEventListener('click',()=>{

// // condition
 

//     minimumairtime.innerHTML=''
  
// airtimeproccessing.style.display='block';

//  setTimeout(()=>{
//  airtimeproccessing.style.display=''
//  airtimesuccesfuldislap.style.display='block'
//  },3000)

// setTimeout(()=>{ 
//    airtimesuccesfuldislap.style.display='' 
// },6000)

//   })

// // import {bbbb} from "./javascript.js";


// // console.log('rr');
  

  
// // }

 
 




// // AIRTIME PAGE END






