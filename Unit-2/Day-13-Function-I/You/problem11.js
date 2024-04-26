// Convert lowercase to uppercase and uppercase to lowercase;


// output = mY NAME IS sANTOSH pAWAR

function splitCase(char) {
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for(let i=0; i<lower.length; i++){
    if(lower[i]==char){
        return upper[i];
    }
    else if(upper[i]==char){
        return lower[i];
    }
  }
  return char;
}

let str = "My name is Santosh Pawar";

let bag = "";
for(let i=0; i<str.length; i++){
    let returnedChar = splitCase(str[i])
    bag = bag + returnedChar ;
}
console.log(bag);