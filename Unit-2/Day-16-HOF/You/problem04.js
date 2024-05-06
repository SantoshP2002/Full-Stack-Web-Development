let dress = function () {
  console.log("i bought a new dress");
};

function party(x, y) {
    y();
  console.log(x, "i am going for a party");
}

party("yes", dress);
