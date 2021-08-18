function getPin(){
  const pin = Math.round(Math.random()*10000);
  const pinShow= document.getElementById("pin-show");
  const pinStr= pin +"";
  if(pinStr.length==4){
   return pinShow.value= pin;
  }
  else{
      return getPin()
  }

}

 document.getElementById("calc-btn").addEventListener("click",function(event){
 const calc= event.target.innerText;
  const newVal = document.getElementById("number-show");
  if(isNaN(calc)){
      if(calc=="C"){
          newVal.value="";
      }
    
  }else{
    const newCalc= newVal.value;
    newVal.value= newCalc+ calc;
  }

 })


//  submit button 

function submitBtn(){
   const pinShow= document.getElementById("pin-show").value;
   const numberShow= document.getElementById("number-show").value;
   const notifyError = document.getElementById("notify-error")
   const notifySuccess = document.getElementById("notify-success")
   if(pinShow=="" || numberShow==""){
       alert("please enter pin")
   }else{
    if(pinShow==numberShow){
        notifyError .style.display="none"
          notifySuccess.style.display="block";
       }
       else if(pinShow!=numberShow){
           notifyError .style.display="block"
           notifySuccess.style.display="none";
          
       }
   }
   
}