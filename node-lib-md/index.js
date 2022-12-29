//File System
import fs from 'fs'
import chalk from 'chalk';

function treatError(error) {
    console.log(error)
    throw new Error(chalk.red(error.code, 'No such file or directory'));
}

// async await
async function getFile(pathFile) {
    try {
        const encoding = 'utf8';
        const data = await fs.promises
            .readFile(pathFile, encoding);
        console.log(chalk.green(data));
    }
    catch (error) {
        treatError(error);
    }
}

getFile('./files/texto.md');
//getFile('./files/');

//\[[^[\]]*?] //regex to find links
//\(https?:\/\/[^\s?#.].[^\s]*\) 

// promises with .then
// function getFile(pathFile) {
//     const encoding = 'utf8';

//     fs.promisses
//         .readFile(pathFile, encoding) //return a promise
//         .then((data) => console.log(chalk.green(data)))//then is a promise
//         .catch(treatError)           //or  .catch((error) => treatError(error));
// }


// function getFile(pathFile) {
//     const encoding = 'utf8';
//     fs.readFile(pathFile, encoding, (error, data) => {
//         if (error) {
//             treatError(error);
//         }
//         console.log(chalk.green(data));
//     })
// }




