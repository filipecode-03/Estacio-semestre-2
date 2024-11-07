var alunos = ['Alex', 'Anna', 'João']
alunos.splice(3,0,'Helena')
console.log(alunos); // imprimirá 'Alex', 'Anna', 'João', 'Helena'

var alunos = ['Alex', 'Anna', 'João']
alunos.splice(1,1,'Helena')
console.log(alunos);  //imprimirá 'Alex, 'Helena', 'João'