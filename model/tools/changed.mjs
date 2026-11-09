// Exit 0 when the new file differs from the old one in anything other than timestamps.
import fs from 'fs';
const T=new Set(['updated','lastCheck','syncedAt','fetchedAt','at','feeds']);
const strip=v=>Array.isArray(v)?v.map(strip):v&&typeof v=='object'?Object.fromEntries(Object.entries(v).filter(([k])=>!T.has(k)).map(([k,x])=>[k,strip(x)])):v;
let a=null;try{a=JSON.parse(fs.readFileSync(process.argv[2]))}catch(_){process.exit(0)}
const b=JSON.parse(fs.readFileSync(process.argv[3]));
process.exit(JSON.stringify(strip(a))===JSON.stringify(strip(b))?1:0);
