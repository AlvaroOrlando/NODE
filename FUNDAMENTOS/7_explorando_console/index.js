
//mais de um valor
const x = 10;
const y = 'Álvaro';
const z = [1,2];

console.log(x,y,z);

//contagem de impressões
for(let i = 0; i < 5; i++){
console.count(`O valor de x é: ${x}, contagem`);
};

//variável entre string (alternativa ao template string)
console.log('O nome é %s ele é programador', y);

//limpar o console
setTimeout(()=>{
    console.clear()
    console.log('O nome é %s ele é programador', y);
},2000);