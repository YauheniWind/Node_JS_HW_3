const fs = require('fs');
const os = require('os');
const process = require('process');

function writeInfoScript(nameFile) {
    const myOS = os.platform()
    const myName = os.userInfo()['username']
    const numberOFCorse = os.cpus().length
    const freeSpace = Math.floor(os.freemem() / 1024)
    const myVersion = os.version()
    const myGHz = os.cpus()[0]['model'].split(' ')[5]

    const newLineChar = process.platform === 'darwin' ? '\r\n' : '\n';


    fs.writeFileSync(nameFile, myOS)
    fs.appendFileSync(nameFile, `${newLineChar}${myName}`)
    fs.appendFileSync(nameFile, `${newLineChar}${numberOFCorse.toString()}`)
    fs.appendFileSync(nameFile, `${newLineChar}${freeSpace.toString()}`)
    fs.appendFileSync(nameFile, `${newLineChar}${myVersion}`)
    fs.appendFileSync(nameFile, `${newLineChar}${myGHz}`)
}

writeInfoScript('info.txt')