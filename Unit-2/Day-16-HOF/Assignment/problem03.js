const arr = [3, 4, 5, 6, 7];

arr.forEach((num, index) => {
    if (num % 2 !== 0) {
        process.stdout.write(num.toString());
        if (index < arr.length - 2) {
            process.stdout.write(' - ');
        }
    }
});
