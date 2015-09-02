function check(){

    var value=prompt("Enter the number:")


    if(value>100){

        alert("Greater than 100");

    }else{

        alert("Less than 100");
    }

}
function convertToCelsius(){

    var fahrenheit=prompt("Enter the temperature in Fahrenheit");

    var celsius=(fahrenheit-32)*5/9;

    alert(fahrenheit+" Fahrenheit is equal to"+celsius+" Celsius");
}

function convertToFahrenheit(){

    var celsius=prompt("Enter the temperature in Celsius");

    var fahrenheit=celsius*9/5+32;

    alert(celsius+" Celsius is equal to"+fahrenheit+" Fahrenheit");
}

function multiplication(){

    var number1=prompt("Enter the First Number");

    var number2=prompt("Enter the Second Number");

    var mul=(number1*number2)

    alert("Multiplication of"+number1+" and "+number2+" is "+mul);
}

function division(){

    var number1=prompt("Enter the First Number");

    var number2=prompt("Enter the Second Number");

    if(number2==0){

        alert("Number 2 Can Not Be Zero");
        return false;
    }


    var div=(number1/number2)

    alert("Division of"+number1+" and "+number2+" is "+div);
}

function calculatePosition(){

    var marks1=prompt("Enter the Marks of Subject I");
    var marks2=prompt("Enter the Marks of Subject II");
    var marks3=prompt("Enter the Marks of Subject III");

    var total=parseFloat(marks1)+parseFloat(marks2)+parseFloat(marks3);
    var percentage=(total/300)*100;//Assuming the total marks for each subject is 100
    alert("Your Percentage is"+percentage+"!");
    if(percentage>=80 && percentage<=100){
        alert(" You Got the distinction");
    }else if(percentage>=60 && percentage<80){
        alert(" You Got the First Division");
    }else if(percentage>=40 && percentage<60){
        alert(" You Got the Second Division")
    }else if(percentage>=0 && percentage<40){
        alert(" Fail");
    }else{
        alert(" Invalid Subject Marks");
    }
}

function counter(){
    var bCount=0;

    var gCount=0;
    do{
        var char=prompt("Enter the character");
        char=char.toLowerCase();

        if(char=='b')
        {
            bCount++;
        }else if(char=='g'){
            gCount++;
        }else{
            continue;
        }

    }while(char!='x');

    alert("B-Count is "+bCount+" and the G-Count is "+gCount);
}

