const valueInputSum = document.getElementById("btn-sumar");
valueInputSum.addEventListener("click", function(){
    let valueSum1 = document.querySelector("#valor1").value;
    valueSum1 = parseInt(valueSum1);
    let valueSum2 = document.querySelector("#valor2").value;
    valueSum2 = parseInt(valueSum2);
    let resultSum = valueSum1 + valueSum2;
    document.querySelector(".resultado").innerHTML = resultSum;
 
});

const valueInputSubtract = document.getElementById("btn-restar");
valueInputSubtract.addEventListener("click", function(){
    let valueSubtract1 = document.querySelector("#valor1").value;
    valueSubtract1 = parseInt(valueSubtract1);
    let valueSubtract2 = document.querySelector("#valor2").value;
    valueSubtract2 = parseInt(valueSubtract2);
    let resultSubtract = valueSubtract1 - valueSubtract2;

    if (resultSubtract < 0) {
        let resultSubtractZero = 0;
        document.querySelector(".resultado").innerHTML = resultSubtractZero;

    } else {
        document.querySelector(".resultado").innerHTML = resultSubtract;
  
    }
});