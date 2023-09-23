// ******************************* STRING METHOD ****************************************

const fullName = "Malvi-Bhavesh-P"

console.log(fullName.length)
console.log(fullName.indexOf('v'));

const indexElement = "    Bhavesh"
console.log(fullName.indexOf('v'));

console.log(indexElement.substring(0,4));
console.log(indexElement.slice(-8,5));
console.log(indexElement.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'))// find to diffrent value is exitst then yes other no.

console.log(fullName.split('-'))


const fname = "spider"
const sname = "-"
const tname = "man"

console.log(fname.__proto__);

console.log(fname.valueOf(''));

