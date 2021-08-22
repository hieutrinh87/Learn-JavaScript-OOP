function Extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

// Nhan vien
function NhanVien(MaNV, TenNV, DiaChi){
this.MaNV = MaNV;
this.TenNV = TenNV;
this.DiaChi = DiaChi;
}

// Nhan vien san xuat
function NVSX(MaNV, TenNV, DiaChi, SoSanPham){
    NhanVien.call(this, MaNV, TenNV, DiaChi);
    this.SoSanPham = SoSanPham;

    this.TinhLuong = function(){
        return this.SoSanPham * 20;
    }
}
Extend(NVSX, NhanVien);

// Nhan vien van phong
function NVVP(MaNV, TenNV, DiaChi, HeSo, PhuCap){
    NhanVien.call(this, MaNV, TenNV, DiaChi);
    this.HeSo = HeSo;
    this.PhuCap = PhuCap;

    this.TinhLuong = function(){
        return this.HeSo * 1000 + this.PhuCap;
    }
}
Extend(NVVP, NhanVien);

// Khoi tao va tinh luong
let nvsx1 = new NVSX('0001', 'Trinh Van Hieu', 'Vung Tau', 10);
let nvsx2 = new NVSX('0002', 'Trinh Van Hieu', 'Vung Tau', 20);
let nvvp3 = new NVVP('0003', 'Trinh Van Hieu', 'Vung Tau', 10, 100);

let CacNhanVien = [nvsx1, nvsx2, nvvp3];
let kq = 0;
kq = CacNhanVien.reduce((sum, value) => sum + value.TinhLuong() , 0)
console.log(kq);
