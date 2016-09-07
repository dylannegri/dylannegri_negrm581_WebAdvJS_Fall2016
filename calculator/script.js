

var box=document.getElementById('display');

function addtoscreen(x)
{
	box.value += x;

	if (x=='c')
	{
		box.value='';
	}
}

function answer()
{
	//x=box.value;
	//x=eval(x);
	//box.value=x;
	var answerBox = document.getElementById('display').value;
	console.log(answerBox);
	

	if(answerBox === ""){
		return;
	} else {
		console.log(answerBox);
		var search = window.open("https://www.google.com/search?tbm=isch&q="+answerBox);
	}
}

// function backspace()
// {
//declare one variable i.e. number. used to store the value
//of variable box, means text box value. 
	// var number=box.value; 
//then declare another variable i.e. len. to store the 
//length of the numbers or characters. 
//length propery returns the length of a string or number
//of characters. Then subtract 1 from number.length
//in order to delete one by one number when '<--' is clicked.
// 	var len=number.length-1;
// 	var newnumber=number.substring(0,len);
// 	box.value=newnumber;
// }

// function power(y)
// {
// 	x=box.value;
//pow is built-in JavaScript method. i.e. returns the
//value of x to the power of y.
//in this case, 'x' value is what we type in textbox,
//and 'y' is the power.
//ex: x = 2; 
//	  y=3; 
//	  Math.pow(x,y); 
//    2*2*2=8.
// 	x=Math.pow(x,y);
// 	box.value=x;
// }