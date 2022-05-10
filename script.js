//clear values
    function clearScreen() {
    document.getElementById("result").value = "";
   }
   
//display values
   function display(value) {
    document.getElementById("result").value += value;
   }

//evaluates the expression and return result
   function calculate() {
    let p = document.getElementById("result").value;
    let q = eval(p);
    document.getElementById("result").value = q;
   }