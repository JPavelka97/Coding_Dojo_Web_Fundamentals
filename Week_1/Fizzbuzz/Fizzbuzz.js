function FizzBuzz(target) {
    for(var i=1; i<=target; i++) {
        if(i%5==0){
            if(i%3==0){
                console.log("FizzBuzz");
            }
            else{
                console.log("Buzz");
            }
        }
        else if(i%3==0){
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}

FizzBuzz(100)

