const parseArgs = () => {
     const args = process.argv.slice(2).map((propName, index, array)=>{
        if (propName.startsWith('--')) {
            const argLine = `${propName.slice(2)} is ${array[index + 1]}`;
            return argLine
    }})
    console.log(args);
};


parseArgs();