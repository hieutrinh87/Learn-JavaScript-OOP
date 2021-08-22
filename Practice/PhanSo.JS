function PhanSo(TuSo = 0, MauSo=1){
    this.TuSo = TuSo,
    this.MauSo = MauSo
}

PhanSo.prototype.Cong = function(b){
    let kq = new PhanSo();
    kq.TuSo = this.TuSo * b.MauSo + this.MauSo*b.TuSo;
    kq.MauSo = this.MauSo * b.MauSo;
    return kq;
}
PhanSo.prototype.Tru = function(b){
    let kq = new PhanSo();
    kq.TuSo = this.TuSo * b.MauSo - this.MauSo*b.TuSo;
    kq.MauSo = this.MauSo * b.MauSo;
    return kq;
}
PhanSo.prototype.Chia = function(b){
    let kq = new PhanSo();
    kq.TuSo = this.TuSo * b.MauSo;
    kq.MauSo = this.MauSo * b.TuSo;
    return kq;
}
PhanSo.prototype.Nhan = function(b){
    let kq = new PhanSo();
    kq.TuSo = this.TuSo * b.TuSo;
    kq.MauSo = this.MauSo * b.MauSo;
    return kq;
}
PhanSo.prototype.toString= function(){
    return`${this.TuSo}/${this.MauSo}`;
}


let a = new PhanSo(1,2);
let b = new PhanSo(2,3);

console.log(a.Cong(b).toString());
console.log(a.Nhan(b).toString());
console.log(a.Tru(b).toString());
console.log(a.Chia(b).toString());