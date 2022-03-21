var clicks = 0;
var a = document.getElementById(`submit`);
var inpt = document.getElementById(`number`);
var b = document.getElementById(`multiply`);
var c = document.getElementById(`filter`)
let myArray = [];
document.getElementById(`submit`).disabled = true;
document.getElementById(`multiply`).disabled = true;
document.getElementById(`filter`).disabled = true;
document.getElementById(`number`).value = 0;

inpt.onclick = function(){
    document.getElementById(`submit`).disabled = false;
}

a.onclick = function(){
    let number = parseInt(document.getElementById(`number`).value);
    const result = clicks < 5 ? (clicks = clicks + 1, myArray.push(number), document.getElementById(`returnArray`).innerHTML = `Chosen Array: ` + myArray) : (document.getElementById(`multiply`).disabled = false, document.getElementById(`submit`).disabled = true, document.getElementById(`filter`).disabled = false);
    console.log(result);
}

b.onclick = function(){
    const map1 = myArray.map(x => x * 2);
    document.getElementById(`returnMultiply`).innerHTML = `Multiply By Two: ` + map1;
    document.getElementById(`multiply`).disabled = true;
}

c.onclick = function(){
    const filtration = myArray.filter(x => x < 3);
    document.getElementById(`returnFilter`).innerHTML = `Array Numbers Below 3: ` + filtration;
    document.getElementById(`filter`).disabled = true;
}
