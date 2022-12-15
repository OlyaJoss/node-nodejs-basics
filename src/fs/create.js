import { writeFile } from 'fs/promises';
import { dirname } from 'path';
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    try {
        await writeFile(
            path.join(__dirname, 'files', 'fresh.txt'),
            'I am fresh and young', { flag: 'wx' }

        )
    } catch (err) {
        console.log('FS operation failed');
        throw new Error('FS operation failed');
    }

};

await create();