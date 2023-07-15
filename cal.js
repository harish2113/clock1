var a = parseInt(prompt("Enter first number"));
var b = parseInt(prompt("Enter the Second Number"));
var op = prompt("Enter the Operator");

switch(op)
{
    case '+' :
        document.getElementById("res").textContent=(a+b);break;
    case '-' :
        document.getElementById("res").textContent=(a-b);break;            
    case '*' :
        document.getElementById("res").textContent=(a*b);break;                
    case '/' :
        document.getElementById("res").textContent=(a/b);break;
        
}


