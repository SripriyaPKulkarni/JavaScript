const flag=true

if(flag){

    console.log("Condition satisfied")
}else{
    console.log("Condition not satisfied")
}

let i=0
while(i>10){
    i++
    console.log(i)
}

//do while loop
do{
    i++
}while(i<10);
console.log(i)

//for loop
//from 1 to 10 , give me common multiple of 10
let n=0;
for(let k=1;k<=100;k++){
    if(k%2==0 && k%5==0){
        n++
        console.log(k)
        if(n==3)
        break
    }
    
}



