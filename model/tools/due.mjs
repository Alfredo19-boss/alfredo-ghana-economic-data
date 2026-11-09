// Exit 0 when the yearly file is missing or more than 20 hours old.
import fs from 'fs';
try{const d=JSON.parse(fs.readFileSync(process.argv[2]));process.exit(Date.now()-Date.parse(d.fetchedAt)>20*3600e3?0:1)}catch(_){process.exit(0)}
