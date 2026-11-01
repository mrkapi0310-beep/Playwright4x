let n=5;
let a=0;
let b=1;
let c=0;
console.log(a);
console.log(b);
for(let i=0; i<n-2; i++)
{
    c=a+b;
    console.log(c);
    a=b;
    b=c;
}