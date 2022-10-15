const array = process.argv.slice(2);

array.sort(function(a, b) {
    return a - b;
  });

function print() {
    process.stdout.write('\x07');
}

for (const time of array) {
    if (time > 0 || typeof time === 'number') {
        setTimeout(print, time * 1000);
    } else {
        continue;
    }
}




