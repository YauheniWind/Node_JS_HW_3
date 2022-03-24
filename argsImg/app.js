const fs = require('fs');
const path = require('path');
const process = require('process');
const sharp = require('sharp');


const imagePathName = fs.readdirSync(process.argv[2])
    .map(imageName => {
        return path.resolve(process.argv[2], imageName)
    })

imagePathName.forEach((inputImagePath) => {
    const imageContent = fs.readFileSync(inputImagePath)
    const parsed = path.parse(inputImagePath)
    if (parsed.ext === '.jpeg' || parsed.ext === '.jpg' || parsed.ext === '.png') {
        const target = path.resolve(process.argv[3], `${parsed.name}_${Math.random()}_${parsed.ext}`)
        const imageWidth = Number(process.argv[4]) || 40
        const imageHeight = Number(process.argv[5]) || 40

        sharp(imageContent)
            .resize(imageWidth, imageHeight)
            .toFile(target, (err, info) => {
                console.log(err, info)
            });
    } else {
        console.log('Is not correct extname', parsed.ext)
    }
})