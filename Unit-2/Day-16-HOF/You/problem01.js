let obj = {
  name: "santosh",
  age: 22,
  place: "Nanded",
  marks: {
    eng: 100,
    phy: 101,
    che: 102,
  },
  submit: function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.place);
    console.log(this.marks.eng);
    console.log(this.marks.phy);
    console.log(this.marks.che);
  },
  reset: function () {
    this.name = "";
    this.age = "";
    this.place = "";
    this.marks.eng = "";
    this.marks.phy = "";
    this.marks.che = "";
    console.log("name:", this.name);
    console.log("age:", this.age);
    console.log("place:", this.place);
    // console.log(this.marks.eng);
    // console.log(this.marks.phy);
    // console.log(this.marks.che);
  },
  total: function () {
    console.log("Total Marks:",this.marks.eng + this.marks.phy + this.marks.che);
  },
};
obj.submit();
obj.reset();
obj.total();
