import { cp } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    try {
        await cp(`${__dirname}/files`, `${__dirname}/files_copy`,
            { recursive: true, errorOnExist: true, force: false })
    } catch {
        throw new Error('FS operation failed');
    }
};

copy();
