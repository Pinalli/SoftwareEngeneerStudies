import chalk from 'chalk'
import fs from 'fs'
import getFile from './index.js';
import validateList from './http-validacao.js'

const path = process.argv;

function printList(validate, result, identifier = '') {
    if (validate) {
        console.log(
            chalk.yellow('Validate list'),
            chalk.black.bgGreen(identifier),
            validateList(result));
    } else {
        console.log(
            chalk.yellow('Linked list'),
            chalk.black.bgGreen(identifier),
            result);
    }
}

async function proecessText(args) {

    const path = args[2]
    const validate = args[3] === '--validate' ? true : false;

    try {
        fs.lstatSync(path)
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(chalk.red(error.code, 'No such file or directory'));
            return;
        }
    }

    if (fs.lstatSync(path).isFile()) {
        const result = await getFile(path)
        printList(validate, result)
    } else if
        (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (fileName) => {
            const list = await getFile(`${path}/${fileName}`)
            printList(validate, list, fileName)
        })
        //console.log(files)
    }
}
proecessText(path);