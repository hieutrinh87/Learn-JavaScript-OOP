function Hinh(Ten, MauSac){
    this.Ten = Ten;
    this.MauSac = MauSac;
}

function HCN(Ten, MauSac, ChieuDai, ChieuRong){
    Hinh.call(this, Ten, MauSac);
    this.ChieuDai = ChieuDai;
    this.ChieuRong = ChieuRong;

}

HCN.prototype.TinhDienTich = function(){
    return this.ChieuDai * this.ChieuRong;
}

function HinhTron(Ten, MauSac, BanKinh){
    Hinh.call(this, Ten, MauSac);
    this.BanKinh = BanKinh;

    Object.defineProperty(this, 'DuongKinh',
    {
        get: function(){
            return this.BanKinh * 2;
        },
        set: function(value){
            this.BanKinh = value * 0.5
        }
    });

}

HinhTron.prototype.TinhDienTich = function(){
    return Math.PI * this.BanKinh * this.BanKinh;
}

let ht = new HinhTron('a', 'red', 5);
let hcn = new HCN('b', 'green', 10, 2);
let hinhs = [ht, hcn];
let tongDT = hinhs.reduce((sum, value) => sum + value.TinhDienTich(),0);
ht.DuongKinh = 20;
console.log(tongDT);