class perhitungan {
  constructor(data) {
    this.data = data;
  }
  hitungtotalumur() {
    this.hitungtotalumur = 0;
    for (let index = 0; index < data.length; index++) {
      this.totalumur += Number(data[index].umur);
    }
  }
  hitungtotalsaku() {
    this.hitungtotalsaku = 0;
    for (let index = 0; index < data.length; index++) {
      this.totalsaku += Number(data[index].saku);
    }
  }
  asynchitungtotalumur = (data) => {
    return new promise((resolve, reject) => {
      this.hitungtotalumur = 0;
      for (let index = 0; index < data.length; index++) {
        this.totalumur += Number(data[index].umur);
      }
      resolve(this.totalumur);
    });
  };
  asynchitungtotalsaku = (data) => {
    return new promise((resolve, reject) => {
      this.hitungtotalsaku = 0;
      for (let index = 0; index < data.length; index++) {
        this.totalsaku += Number(data[index].saku);
      }
      resolve(this.totalsaku);
    });
  };
  hitungall() {
    promise.all([this.asynchitungtotalumur(this.data), this.asynchitungtotalsaku(this.data)]).then((result) => {
      for (let cek of result) {
        console.log(cek);
      }
      console.log("calc done");
    });
  }
}

class statistik extends perhitungan {
  constructor(data) {
    super(data);
  }
  outputdata() {
    console.log("total umur" + this.totalumur);
    console.log("total saku" + this.totalsaku);
  }
}
