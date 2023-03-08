function Print_Odds(highnumber){
    for(var i=1; i<=highnumber; i++){
        if(i%2==1){
            console.log(i)
        }
    }
}

Print_Odds(20)