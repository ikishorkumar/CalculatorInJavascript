function getNumber(num) {
    var number = num;
    // Targeting Element
    var result = document.getElementById("result");
    result.value += number;
}
function clearResult() {
    // Targeting Element
    var result = document.getElementById("result");
    result.value = "";
}

function calulate(num) {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}


function squareNum() {
    var result = document.getElementById("result");
    var sqr= Math.pow(result.value,2);
    sqr = parseInt(sqr);
    result.value = sqr;
}
function OneDivNum(number) {
    var result = document.getElementById("result");
    
    var res = 1/(result.value);
    // sqr = parseInt(res);
    result.value = res;
}
function twoRadNum(number) {
    var result = document.getElementById("result");
    
    var res = 1/(result.value);
    // sqr = parseInt(res);
    result.value = res;
}