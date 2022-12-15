import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const list = async () => {
    try {
        console.log(await readdir(`${__dirname}/files`))
    } catch {
        throw new Error('FS operation failed');
    }

};

await list();