const plantsFolder = './public/photos/plants/';
const fs = require('fs');
const titleCase = require('string-title-case');

let plants = [];

function removeFiletype(filename) {
    return filename.split('.')[0];
}

function removeNumbering(filename) {
    return filename.replace(/\w*\(\d*\)/, '');
}

fs.readdirSync(plantsFolder).forEach(filename => {
    const plantName = removeNumbering(titleCase(removeFiletype(filename), ['of', 'for', 'the', 'in', 'is']));
    if (!filename.startsWith('.')) {
        plants.push({
            name: plantName,
            filename: filename,
        });
    };
});

const json = JSON.stringify({plants: plants});

const js = "export default " + json;

fs.writeFileSync('./src/PlantPhotos.js', js, 'utf8');