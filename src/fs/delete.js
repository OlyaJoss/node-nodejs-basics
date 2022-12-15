import { rm } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    try {
        await rm(`${__dirname}/files/fileToRemove.txt`)
    } catch {
        throw new Error('FS operation failed');
    }
};

await remove();