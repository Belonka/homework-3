//number1

let num1 = Number(prompt('write number'));
let num2 = prompt('write second number');

if(num1 > num2){
    alert('number ' + num1 + ' bigger than number ' + num2)
} else if(num1<num2){
    alert('number ' + num1 + ' less than number ' + num2)
} else if(num1 === num2){
    alert('numbers are equal')
} 



//number2

const userNumber1 =Number(prompt('Write first number'));
const userAction = prompt('which action + - / *:');
const userNumber2 = Number(prompt('Write second number'))



switch(userAction) {
    case '*':
        alert(userNumber1 *userNumber2 )
        break;
    case '/':    
        alert(userNumber1 /userNumber2 )
        break;
    case '+':    
        alert(userNumber1 +userNumber2 )
        break; 
    case '-':    
        alert(userNumber1 -userNumber2 )
        break;  
}

//number3

let visitorAge = Number(prompt('How old are you?'));
const isWithAdult = confirm('Are you with adult?');

if((visitorAge >= 12 && visitorAge < 80 )||(visitorAge >=60 && visitorAge <=80)){
    let parentPermission = confirm('Do you have permission?');

    if(parentPermission){
      alert('Access is allowed')
    }else if(visitorAge >=18 || visitorAge<=60){
      alert('Entry allowed');
   }else if(visitorAge > 12 & visitorAge<18 || visitorAge > 60 & visitorAge<80){
    alert('Entry allowed');
  }else{
    alert('Entry is not allowed')
  }
} else if(visitorAge <12 || visitorAge > 80){
  alert('Entry is not allowed')
} else if(visitorAge >=18 && visitorAge <=60){
  alert('Entry allowed')
} else{
  alert('Entry is not allowed')
}