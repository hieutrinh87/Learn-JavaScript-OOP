function Diem(x=0,y=0){
    this.x = x;
    this.y = y;
}

Diem.prototype.TinhKhoangCach = function(b){
    let dx = this.x - b.x;
    let dy = this.y - b.y;
    return Math.pow((dx*dx + dy*dy),0.5)
}

let DiemDau = new Diem(0,1);
let DiemCuoi = new Diem(1,0);
console.log(DiemDau.TinhKhoangCach(DiemCuoi));