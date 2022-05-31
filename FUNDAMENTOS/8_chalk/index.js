const chalk = require('chalk');

const nota = 6;

console.log(chalk.green.bold(`APROVADO! A nota do aluno foi ${nota}`));

if(nota >= 7){
    console.log(chalk.green.bold.bgWhite(`APROVADO! A nota do aluno foi ${nota}`));
}else{
    console.log(chalk.red.bold.bgWhite(`REPROVADO! A nota do aluno foi ${nota}`));
}
