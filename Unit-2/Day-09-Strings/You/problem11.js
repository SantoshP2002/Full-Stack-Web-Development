let str = ["goku", "nami", "google", "gona", "amita", "govind"];

count = 0;

for (let i = 0; i < str.length; i++) {
    let name = str[i];
  if (name[0] == "g") {
    count++;
    console.log(str[i]);
  }
}

console.log(count);
