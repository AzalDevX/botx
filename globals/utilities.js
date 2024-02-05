// utilities.js
const path = require('path');
const dotenv = require('dotenv');

const env = process.env.NODE_ENV === "development" ? "D" : "P";

async function log(...args) {
    function warning() { }

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

    // Espaciado uniforme
    const paddedEnv = env.padEnd(1);
    const paddedCallingModule = callingModule.padEnd(10);

    console.log(`${paddedEnv} ~ [${actualTime}] - ${paddedCallingModule} | ${formattedArgs}`);
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
