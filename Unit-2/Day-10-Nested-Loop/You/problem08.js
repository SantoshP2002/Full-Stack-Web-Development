for (let hori = 1; hori <= 10; hori++) {
  let str = "";
  for (let verti = 1; verti <= 10; verti++) {
    if (hori == 1 || hori == 10) {
      str = str + "*";
    } else if (verti == 1 || verti == 10) {
      str = str + "*";
    } else {
      str = str + " ";
    }
  }
  console.log(str);
}
