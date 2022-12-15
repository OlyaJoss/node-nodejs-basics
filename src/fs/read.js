import { readFile } from 'fs/promises';
import { URL } from 'url';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {

    try {
        const filePath = new URL(`${__dirname}/files/fileToRead.txt`, import.meta.url);
        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);
    } catch {
        throw new Error('FS operation failed');
    }

};

await read();