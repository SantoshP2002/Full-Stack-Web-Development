let str = ["madhav", "nagesh", "sanket", "ganesh", "me"];

let char_count = 0;

for(let i=0; i<str.length; i++){
    char_count = char_count + str[i].length;
}

console.log(char_count);