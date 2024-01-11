  

var num = window.document.getElementById('numer_txt')
var n1 = ""
var n2 = ""
var resu  = ""
var conta = ""
num.value = ""

function num7(){
    
   
  num.value = num.value + "7"
 
   
 } 

function num8(){
    
   
   num.value = num.value + "8"
  
 } 

 function num9(){
    
   
  num.value = num.value + "9"
 
}


function num4(){
    
   
  num.value = num.value + "4"
 
} 

function num5(){
    
   
  num.value = num.value + "5"
 
} 

function num6(){
    
   
  num.value = num.value + "6"
 
} 

function num1(){
    
   
  num.value = num.value + "1"
 
} 

function num2(){
    
   
  num.value = num.value + "2"
 
} 

function num3(){
    
   
  num.value = num.value + "3"
 
} 

function num0(){
    
   
  num.value = num.value + "0"
 
} 
 

function soma(){

   n1 =  num.value
   num.value = ""
   conta ="soma"
 }

 function sub(){

  n1 =  num.value
  num.value = ""
  conta ="subtrair"
}

function mult(){

  n1 =  num.value
  num.value = ""
  conta ="multiplicar"
}

function divi(){

 n1 =  num.value
 num.value = ""
 conta ="dividir"
}



function result(){

   n2 =  num.value 
  
   if (conta == "soma"){

    resu = Number(n1) + Number(n2)
    num.value = resu
  
  }

  if (conta == "subtrair"){

    resu = Number(n1) - Number(n2)
    num.value = resu
  
  }

  if (conta == "multiplicar"){

    resu = Number(n1) * Number(n2)
    num.value = resu
  
  }

  if (conta == "dividir"){

    resu = Number(n1) / Number(n2)
    num.value = resu
  
  }
 
}

function limpar(){

  num.value= ""
  n1 = ""
  n2 = ""



}





 