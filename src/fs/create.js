const fs = require('fs');
const path = require('path');


const create = async () => {
    fs.writeFile(
        path.join(__dirname, 'files', 'fresh.txt'),
        'I am fresh and young',
        (err) => {
            // if file already exists Error with message FS operation failed must be thrown)
            if (err) throw err;
            console.log('FS operation failed');
        }
    )
};

await create();