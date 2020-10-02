//Using a constructor to create object called tests with parameters test1 and test2.
function tests(test1,test2)
{
// Using a ternary operator to output greater value from test1 or test2.
let greater = test2>test1?test1:test2
//Assigning a return value of the function.
return greater

}

//Another constructor for coursewrork with one parameter.
function coursework(cswork) {
    //Assigning object/variable coursework to the value cswork and invoked tests function.
    let coursework = cswork + tests(80, 80)

    console.log(coursework)
    //Returns values that were assigned to coursework but causes error as a closing curly bracket is expected after it.
    return coursework
}
 

//Same as statement on  line 11.
function avg(a)
{

//Assigning avg variable to coursework divided by the value of the parameter a.
let avg =coursework(90)/a

//Returns result of above calculation.
return avg

}

//Same as statement on  line 11.
function crsmark(a)
{
//Assigning multiplicatoin of the results of above calculations to exm variable. 
let exm = avg(2)*(a/100)
//Returns value assigned to the exm above.
 return exm
}

//Same as statement on line 11.

function exam(a)
{

let fexam = (60/100)*a

//Returns value assigned to the fexam above.
return fexam

}

//Same as statement on line 11.

function fnal()
{

//Assigning the sum of the two variables exam and csmark multiplied by 75 and 40 respectively to fmark variable.

let fmark = exam(75)+crsmark(40)
console.log(fmark)

}

//Invoking the method fnal.

fnal()
/**
When the curly bracket error is rectified the output is rectified the coursework object can finally be accessed.
This code block/file outputs the values that were assigned earlier to be printed out to the console (170 and 79).
**/
