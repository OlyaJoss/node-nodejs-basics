import { dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname);

// Here’s how we solve the problem:

// import { fileURLToPath } from 'url'
// import { dirname } from 'path'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = dirname(__filename)

// console.log(__filename);
// console.log(__dirname);

// In Node.js:
// __filename: Returns the absolute path to the current file
// __dirname: Returns the absolute path to the parrent folder

// If you’re building a Node.js application with ES modules instead 
// of CommonJS modules (“import” instead of “require”, in simpler terms), 
// you have to do something before writing __filename and __direname in 
// your code.