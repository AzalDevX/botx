// utilities.js
const path = require('path');

async function log(...args) {
    const date = new Date();
    
    const options = { timeZone: 'Europe/Madrid', hour12: false };
    const actualTime = date.toLocaleTimeString('es-ES', options); // hh:mm:ss

    const callingModule = getCallingModuleName();

    let formattedArgs;

    if (args.length === 1 && typeof args[0] === 'string') {
        formattedArgs = args[0];
    } else {
        formattedArgs = args.map(arg => `${arg[0]}: ${arg[1]}`).join(' | ');
    }

    console.log(`[${callingModule}] - ${actualTime} | ${formattedArgs}`);
}

function getCallingModuleName() {
    const stack = new Error().stack.split('\n').slice(2);
    for (const call of stack) {
        const match = call.match(/^\s*at\s+(.*):\d+:\d+\)$/);
        if (match && !match[1].includes('utilities.js')) {
            return path.basename(match[1]);
        }
    }
    return 'unknown';
}

module.exports = { log, getCallingModuleName };