import { rename as renameFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    try {
        await renameFile(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`)
    } catch (err) {
        throw new Error('FS operation failed');
    }

};

await rename();

// https://www.celitel.info/klad/nhelp/helpbat.php?dcmd=rename инфо об ошибке, если файл уже существует