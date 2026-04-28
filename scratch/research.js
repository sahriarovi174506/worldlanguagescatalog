const fs = require('fs');
const path = require('path');

const matchPx = /(\d+(?:\.\d+)?)px/g;
const matchRem = /(\d+(?:\.\d+)?)rem/g;

function scanDir(dir) {
    const files = fs.readdirSync(dir);
    for (let f of files) {
        const full = path.join(dir, f);
        if (fs.statSync(full).isDirectory()) {
            if (f !== 'scratch' && f !== '.git' && f !== 'node_modules' && f !== 'data' && f !== 'img') {
                scanDir(full);
            }
        } else if (f.endsWith('.css') || f.endsWith('.html') || f.endsWith('.js')) {
            const content = fs.readFileSync(full, 'utf8');
            const lines = content.split('\n');
            let hasMatch = false;
            lines.forEach((line, i) => {
                const pxMatches = [...line.matchAll(matchPx)];
                const remMatches = [...line.matchAll(matchRem)];
                if (pxMatches.length > 0 || remMatches.length > 0) {
                    if (!hasMatch) {
                        console.log(`\n--- ${full} ---`);
                        hasMatch = true;
                    }
                    console.log(`[${i+1}] ${line.trim()}`);
                }
            });
        }
    }
}

scanDir(process.cwd());
