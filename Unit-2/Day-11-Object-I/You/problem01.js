for (let floor = 1; floor <= 4; floor++) {
  for (let room = 1; room <= 3; room++) {
    if (floor == 2) {
      break
    } else {
      console.log(floor + "-" + room);
    }
  }
}
