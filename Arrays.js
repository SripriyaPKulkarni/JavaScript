var marks=Array(6)

var marks=new Array(20,30,40,50,60,70)

var marks=[20,30,40,50,60,70]
console.log(marks)

subMarks=marks.slice(2,5)
console.log(subMarks)

console.log(marks[2])//40

marks[1]=14

console.log(marks)
console.log(marks.length)

//append new element to array
marks.push(80)

console.log(marks)

//delete an element 
marks.pop()

console.log(marks)

//add in the beginning of teh array
marks.unshift(12)
console.log(marks)

console.log(marks.indexOf(70))

//to check whether an element is found or not

console.log(marks.includes(120))

//sum of array
var sum=0
for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}
console.log(sum)

//reduce filter map
let total=marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

//create new array of even scores
var scores=[12,13,14,15,16]
var evenScores=[]
for(let i=0;i<scores.length;i++){
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

//filtering the data
var newEven=scores.filter(score=>score%2==0)
console.log(newEven)


