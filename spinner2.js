const str = "|/-\\|/-\\|";
let counter = 0;
for (let char of str) {
  setTimeout( () => {
    process.stdout.write('\r' + char + "   ");
  }, counter += 600);
};