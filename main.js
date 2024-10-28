let id = 1;
let correct;
let btn1;
let btn2;
let btn3;
let btn4;
let btn1Order;
let btn2Order;
let btn3Order;
let btn4Order;


window.onload = (event) => {

btn1Order = Math.floor(Math.random()* 4) + 1;
btn2Order = Math.floor(Math.random()* 4) + 1;
btn3Order = Math.floor(Math.random()* 4) + 1;
btn4Order = Math.floor(Math.random()* 4) + 1;
btn1 = document.getElementById("a1");
btn2 = document.getElementById("a2");
btn3 = document.getElementById("a3");
btn4 = document.getElementById("a4");

btn1.style.order = btn1Order.toString();
btn2.style.order = btn2Order.toString();
btn3.style.order = btn3Order.toString();
btn4.style.order = btn4Order.toString();

    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        const dataInput = document.getElementById("json-data");
        let result = data.find(obj => obj.id === `Q${id}`);
        dataInput.innerHTML = result.q;
        btn1.innerText = result.a1[1];
        btn2.innerText = result.a2[1];
        btn3.innerText = result.a3[1];
        btn4.innerText = result.a4[1];
  });
}



function getData(newData){
btn1Order = Math.floor(Math.random()* 4) + 1;
btn2Order = Math.floor(Math.random()* 4) + 1;
btn3Order = Math.floor(Math.random()* 4) + 1;
btn4Order = Math.floor(Math.random()* 4) + 1;


btn1.style.order = btn1Order.toString();
btn2.style.order = btn2Order.toString();
btn3.style.order = btn3Order.toString();
btn4.style.order = btn4Order.toString();
    fetch('./data.json')
.then(res => res.json())
.then(data => {
    newData = data;
    const dataInput = document.getElementById("json-data");
    let result = newData.find(obj => obj.id === `Q${id}`);
    console.log(`Q${id}`)
    dataInput.innerHTML = result.q;
    btn1.innerText = result.a1[1];
    btn2.innerText = result.a2[1];
    btn3.innerText = result.a3[1];
    btn4.innerText = result.a4[1];
})
}


function wrongAnswer(){
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        let result = data.find(obj => obj.id === `Q${id}`);
        if(result.a1[0] === false || result.a2[0] === false || result.a3[0] === false){
            correct = false;
            console.log(result.a1[0]);
        }
      if(correct === false){
       alert("WRONG");
        }

    })
}

function correctAnswer(){
    fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        let result = data.find(obj => obj.id === `Q${id + 1}`);
        console.log(result.a1[0]);
        if (result.a4[0] === true){
          correct = true;
        }

        if (correct === true){
           alert("CORRECT!!");
           getData();
        }
        correct = false;
        id++;
    })
}