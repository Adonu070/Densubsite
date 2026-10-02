
const myarrays=[]
const inputElement= document.querySelector('.input-text')


function send(){
const theinput=inputElement.value;

myarrays.push(theinput)

inputElement.value='';
renderall()
}


function renderall(){

  let detailhtml=''
  for( let index=0; index<myarrays.length;index++)
{
  const showing= myarrays[index]

  let html=`<p class="js-p">${showing}</p>`;

detailhtml+=html;

}
document.querySelector('.text').innerHTML=detailhtml;
}


// background-color

  let buttonElement=document.getElementById('the')

function turn(){


  if (buttonElement.innerHTML==='off')
  {
    document.body.style.background="green"
     document.getElementById('the').innerHTML='on'
     
    }


  else if(buttonElement.innerHTML==='on')
    {
     document.body.style.background ="#0f1724"
      document.getElementById('the').innerHTML='off'
    }
   
  }

