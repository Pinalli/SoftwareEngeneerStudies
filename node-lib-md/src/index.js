//File System
import fs from 'fs'
import chalk from 'chalk';

function extractLinks(text) {
    const regex = /\[([^[\]]*?])\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capture = [...text.matchAll(regex)]; //matchAll return an iterator (... spread operator to convert to array)
    const result = capture.map(item => ({ [item[1]]: item[2] }))
    return result.length !== 0 ? result : 'No links found';
}

function treatError(error) {
    console.log(error)
    throw new Error(chalk.red(error.code, 'No such file or directory'));
}
// async await
async function getFile(pathFile) {
    try {
        const encoding = 'utf8';
        const text = await fs.promises.readFile(pathFile, encoding);
        return extractLinks(text);
    }
    catch (error) {
        treatError(error);
    }
}

export default getFile

//getFile('./files/');


// promises with .then
// function getFile(pathFile) {
//     const encoding = 'utf8';

//     fs.promisses
//         .readFile(pathFile, encoding) //return a promise
//         .then((text) => console.log(chalk.green(text)))//then is a promise
//         .catch(treatError)           //or  .catch((error) => treatError(error));
// }


// function getFile(pathFile) {
//     const encoding = 'utf8';
//     fs.readFile(pathFile, encoding, (error, text) => {
//         if (error) {
//             treatError(error);
//         }
//         console.log(chalk.green(text));
//     })
// }




