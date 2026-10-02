


// const day=new Date();


// const date=day.toLocaleDateString()
// const time=day.toLocaleTimeString()

// console.log(date)
// console.log(time)





let balance=Number(localStorage.getItem('recivin'))||0;

let totaltxr=localStorage.getItem('totataltransaction');
// Cash page


function saving(){

}


 if(window.location.pathname.includes('CASH.html')){

let inputElement=document.getElementById('input-amount');
let cashbalance=document.getElementById('cashbalance')

// cashbalance.innerHTML=`₦${balance}`;

 let amount= document.getElementById('amount')
   let theinput=inputElement.value;

 cashbalance.innerHTML=`₦${localStorage.getItem('balanceamount')}`
let succefullwithdrawal=document.getElementById('succefful-withdraw-rap');

const localwithdrawal=document.getElementById('local-withdrawal')
const inputamountlocal=document.getElementById('input-amountlocal')
let densubpinbtn=document.getElementById('densubpinbtn')
let localwithdrawpinbnt=document.getElementById('localwithdrawpinbnt')

const localarrey=[
  {thecount:`one`}
]

let locaclwithdrawalsave=JSON.parse(localStorage.getItem('locaclwithdrawalsave'))||''

const confirmwithdrawal=document.getElementById('pin-display')
let minimumlocalbank=document.getElementById('minimumlocalbank')

let acountnumber= document.getElementById('acount-number')
let accountname=document.getElementById('account-name')
let accountnumbererror=document.querySelector('.account-number-error')
let accountnameerror= document.querySelector('.name-error')
function withdrawlocal(){

accountnumbererror.innerHTML=''
minimumlocalbank.innerHTML=''
accountnameerror.innerHTML=''
if (inputamountlocal.value<balance && inputamountlocal.value>=1000 &&acountnumber.value.length===10 && accountname.value!==''){
 
localwithdrawpinbnt.style.display='block'
confirmwithdrawal.style.display='block'
densubpinbtn.style.display='none'

}

else  if (inputamountlocal.value<1000){
  
  minimumlocalbank.innerHTML='Minimum:₦1000'

}

else if (acountnumber.value.length!==10){
  accountnumbererror.innerHTML='invalid account number'
}

else if (accountname.value===''){
accountnameerror.innerHTML='Account name reqired'
}




}



const withdrawalpinerror= document.getElementById('pin-withdrawal-error')

function pinlocalbtn(){
withdrawalpinerror.innerHTML=''
  if (pinsecuriey.value===localStorage.getItem('pinstorage')){
    confirmwithdrawal.style.display='none'

// minimumdensub.style.display=''
localStorage.setItem('balanceamount',balance);
 cashbalance.innerHTML=`₦${localStorage.getItem('balanceamount')}`
 densub.style.display='none'
   proccessingwithidrawal.style.display='block'

setTimeout(()=>{
  
succefullwithdrawal.innerHTML='Withdrawal successful'
  succefullwithdrawal.style.display='block'

},3000)




 setTimeout(()=>{


 const id=Math.random()

if (id<0.2){
  theid=`83649273`
}
 else if (id>0.2 && id<0.3){
  theid=`54628363`
 }

 else if (id>0.3 && id<0.4){
  theid=`63882363`
 }

 else if (id>0.4 && id<0.5){
  theid=`08772372`
 }


 else if (id>0.5){
  theid=`34252634`
 }



  succefullwithdrawal.style.display='none';
  proccessingwithidrawal.style.display='none'
densub.style.display='none'
let removebalance=Number(inputamountlocal.value)
 balance-=removebalance;
 console.log(balance)
  localStorage.setItem('recivin',balance)

cashbalance.innerHTML= localStorage.getItem('recivin',balance);
localStorage.setItem('thelocalwithdrawal',localwithdrawal.value)
localStorage.setItem('theacountnumber',acountnumber.value)
localStorage.setItem('theamount',inputamountlocal.value)
localStorage.setItem('theaccountname',accountname.value)
localStorage.setItem('select',select.value)
localStorage.setItem('theid',theid)

for (let i=0; i<localarrey.length;i++){

locaclwithdrawalsave+=` <div class="local-bank">
    <span class="trx-shif">Send to</span>

    <span id="the-bank" class="the-bank">${localStorage.getItem('thelocalwithdrawal')
}</span>

    <span class="account-name" id="account-name">${localStorage.getItem('theaccountname')}</span>
   


    <span class="the-localeamount " id="the-lcalamount">-₦${localStorage.getItem('theamount')}</span>
 </div>`

 localStorage.setItem('locaclwithdrawalsave',JSON.stringify(locaclwithdrawalsave) )
totaltxr++
localStorage.setItem('totataltransaction',totaltxr)
}

},4000);




}



else if(inputamountlocal.value>balance){
  // minimumdensub.style.display=''
amount.style.display='block'

 setTimeout(function(){
amount.style.display=''

 },2000)
}


else if (pinsecuriey.value!==localStorage.getItem('pinstorage')){
 withdrawalpinerror.innerHTML='Incorrect pin'
}


  }









// pin 


const setpininput=document.getElementById('set-pin')

function Setwithdrawalpin(){
document.querySelector('.pin-error').innerHTML=''

  if(setpininput.value.length===4){
    localStorage.setItem('pinstorage',setpininput.value)

    document.getElementById('set-pin-display').style.display='none'
      document.getElementById('succefful-withdraw-rap').style.display='block'
    document.getElementById('succefful-withdraw-rap').innerHTML='pin created'
setTimeout (()=>{
  document.getElementById('succefful-withdraw-rap').style.display='none'
},3000)
  }
    else{
      document.querySelector('.pin-error').innerHTML='Pin must b 4 digit'
    }
}












const minimum=document.getElementById('minimum')
const minimumdensub=document.getElementById('minimumDen');

let localbnt=document.querySelector('.local-bnt');
let densubbtn=document.querySelector('.densub-bnt');








let select=document.getElementById('selectchoice')
let  densub=document.getElementById('densub')
let inputrap=document.getElementById('local-bank')
 let theselect= document.getElementById('Select')
const setpindisplay=document.getElementById('set-pin-display')


function widrawal(){
  if ( localStorage.getItem('pinstorage')<1){
  densub.style.display='none'
setpindisplay.style.display='block';

  }
  
else if (localStorage.getItem('pinstorage')!==''){
   densub.style.display='block'
    select.style.display='Select'
}

  
}

function closepage(){
  densub.style.display=''
  inputElement.value=''
  inputrap.style.display=''
//  minimumdensub.style.display=''

}



let densubinput=document.getElementById('densubinput')

 function secting(){
 

  if(select.value==='Densub balance'){
    densubinput.style.display='block'
densub.style.display='block'
inputrap.style.display=''
densubbtn.style.display='block'
minimum.style.display=''


}

else if (select.value==='Local bank'){
inputrap.style.display='block'
// densub.style.display=''
localbnt.style.display='block'
densubbtn.style.display=''
// minimumdensub.style.display=''
densubinput.style.display='none'
}



else {
  densubbtn.style.display='none'
 localbnt.style.display='none'
inputElement.value=''
inputrap.style.display=''
// minimumdensub.style.display=''
}

 


}

const thetransnsafer=[
  {show:'succed'}
]

// let savehomrecent=JSON.parse(localStorage.getItem('savehomrecent'))
// let homerecent=document.getElementById('home-recent')

// homerecent.innerHTML=savehomrecent
let densaveaddup=''
let showcashtransfertaransaction=document.querySelector('.showcashtransfertaransaction');
let deninput; 
let densave=JSON.parse(localStorage.getItem('densave'))||'';

  let homebagebalance=Number(localStorage.getItem('transferbalance'))||0;






function withdrawdensub(){
  minimumdensub.innerHTML=''
  if (inputElement.value<1000){
 minimumdensub.innerHTML='Minimum:₦1000'
//  minimumdensub.style.display='Minimum:₦1000'
}

else if(inputElement.value>balance){
  
  // minimumdensub.style.display=''
amount.style.display='block'

 setTimeout(function(){
amount.style.display=''

 },2000)


 
}
 else if (inputElement.value<balance && inputElement.value>=1000){
confirmwithdrawal.style.display='block'



localwithdrawpinbnt.style.display='none'

 




// pin end


 }



  
  


}








let closepinpage=document.querySelector('.close-pin-image').addEventListener('click',()=>{
  confirmwithdrawal.style.display='none'
  withdrawalpinerror.innerHTML=''
})


const pinsecuriey=document.getElementById('pin-security')

let pinstore=localStorage.getItem('pinstorage')||'';

function pindensubbtn(){

withdrawalpinerror.innerHTML=''

if (pinsecuriey.value===localStorage.getItem('pinstorage')){

  confirmwithdrawal.style.display='none'
// minimumdensub.style.display=''
 proccessingwithidrawal.style.display='block';
 densub.style.display='none';

 setTimeout(()=>{
  succefullwithdrawal.style.display='block'

},3000)

 setTimeout(()=>{
 
  succefullwithdrawal.style.display='none';
  proccessingwithidrawal.style.display='none'
densub.style.display='none'
 let inputconvert=Number(inputElement.value)
 balance-=inputconvert;
 console.log(balance)
  localStorage.setItem('recivin',balance)
localStorage.setItem('inputconvert',inputconvert)
cashbalance.innerHTML= localStorage.getItem('recivin',balance);


homebagebalance+=inputconvert

 localStorage.setItem('transferbalance',homebagebalance)

for (let i=0;i<thetransnsafer.length;i++){
  densave+=`
<div class="cashtaransaction">
    <span class="trx-colourhtml  trx-shif">Cash balance</span>
    <span class="trx-colourhtml"> Transafar</span>
    <span class="trx-colourhtml">-To m balance</span>
    <span class="cashdeduct-amount trx-colour">-₦${localStorage.getItem('inputconvert')}</span>
    
   </div> `
densave+=` 
<div class="cashtaransaction">
<span class="trx-colourhtml  trx-shif">Main balance</span>
    <span class="trx-colourhtml">received</span>
    <span class="trx-colourhtml">Transafar</span>
    <span class="cashrecive-amount trx-colour">+₦${localStorage.getItem('inputconvert')}</span>
    </div>`
   localStorage.setItem('densave',JSON.stringify(densave))

   pinsecuriey.value=''
totaltxr++
localStorage.setItem('totataltransaction',totaltxr)

}


},4000)


}


else if (pinsecuriey.value!==localStorage.getItem('pinstorage')){
withdrawalpinerror.innerHTML='incorrect pin'
}



  //  singlehome histery
// densaveaddup+=`
// <div class="cashtaransaction">
//     <span class="trx-colourhtml">Cash balance</span>
//     <span class="trx-colourhtml"> Transafar</span>
//     <span class="trx-colourhtml">To main balance</span>
//     <span class="cashdeduct-amount trx-colour">-₦${localStorage.getItem('inputconvert')}</span>
    
//    </div> `

//  densaveaddup+= ` 
// <div class="cashtaransaction">
// <span class="trx-colourhtml">Main balance</span>
//     <span class="trx-colourhtml">received</span>
//     <span class="trx-colourhtml">Transafar</span>
//     <span class="cashrecive-amount trx-colour">+₦${localStorage.getItem('inputconvert')}</span>
//     </div>`
//    localStorage.setItem('savehomrecent',JSON.stringify(densaveaddup))
  //  localStorage.setItem('densaveaddup',JSON.stringify(densaveaddup))
  // single home hitery end






}



let pinone=document.querySelector('.pinone').addEventListener('click',()=>{
   pinsecuriey.value+='1'
})
let pintwo=document.querySelector('.pintwo').addEventListener('click',()=>{
   pinsecuriey.value+='2'
})
let pinthree=document.querySelector('.pinthree').addEventListener('click',()=>{
   pinsecuriey.value+='3'
})
let pinfour=document.querySelector('.pinfour').addEventListener('click',()=>{
   pinsecuriey.value+='4'
})
let pinfive=document.querySelector('.pinfive').addEventListener('click',()=>{
   pinsecuriey.value+='5'
})
let pinsix=document.querySelector('.pinsix').addEventListener('click',()=>{
   pinsecuriey.value+='6'
})
let pinoseven=document.querySelector('.pinseven').addEventListener('click',()=>{
   pinsecuriey.value+='7'
})
let pineight=document.querySelector('.pineight').addEventListener('click',()=>{
   pinsecuriey.value+='8'
})
let pinnine=document.querySelector('.pinnine').addEventListener('click',()=>{
   pinsecuriey.value+='9'
})
let pinzero=document.querySelector('.pinzero').addEventListener('click',()=>{
   pinsecuriey.value+='0'
})

document.querySelector('.delete-pin').addEventListener('click',()=>{
  pinsecuriey.value=''
  withdrawalpinerror.innerHTML=''
})












console.log(balance)
cashbalance.innerHTML=localStorage.getItem('recivin');




let themonry=Number()






// withdrawal end


// cash newtork

let selectnetwork=document.getElementById('Network')
let receivingamount=document.querySelector('.recive-amount')
let cashform=document.getElementById('cashform')
let cashamount=document.getElementById('cashamount')
let convertbtn=document.getElementById('convertbnt')
const proccessingwithidrawal=document.getElementById('proccessing-withdraw');
let allcashconvert=''
 

// image signs
let mtnsign=document.querySelector('.MTN-signs');
let airtelsign=document.querySelector('.AIRTEL-signs');
let glosign=document.querySelector('.GLO-signs');

// image-signs end

 const recomadedamounts={
twohundred:'200',
fivehundred:'500',
onethousand:'1000',
twothousand:'2000',
tenthousand:'10000',

 }
const thetwohundred=document.querySelector('.two-hundred');
const thefivehundred=document.querySelector('.five-hundred');
 const theonethousand=document.querySelector('.one-thousand');
const thetwothousand=document.querySelector('.two-thousand');
const thetenthousand=document.querySelector('.ten-thousand')

thetwohundred.addEventListener('click',()=>{
cashamount.value=recomadedamounts.twohundred;
convertbtn.style.display='block'
continuebtn.style.display='none'

})

thefivehundred.addEventListener('click',()=>{
cashamount.value=recomadedamounts.fivehundred;
convertbtn.style.display='block';
continuebtn.style.display='none';
})

theonethousand.addEventListener('click',()=>{
cashamount.value=recomadedamounts.onethousand;
convertbtn.style.display='block';
continuebtn.style.display='none';
})

thetwothousand.addEventListener('click',()=>{
cashamount.value=recomadedamounts.twothousand;
convertbtn.style.display='block';
continuebtn.style.display='none';
})

thetenthousand.addEventListener('click',()=>{
cashamount.value=recomadedamounts.tenthousand;
convertbtn.style.display='block';
continuebtn.style.display='none';
})




let localonh= document.getElementById('localing');



const rates=[{
  MTNown:'80%',
  Airtelown:'85%',
  Gloown:'80%'
}]

function convertcash(){



let minimumwarning= document.getElementById('convertminimu')

if (selectnetwork.value==='MTN'){

mtnsign.style.display='block'
  airtelsign.style.display='none'
  glosign.style.display='none'

cashform.addEventListener(`submit`,function(event){
event.preventDefault();

// event.preventDefault();
if(cashamount.value>=200){
   
let usermtn=cashamount.value;
let resultmtn=usermtn*20/100;
let alltmtn= usermtn-resultmtn
allcashconvert=alltmtn
receivingamount.innerHTML=`₦${allcashconvert}`;

 convertbtn.style.display='none';
continuebtn.style.display='block';
 minimumwarning.style.display='none';
 emptynetwork.style.display='none'
}


else{
  minimumwarning.style.display='block';
  receivingamount.innerHTML='₦0.00'
 }

})}



else if(selectnetwork.value==='AIRTEL'){

 mtnsign.style.display='none'
  glosign.style.display='none'
  airtelsign.style.display='block'

  event.preventDefault();
  if (cashamount.value>=200) {

  
 
let userairtel=cashamount.value
let resultairtel=userairtel*15/100;
let allairtel=userairtel-resultairtel
allcashconvert=allairtel
receivingamount.innerHTML=`₦${allcashconvert}`
 convertbtn.style.display='none'
continuebtn.style.display='block';
 minimumwarning.style.display='none';
 emptynetwork.style.display='none'
}

else{
   minimumwarning.style.display='block';
   receivingamount.innerHTML='₦0.00'
 }
}


else if (selectnetwork.value==='GLO'){
glosign.style.display='block'
mtnsign.style.display='none'
airtelsign.style.display='none'
event.preventDefault();
  if(cashamount.value>=200){
  
  let usermtn=cashamount.value;
let resultmtn=usermtn*20/100;
let alltmtn= usermtn-resultmtn
 convertbtn.style.display='none'
continuebtn.style.display='block'
allcashconvert=alltmtn
receivingamount.innerHTML=`₦${allcashconvert}`;
 minimumwarning.style.display='none';
 emptynetwork.style.display='none';
}
else{
 
  minimumwarning.style.display='block';
  receivingamount.innerHTML='₦0.00'

}

}






else if (selectnetwork.value==='select'){
  emptynetwork.style.display='block'
   event.preventDefault();
  glosign.style.display='none'
mtnsign.style.display='none'
airtelsign.style.display='none'



}
  
}








 let emptynetwork=document.getElementById('empty-network')
 let network=document.getElementById('number')

 function switching(){ 
  emptynetwork.style.display='none'
  convertbtn.style.display='block'
  continuebtn.style.display='none'
  minimumwarning.style.display=''
 

 }


 function input()
 {
  convertbtn.style.display='block'
  continuebtn.style.display=''
 }


const loadingreang=document.getElementById('loading-rang')
let otptime=document.getElementById('otp-time')
let sent=document.getElementById('sent')
let resentcodeloading=document.querySelector('.resent-codeloadin');
const otprange=document.getElementById('otp-range')








 function resentcode(){
  let time=60;
let startime= setInterval(function(){
time--
otptime.innerHTML=time
  sent.style.display='block'
resentcodeloading.style.display='none';

if (time===0){
  clearInterval(startime)
    resentcodeloading.style.display='block'
  sent.style.display='none'
 }
 },1000) }



function continuecash(){


  if (cashamount.value>10){

   loadingreang.style.display='block'
 otprange.style.display='block'
let time=60;




 let startime= setInterval(function(){
time--
otptime.innerHTML=time


if (time===0){
  clearInterval(startime)
  resentcodeloading.style.display='block'
  sent.style.display='none'
 }
 },1000)}



 }



// AM ON MAKING BALNCE TO REFLECT NORMAL AFTER WITHDROWING TO MAIN BALANCE

let stormoney;

cashbalance.innerHTML= localStorage.getItem('recivin');

const proccessingrap=document.getElementById('proccessing-rap')
const successfulrap=document.getElementById('successful-rap')
let otp='123456'
let inputotp=document.getElementById('otp')
let invalidotp=document.querySelector('.invalid-otp')


let savebalcnce;
 function verify(){

  
if (inputotp.value===otp){
  invalidotp.style.display=''

   setTimeout(function(){
 proccessingrap.style.display='block'
otprange.style.display='none'



  },2000)
 
let settime=setTimeout(function(){

    proccessingrap.style.display='none'
  successfulrap.style.display='block'

},6000);


setTimeout(function(){
  successfulrap.style.display='none'
    loadingreang.style.display='none'
    inputotp.value=''
    let recivin=Number(allcashconvert)
    
    balance+=recivin
// stormoney=recivin
   console.log(balance)
  localStorage.setItem('recivin',balance)
 cashbalance.innerHTML= localStorage.getItem('recivin')
totaltxr++
localStorage.setItem('totataltransaction',totaltxr)

;



const myarrays=[]

myarrays.push(cashamount.value)
// orderpark.innerHTML= myarrays; 
localStorage.setItem('amount',myarrays)
orderpark.innerHTML=localStorage.getItem('balanceamount')
},9000);
}
  


else if (inputotp.value!=otp){
  invalidotp.style.display='block'
}
 }


}




// Cash page end






// chang pin page
const newpininput=document.getElementById('New-pin');
const confimenewpin=document.getElementById('Confirm-pin')
const pinchanged=  document.querySelector('.pin-changed')
const newpinerrro=document.querySelector('.new-pin-r-error');
const confirmnewpineroor=document.querySelector('.confirm-new-pin-error');
let changepinform=document.querySelector('.changpin-form')


// let newpinbrn=document.querySelector('.sumitnewpin').addEventListener('click',()=>{
function sumitnewpin(){

  
   changepinform.addEventListener('click',(event)=>{
event.preventDefault()
if(newpininput.value!==''&& confimenewpin.value===newpininput.value && newpininput.value.length===4){
  localStorage.setItem('pinstorage',newpininput.value)
pinchanged.innerHTML='Pin changed'
pinchanged.style.display='block'
setTimeout(()=>{
pinchanged.style.display='none'

},3000)

}


else  if(newpininput.value===''){
  newpinerrro.innerHTML=' please enter your new pin'
}
else if (confimenewpin.value===''){
confirmnewpineroor.innerHTML='Confirm pin'
}
else if (newpininput.value.length!==4){
  newpinerrro.innerHTML=' pin must be 4 didgit'
}

else if( confimenewpin.value!==newpininput.value){
  confirmnewpineroor.innerHTML='Pin does not match'
}





  })


newpinerrro.innerHTML=' ';
  confirmnewpineroor.innerHTML=''


}
 

// change pin page end
















// function click(){

// alert('hit')
// }






 
 




// AIRTIME PAGE END






// Data page

const labelednetwork=document.getElementById('labelnetwork')
// if (labelednetwork){



let datanetworks=document.getElementById('alldatanetwork');
const formrap=document.querySelector('.form-rap');
const MTN=document.getElementById('MTN');
const Airtel=document.getElementById('Airtel');
const GLO=document.getElementById('GLO');
const mobile=document.getElementById('9mobile')
const inputnumber=document.getElementById('inputnumber')




const dataform=document.getElementById('dataform')
let plan=document.getElementById('plan')
// let Dataspendaweae=document.getElementById('datapagebalance')
let dataprocesing=document.getElementById('dataproccesing')
const emptydatanetwork=document.getElementById('emptydatanetwork')
const emptydataplan=document.getElementById('emptydataplan')
let confirmdatanumbernetwork=document.querySelector('.confirmdatanumber-network')
let contibuebuying=document.getElementById('continue-buying')


// // network prices
let mtndatasing=document.querySelector('.MTNdata-signs')
let Airtirmdatasign=document.querySelector('.AIRTELdata-signs')
let glodatasing=document.querySelector('.GLOdata-signs')
let ninemobilesing=document.querySelector('.ninemobile-signs')

// const emptynetwork=document.getElementById('empty network');

 function networklogo(){
   emptydatanetwork.style.display='none'
    contibuebuying.style.display='none'
  confirmdatanumbernetwork.style.display='none'
buybtn.style.display='block'

 }



function datapricesclick(){
 emptydataplan.style.display='none'
  // contibuebuying.style.display='none'
  // confirmdatanumbernetwork.style.display='none';
  buybtn.style.display='block'


if(datanetworks.value==='MTN'){
MTN.style.display='block'
Airtel.style.display='none';
  GLO.style.display='none'
  mobile.style.display='none'
  emptynetwork.innerHTML=''




}

else if(datanetworks.value==='AIRTEL'){
  Airtel.style.display='block';
  MTN.style.display='none';
  GLO.style.display='none'
  mobile.style.display='none'
  emptynetwork.innerHTML=''


  
}

else if (datanetworks.value==='GLO'){
   Airtel.style.display='none';
  MTN.style.display='none';
  GLO.style.display='block';
  mobile.style.display='none';
emptynetwork.innerHTML=''


mtndatasing.style.display='';
airtelsign.style.display='';
glodatasings.style.display='block';
ninemobilesings.style.display=''

}
else if (datanetworks.value==='9MOBILE'){
Airtel.style.display='none';
  MTN.style.display='none';
  GLO.style.display='none';
  mobile.style.display='block';
emptynetwork.innerHTML='';


mtndatasing.style.display='';
airtelsign.style.display='';
glodatasings.style.display='';
ninemobilesings.style.display='block';

}


 else if (datanetworks.value==='network'){

  plan.value='Select-plan' ;
   emptynetwork.style.display='block';
    Airtel.style.display='none';
  MTN.style.display='none';
  GLO.style.display='none'
  mobile.style.display='none';  

   mtndatasing.style.display='none';
Airtirmdatasign.style.display='none';
glodatasing.style.display='none';
ninemobilesing.style.display='none'

}

else{
  Airtel.style.display='none';
  MTN.style.display='none';
  GLO.style.display='none'
  mobile.style.display='none'
emptynetwork.style.display='block'

}


 }


// network prices end







const allnetworklogo={
  themnt:`MTN`,
  theairtel:`Airtel`,
  theglo:`Glo`,
  the9moblie:`9moble`,
}







let buybtn=document.getElementById('buybtn')
function buydata(){
// let inputnumberdata=document.getElementById('inputnumberdata')
dataform.addEventListener('click',(event)=>{



  if(inputnumber.value>1000 && datanetworks.value!=='network' && plan.value!=='Select-plan'){
event.preventDefault()
buybtn.style.display='none'
contibuebuying.style.display='block'
confirmdatanumbernetwork.style.display='block'
  


  
}
 
if (datanetworks.value==='MTN'){
  event.preventDefault()
  mtndatasing.style.display='block';
Airtirmdatasign.style.display='';
glodatasing.style.display='';
ninemobilesing.style.display=''
}

else if (datanetworks.value==='AIRTEL'){
  event.preventDefault()
  mtndatasing.style.display='';
Airtirmdatasign.style.display='block';
glodatasing.style.display='';
ninemobilesing.style.display=''
}


else if (datanetworks.value==='GLO'){
  event.preventDefault()
  mtndatasing.style.display='';
Airtirmdatasign.style.display='';
glodatasing.style.display='block';
ninemobilesing.style.display=''
}

else if (datanetworks.value==='9MOBILE'){
  event.preventDefault()
  mtndatasing.style.display='';
Airtirmdatasign.style.display='';
glodatasing.style.display='';
ninemobilesing.style.display='block'
}

else if ( datanetworks.value==='network' ){
emptydatanetwork.style.display='block'
}
else if (plan.value==='Select-plan'){
  emptydataplan.style.display='block';
}





  

event.preventDefault()
})

}



 



const allnetworkarrays=[
{mntdata:'MTN'},
// {airteldata:'Airtile'},
// {Glodata:'GLO'},
// {ininemobledata:'9mobile'},
]


let thenetworkhomelogo=document.getElementById('thenetwork')
let thetransaction=document.getElementById('thetransaction')
let databundle=document.getElementById('data-bundle');
let debit=document.getElementById('thedebitamount');

let transasave=JSON.parse(localStorage.getItem('datatransave')) ;

// if (JSON.parse(localStorage.getItem('datatransave'))=null){
// transasave=`
// }
// let savehomrecent=JSON.parse(localStorage.getItem('savehomrecent'))

// let homerecent=document.getElementById('home-recent-trx')


let alltransactionshow=''

alltransactionshow+=JSON.parse(localStorage.getItem('datatransave'))

alltransactionshow+=JSON.parse(localStorage.getItem('densave'));


alltransactionshow+=JSON.parse(localStorage.getItem('locaclwithdrawalsave'))

 const homerecenttransactions=document.getElementById('home-recent-transactions')
let theaddtest=document.querySelector('.theaddtest')

homerecenttransactions.innerHTML=alltransactionshow

let savehomrecent=''

   function continuedata(){
  // dataform.addEventListener('submit',(event)=>{
    const selected=plan.options[plan.selectedIndex]
    // console.log(selected.dataset.bundle)


if(inputnumber.value>1000 && datanetworks.value!=='network' && plan.value!=='Select-plan'){
  let insufficientbalance=document.getElementById('insuficent')
let wassuccesful=document.getElementById('was-succefullrap')
let homebagebalance=Number(localStorage.getItem('transferbalance'))||0;
   
if (plan.value>homebagebalance){
insufficientbalance.style.display='block'

setTimeout(()=>{
insufficientbalance.style.display='none'

},2000)

}

else if (plan.value<=homebagebalance){
 dataprocesing.style.display='block';
setTimeout(()=>{
 

  dataprocesing.style.display='none'

confirmdatanumbernetwork.style.display='none';
  buybtn.style.display='block'
contibuebuying.style.display='none'


  homebagebalance-=plan.value

localStorage.setItem('transferbalance',homebagebalance)


localStorage.setItem('thenetworkstore',datanetworks.value)
  
localStorage.setItem('theplan',plan.value);
  localStorage.setItem('theboundle',selected.dataset.bundle)
  localStorage.setItem('thevalidity',selected.dataset.validity)
wassuccesful .style.display='block'

  let planbougth=document.getElementById('plan-bought').innerHTML=selected.dataset.bundle;
  let succesfulnetwork=document.getElementById('succefulnewtwork').innerHTML=datanetworks.value

// single home histery
//   savehomrecent=`<div class="transaction-ranging">
// <span class="trx-colour">${localStorage.getItem('thenetworkstore')}</span>
// <span class="trx-colour">Data</span>
// <span class="trx-colour">${localStorage.getItem('theboundle')}</span>

// <div class="transaction-amount-rang trx-colour">
// <span class="naira">₦</span>
// <span id="thedebitamount"  class="amountshow">${localStorage.getItem('theplan')}</span></div>

// </div>`
// localStorage.setItem('savehomrecent',JSON.stringify(savehomrecent))
// single home gitery end


   for(let i=0;i<allnetworkarrays.length;i++){

     transasave+=`

<div class="transaction-ranging">
<span class="trx-colour  trx-shif">${localStorage.getItem('thenetworkstore')}</span>
<span class="trx-colour">Data</span>
<span class="trx-colour">${localStorage.getItem('theboundle')}</span>

<div class="transaction-amount-rang trx-colour">
<span class="naira">-₦</span>
<span id="thedebitamount" class="amountshow">${localStorage.getItem('theplan')}</span></div>

</div>

`


localStorage.setItem('datatransave',JSON.stringify(transasave))
totaltxr++
localStorage.setItem('totataltransaction',totaltxr)

}



},3000)

setTimeout(()=>{
wassuccesful.style.display='none'
},7000)


}


}
// densubbalance.innerHTML=`₦${localStorage.getItem('transferbalance')}`



// event.preventDefault()
  // })

 
}

localStorage.setItem('datatransave',JSON.stringify(transasave))



const now =new Date();

const date=now.toLocaleDateString();
const time=now.toLocaleTimeString()

localStorage.setItem(`data`,date)
localStorage.setItem('time',time)




dataout()

function dataout(){
//  let thebank =document.getElementById('the-bank').innerHTML=
//  document.getElementById('account-name').innerHTML=;
// document.getElementById('the-lcalamount').innerHTML=`;
document.getElementById('detailsname').innerHTML=localStorage.getItem('theaccountname');
document.getElementById('detailamount').innerHTML=`-₦${localStorage.getItem('theamount')}`

document.getElementById('thedate').innerHTML=localStorage.getItem('data')
document.getElementById('thetime').innerHTML=localStorage.getItem('time')
document.getElementById('withdrawal-location').innerHTML=localStorage.getItem('select');
document.getElementById('ID').innerHTML=localStorage.getItem('theid')
}



// transactions()

// function transactions(){







// }

const transactiondetailsimage=document.querySelector('.transactiondetails-image')
let details= document.querySelector('.details')
transactiondetailsimage.addEventListener('click',()=>{

 details.style.display='none'
 
})


document.querySelector('.local-bank').addEventListener('click',()=>{
 details.style.display='block';

})



// transaction details
// let ch='08755'
// const clipboardimage=document.querySelector('.clipborad-image')

// copy.addEventListener('click',()=>{
//   navigator.clipboard.writeText(ch.textContent)
// })



// transaction details end

// let savehomrecent=JSON.parse(localStorage.getItem('savehomrecent'))



// let shwocashmainbalanceaddup=document.querySelector('.shwocashmainbalanceaddup')








/* <div>
   <span>₦</span> 
</div>   */
// clicking.addEventListener('click',()=>{
 
//    for(let i=0;i<allnetworkarrays.length;i++){

//      theaddtest.innerHTML+=`<div class="transactions">
//     <div>
// <span>${localStorage.getItem('thenetworkstore')}</span>
// <span>Data</span>
// <span>${localStorage.getItem('theboundle')}</span>


// </div>
// <div class="thedebitamount-rap">
// <span>₦</span>
// <span id="thedebitamount">${localStorage.getItem('theplan')}</span>
// </div>


// </div>`
// }
// })

//  for(let i=0;i<allnetworkarrays.length;i++){
// homerecenttransactions.innerHTML+=`<div class="transactions">
//     <div>
// <span>${localStorage.getItem('thenetworkstore')}</span>
// <span>Data</span>
// <span>${localStorage.getItem('theboundle')}</span>


// </div>
// <div class="thedebitamount-rap">
// <span>₦</span>
// <span id="thedebitamount">${localStorage.getItem('theplan')}</span>
// </div>


// </div>`
// }










// Data page end











// Home page




if (densubbalance){
  
let densubbalance=document.getElementById('densubbalance')

densubbalance.innerHTML=`₦${localStorage.getItem('transferbalance')}0`||0

document.querySelector('.totaltrx').innerHTML=localStorage.getItem('totataltransaction')||0;




let dashbaord=document.getElementById('dashboard')




const eyes1=document.querySelector('.eyes1') 

const eyes2=document.querySelector('.eyes2')

const closebalance='**********'

eyes1.style.display='block'
// }

eyes1.addEventListener('click',()=>{
 eyes2.style.display='block'
  densubbalance.innerHTML=closebalance;
 eyes1.style.display='none'
})


eyes2.addEventListener('click',()=>{
 densubbalance.innerHTML=`₦${localStorage.getItem('transferbalance')}` 
eyes2.style.display='none'
 eyes1.style.display='block'
})






if(densubbalance.innerHTML===`₦${localStorage.getItem('transferbalance')}`){


 eyes1.style.display='block';
 eyes2.style.display='none';

}



const refernow=document.querySelector('.refer-now')
const refdetails=document.getElementById('ref-details')
const closerefpage=document.querySelector('.close-ref-page')
refernow.addEventListener('click',()=>{
refdetails.style.display='block'
})

closerefpage.addEventListener('click',()=>{
  refdetails.style.display='none'
})


}

// Home page end


// AIRTIME PAGE


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




















// if (airatimeagree){
// const airatimeagree=document.getElementById('airtimeagree');

// const airtimeinput=document.getElementById('airtimeamount');
// let networkairtime=document.getElementById('networkairtime');
//  let pleseselectnetwork=document.querySelector('.select-airtime-network');
// const purchaseairtim=document.querySelector('.purchaseairtim');
// const continueairtim=document.querySelector('.continueairtim');

//  let minimumairtime= document.querySelector('.minimu-airtime');









//   // networkairtime.addEventListener('click',(event)=>{
//   //    pleseselectnetwork.innerHTML=''
//   // })


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
// // 
// // 
// // 
// // 
// // 
// }