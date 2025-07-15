import * as fs from 'fs';
import * as path from 'path';

let basePath: string;

if (__dirname.includes('dist')) {
  basePath = path.join(__dirname, 'imageFiles');
} else {
  basePath = path.join(__dirname, 'imageRepo', 'imageFiles');
}

console.log('Current __dirname:', __dirname);

const masterImageMap: Map<string, string> = new Map()

function loadImageMap() {
    const allImageFiles = fs.readdirSync(basePath,{withFileTypes: true});

    allImageFiles.forEach(dirent => {
        const fileType = path.extname(dirent.name).toLowerCase()
        if(dirent.isFile() && (fileType === '.bmp' || fileType === '.jpg' || fileType === '.jpeg' )) {
            masterImageMap.set(dirent.name, path.join(basePath, dirent.name))
        }
    });

    console.log('Loaded images:', [...masterImageMap.keys()]);
}

export {
    loadImageMap,
    masterImageMap
}

