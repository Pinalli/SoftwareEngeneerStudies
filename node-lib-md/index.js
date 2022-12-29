import fs from 'fs'
import chalk from 'chalk';

function getFile(pathFile) {
    const encoding = 'utf8';
    fs.readFile(pathFile, encoding, (_, data) => {
        console.log(chalk.green(data));
    })
}
getFile('./files/texto.md');
