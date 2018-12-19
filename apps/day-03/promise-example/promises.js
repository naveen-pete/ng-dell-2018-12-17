// 1. Withdraw money
// 2. Print my passbook
// 3. Apply for a loan

var p = new Promise((resolve, reject) => {
  console.log('Withdraw Start');
  setTimeout(() => {
    console.log('Withdraw Finish');
    resolve(100);
    // reject('No sufficient amount');
  }, 5000);
});

console.log('Apply loan');

p.then((amount) => {
  console.log('Print:', amount);
});

p.catch((msg) => {
  console.log('Failed:', msg);
});
