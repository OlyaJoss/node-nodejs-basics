import {sep, dirname } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;
// import './files/a.json' assert { type: 'json' }
// .then(()=> console.log('hiiiiiiiiiiiiiiiii', a));


    import('./files/a.json' assert { type: 'json' })
    .then((something) => {
       console.log(something);
    });

    
// if (random > 0.5) {
//     // import a from './files/a.json';
//     // console.log(`Release ${release()}`);
// } else {
//     unknownObject = require('./files/b.json');
// }

// console.log(`Release ${release()}`);
// console.log(`Version ${version()}`);
// console.log(`Path segment separator is "${path.sep}"`);

// console.log(`Path to current file is ${__filename}`);
// console.log(`Path to current directory is ${__dirname}`);

// const myServer = createServerHttp((_, res) => {
//     res.end('Request accepted');
// });

// const PORT = 3000;

// console.log(unknownObject);

// myServer.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//     console.log('To terminate it, use Ctrl+C combination');
// });

// module.exports = {
//     unknownObject,
//     myServer,
// };

