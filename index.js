const compute = require('./samples/calculator');
const towerOfHanoi = require('./samples/tower-of-hanoi');
const quickSort = require('./samples/quickSort');
const { cidrToIpRange, countIpsInCidr }  = require('./samples/cidr');

console.log("Performing calculations...");
const result1 = compute('+', 1, 2, 3); // result1 = 6
const result2 = compute('-', 10, 5, 2); // result2 = 3
const result3 = compute('*', 2, 3, 4); // result3 = 24
const result4 = compute('/', 10, 2); // result4 = 5
const result5 = compute('%', 20, 7, 4); // result5 = 2 

console.log(result1, result2, result3, result4, result5);

console.log("Solving Tower of Hanoi...");
towerOfHanoi(5, 'A', 'C', 'B');

console.log("Sorting array with QuickSort...");
let sortResult = quickSort([9, 5, 4, 0, 6, 3, 2, 1, 8, 7]);
console.log(sortResult);

sortResult = quickSort(['a', 'd', 'f', 'g', 'b', 'c', 'e']);
console.log(sortResult);


console.log("Converting CIDR to IP range...");
const cidr = '192.168.0.0/24';

const ipRange = cidrToIpRange(cidr);
console.log('ipRange: '+ ipRange);

const ipCount = countIpsInCidr(cidr);
console.log('ipCount: '+ ipCount);

// console.log("Converting CIDR to IP range...");
// console.log(countIpsInCidr('192.168.0.0/24')); // 256
// console.log(cidrToIpRange('192.168.0.0/30')); // ['192.168.0.0', '192.168.0.1', ..., '192.168.0.255']
