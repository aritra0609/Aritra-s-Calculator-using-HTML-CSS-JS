let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    if(e.target.innerHTML=='='){
      string=eval(string);
       document.querySelector('input').value=string;
    }
      else if(e.target.innerHTML=='C'){
      string="";
       document.querySelector('input').value=string;
    }
      else if(e.target.innerHTML=='X'){
       string=""
       let value = document.querySelector('input').value;
       value = value.slice(0, -1); // Remove the last character
       document.querySelector('input').value =value;
       string=value;
    }  
    else{
      
    
    console.log(e.target)
    string=string+e.target.innerHTML;
    document.querySelector('input').value=string;
  }
  })
})
