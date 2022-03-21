var clicks = 0;
var a = document.getElementById(`submit`);
var inpt = document.getElementById(`number`);
var b = document.getElementById(`multiply`);
let myArray = [];
document.getElementById(`submit`).disabled = true;
document.getElementById(`multiply`).disabled = true;


inpt.onclick = function(){
    document.getElementById(`submit`).disabled = false;
}

a.onclick = function(){
    let number = parseInt(document.getElementById(`number`).value);
    if (clicks < 5){
        clicks = clicks + 1;
        const result = number < 3 ? "Less than 3" : "Greater than or equal to 3";
        console.log(result);
        myArray.push(number);
        console.log(myArray);
        document.getElementById(`returnArray`).innerHTML = `Chosen Array: ` + myArray;
    }
    else if (clicks = 5){
        document.getElementById(`multiply`).disabled = false;
        document.getElementById(`submit`).disabled = true;
        return;
    }    
}

b.onclick = function(){
    const map1 = myArray.map(x => x * 2);
    document.getElementById(`returnMultiply`).innerHTML = `Multiply by two: ` + map1;
}

