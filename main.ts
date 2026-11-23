import{mkdirSync as A,readdirSync as B,readFileSync as C,writeFileSync as D}from'node:fs';
import{join as J}from'node:path';
const T="0Aq46:;?!!!!!!!!999999959995999!999!!!!!!!!!!!!!PTTP0!!!!!!!!!!!58!!!!!!!!!!!!!!4414";
function run(p,q){
const W=new Int32Array(256),K=new Int32Array(64),M=new Int32Array(256);let s=0,c=0;
const o=new Uint8Array(65536);let l=0,g=0,n=0,t=0;
const d=x=>({out:o.slice(0,l),code:x});
for(;;){
if(t===1e6)return d(10);
if(n<0||n>=p.length)return d(9);
const e=p[n],v=T.charCodeAt(e)-48;
if(e>83||v<0)return d(5);
const m=v>>4,po=(v>>2)&3,pu=v&3;
if(n+m>=p.length)return d(9);
t++;
const x=n+1+m;
if(s<po)return d(2);
if(s-po+pu>256)return d(3);
n=x;
if(e===0)return d(0);
if(e===1){W[s++]=p[x-1]<<24>>24;continue;}
if(e===2){W[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;continue;}
if(e===3){s--;continue;}
if(e===4){W[s]=W[s-1];s++;continue;}
if(e===5){const a=W[s-1];W[s-1]=W[s-2];W[s-2]=a;continue;}
if(e===6){W[s]=W[s-2];s++;continue;}
if(e===7){const a=W[s-3];W[s-3]=W[s-2];W[s-2]=W[s-1];W[s-1]=a;continue;}
if(e===23){W[s-1]=-W[s-1]|0;continue;}
if(e===27){W[s-1]=~W[s-1];continue;}
if(e>=16&&e<35){
const b=W[s-1],a=W[s-2];
if(e>18&&e<23&&b===0)return d(4);
const k=e<24?e-16:e<28?e-17:e<32?e-18:e-19;
W[s-2]=[a+b|0,a-b|0,Math.imul(a,b),a===-2147483648&&b===-1?a:a/b|0,b===-1?0:a%b|0,((a>>>0)/(b>>>0))|0,(a>>>0)%(b>>>0)|0,a&b,a|b,a^b,a<<(b&31),a>>(b&31),a>>>(b&31)|0,a===b?1:0,a<b?1:0,(a>>>0)<(b>>>0)?1:0][k];
s--;continue;}
if(e===48){const r=(p[x-2]|p[x-1]<<8)<<16>>16;n=x+r;continue;}
if(e===49||e===50){const r=(p[x-2]|p[x-1]<<8)<<16>>16,y=W[--s];if((e===49)===(y===0))n=x+r;continue;}
if(e===51){if(c===64)return d(7);K[c++]=x;n=p[x-2]|p[x-1]<<8;continue;}
if(e===52){if(c===0)return d(8);n=K[--c];continue;}
if(e===64){const a=W[s-1];if(a<0||a>255)return d(6);W[s-1]=M[a];continue;}
if(e===65){const a=W[s-1],y=W[s-2];if(a<0||a>255)return d(6);s-=2;M[a]=y;continue;}
if(e===80){const y=Buffer.from(String(W[s-1]));if(l+y.length>65536)return d(11);s--;o.set(y,l);l+=y.length;continue;}
if(e===81){if(l+1>65536)return d(11);o[l++]=W[--s]&255;continue;}
if(e===82){W[s++]=g<q.length?q[g++]:-1;continue;}
if(e===83)return d(W[--s]&255);
return d(5);
}
}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const id of B(I).sort()){const r=run(C(J(I,id,'program.bin')),C(J(I,id,'input.bin')));A(J(O,id),{recursive:true});D(J(O,id,'stdout.bin'),r.out);D(J(O,id,'exit.txt'),r.code+'\n');}
