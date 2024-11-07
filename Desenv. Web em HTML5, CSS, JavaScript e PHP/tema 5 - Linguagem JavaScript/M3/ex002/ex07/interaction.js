const vetor = [1,2,3,4,5,6,7]
console.log(vetor) //1,2,3,4,5,6,7
vetor.splice(2,3)
console.log(vetor); //1,2,6,7
vetor.splice(2,0,'x','x')
console.log(vetor); //1,2,x,x,6,7