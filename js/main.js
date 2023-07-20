var a=parseInt(prompt("Enter First Value"));
var operator=prompt("Enter operator");
var b=parseInt(prompt("Enter Second Value"));
var c;
switch (operator){
	case"+":c=a+b;
	document.write(c);
	break;
	
	case"-":c=a-b;
	document.write(c);
	break;
	
	case"*":c=a*b;
	document.write(c);
	break;
	
	case"/":c=a/b;
	document.write(c);
	break;
}