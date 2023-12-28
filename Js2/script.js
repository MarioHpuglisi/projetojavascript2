let students = [
    {
        name: "Romário",
        nota1: 5,
        nota2: 10,
    },
    {
        name: "Mirandinha",
        nota1: 3,
        nota2: 3,
    },
    {
        name: "Odvan",
        nota1: 1,
        nota2: 2,
    },
    {
        name: "Marcelinho Carioca",
        nota1: 10,
        nota2: 7,
    },
    {
        name: "Savio",
        nota1: 8,
        nota2: 7,
    }
]




function calculaMedia(nota1,nota2) {
    let media = (nota1 + nota2) / 2
    return media
    }
       
    
    for(let student of students){
        mediaIndividual = calculaMedia(student.nota1, student.nota2)
        let aprovadoOuNao = mediaIndividual < 7 ? 'Infelizmente não foi dessa vez. Estude mais' : 'Parabéns pela sua aprovação'
    
        alert(`A média de ${estudante.nomeDoEstudante} é ${mediaIndividual}.
    ${aprovadoOuNao}`)
    }   


//let student = prompt("Qual o seu nome?")
//let n1 = prompt("Insira a nota da primeira prova")
//let n2 = prompt("Insita a nota da segunda prova")

//let average = (Number(n1) + Number(n2)) / 2

//let result = average >= 7

//if (result) {
   // alert("Parabéns, " + student + "!\n Sua média foi de: " + average)
//} else{
   // alert("Não foi dessa vez, " + student + ".\n Sua médica foi de: " + average)
//}