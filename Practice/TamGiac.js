function Diem(x=0,y=0){
    this.x = x;
    this.y = y;
}

Diem.prototype.TinhKhoangCach = function(b){
    let dx = this.x - b.x;
    let dy = this.y - b.y;
    return Math.pow((dx*dx + dy*dy),0.5)
}

function TamGiac(a, b, c){
    let LaTamGiacHopLe = function()
    {
        let AB = a.TinhKhoangCach(b);
        let BC = b.TinhKhoangCach(c);
        let CA = c.TinhKhoangCach(a);
        if (AB + BC <= CA) {
            return false;
        }
        if (AB + CA <= BC) {
            return false;
        }
        if (CA + BC <= AB) {
            return false;
        }
        return true;
    }

    if (LaTamGiacHopLe() === false) {
        throw 'Ba Diem Khong Hop Le';
    };

    this.a = a || new Diem();
    this.b = b || new Diem();
    this.c = c || new Diem();
}

TamGiac.prototype.TinhChuVi = function(){
    let AB = this.a.TinhKhoangCach(this.b);
    let BC = this.b.TinhKhoangCach(this.c);
    let CA = this.c.TinhKhoangCach(this.a);
    return AB + BC + CA;
}

let a = new Diem(0,0);
let b = new Diem(1,1);
let c = new Diem(2,2);
try{
    let tg = new TamGiac(a,b,c);
    console.log(tg.TinhChuVi());
}
catch (e){
console.error(e);
}


