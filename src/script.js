/*variable to obtain the values ​​of the input text*/ 
var num = window.document.getElementById('numer_txt') 

/*variable that stores the value of the first number*/ 
var n1 = ""

/*variable that stores the value of the second number */
var n2 = ""

/*variable that stores the result of the account */
var resu  = ""

/*variable that stores the result of the account with a comma */
var final = "" 

/*variable that checks the type of account */
var account = ""

/* function that adds the number 7 to the text input */
function num7(){
    
  num.value = num.value + "7"
 
 } 

 /* function that adds the number 8 to the text input */
function num8(){
    
   num.value = num.value + "8"
  
 } 

 /* function that adds the number 9 to the text input */
 function num9(){
    
  num.value = num.value + "9"
 
}

/* function that adds the number 4 to the text input */
function num4(){
    
  num.value = num.value + "4"
 
} 

/* function that adds the number 5 to the text input */
function num5(){
    
  num.value = num.value + "5"
 
} 

/* function that adds the number 6 to the text input */
function num6(){
    
  num.value = num.value + "6"
 
} 

/* function that adds the number 1 to the text input */
function num1(){
    
  num.value = num.value + "1"
 
} 

/* function that adds the number 2 to the text input */
function num2(){
    
  num.value = num.value + "2"
 
} 

/* function that adds the number 3 to the text input */
function num3(){
    
  num.value = num.value + "3"
 
} 

/* function that adds the number 0 to the text input */
function num0(){
    
  num.value = num.value + "0"

} 

/* function that adds the comma to the text input */
function comma(){
      
  num.value = num.value + ","
  
}
 
/* function that checks whether the sum button has been pressed */
function sum(){

   n1 =  num.value.replace(",", ".")
   num.value = ""
   account ="sum"
 }

 /* function that checks if the minus button was pressed */
 function sub(){

  n1 =  num.value.replace(",", ".")
  num.value = ""
  account ="subtraction"
}

/* function that checks whether the multiplication button has been pressed */
function mult(){

  n1 =  num.value.replace(",", ".")
  num.value = ""
  account ="multiplication"
}

/* function that checks whether the split button has been pressed */
function divi(){

 n1 =  num.value.replace(",", ".")
 num.value = ""
 account ="division "
}


/* function responsible for the account result */
function result(){

   n2 =  num.value.replace(",", ".")
  
   /* if that performs the sum */
   if (account == "sum"){

    
    resu = Number(n1) + Number(n2)
    num.value = resu
    final = num.value.replace(".", ",")
    num.value = final 
  
  }

  /* if that performs the subtraction */
  if (account == "subtraction"){

    resu = Number(n1) - Number(n2)
    num.value = resu
    final = num.value.replace(".", ",")
    num.value = final 
  
  }

  /* if that performs the multiplication */
  if (account == "multiplication"){

    resu = Number(n1) * Number(n2)
    num.value = resu
    final = num.value.replace(".", ",")
    num.value = final 
  
  }

  /* if that performs the division */
  if (account == "division "){

    resu = Number(n1) / Number(n2)
    num.value = resu
    final = num.value.replace(".", ",")
    num.value = final 
  
  }
 
}

/* cleaning button function */
function clean(){

  num.value= ""
  n1 = ""
  n2 = ""

}