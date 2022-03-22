let clicks = 0;
let a = document.getElementById(`submit`);
let inpt = document.getElementById(`number`);
let b = document.getElementById(`multiply`);
let c = document.getElementById(`filter`);
let d = document.getElementById(`reduce`);
let myArray = [];
document.getElementById(`submit`).disabled = true;
document.getElementById(`multiply`).disabled = true;
document.getElementById(`filter`).disabled = true;
document.getElementById(`reduce`).disabled = true;
document.getElementById(`number`).value = 0;

inpt.onclick = function(){
    document.getElementById(`submit`).disabled = false;
}

a.onclick = function(){
    let number = parseInt(document.getElementById(`number`).value);
    const result = clicks < 5 ? (clicks = clicks + 1, myArray.push(number), document.getElementById(`returnArray`).innerHTML = `Chosen Array: ` + myArray) : undefined;
    const disable = clicks === 5 ? (a.disabled = true, document.getElementById(`multiply`).disabled = false, document.getElementById(`submit`).disabled = true, document.getElementById(`filter`).disabled = false, document.getElementById(`reduce`).disabled = false) : undefined;
}

b.onclick = function(){
    const map1 = myArray.map(x => x * 2);
    document.getElementById(`returnMultiply`).innerHTML = `Multiply By Two: ` + map1;
    document.getElementById(`multiply`).disabled = true;
}

c.onclick = function(){
    const filtration = myArray.filter(x => x < 3);
    document.getElementById(`returnFilter`).innerHTML = `List of Numbers Below 3: ` + filtration;
    document.getElementById(`filter`).disabled = true;
}

d.onclick = function(){
    const sum = myArray.reduce((starting, adding) => starting + adding, 0);
    document.getElementById(`returnReduce`).innerHTML = `Sum of Numbers: ` + sum;
    document.getElementById(`reduce`).disabled = true;
}
