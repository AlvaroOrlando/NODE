const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
    name: 'p1', message: 'Qual a primeira nota?'
    },
    {
    name: 'p2', message: 'Qual a segunda nota?'
    },
    ]).then((answers) => {
        const media = (parseFloat(answers.p1) + parseFloat(answers.p2)) / 2
        if(media < 5){
            console.log(chalk.red('Reprovado!'))
            console.log(`A média das notas é ${media}`)
        }else{
            console.log(chalk.green('Aprovado!'))
            console.log(`A média das notas é ${media}`)
        }
    })
    .catch(err => console.log(err));