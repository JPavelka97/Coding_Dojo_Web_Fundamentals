function Factorial(highvalue){
    var product = 1;
    for(i=1; i<=highvalue; i++){
        product *= i;
    }
    console.log(product);
}

Factorial(12)