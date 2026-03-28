/**
 * TRẠM KẾT NỐI API TÀNG HÌNH
 * Phiên bản: An toàn định danh 100%
 */

const duongDanApi = "https://script.google.com/macros/s/AKfycbx71MO65PWen4-G6P3wFBSC95uhFDi-MyNgs4vTNTrJZ8ZAE3s1r_JnIOLkUxX69O-d-g/exec";

function taoTrinhThucThi(hamThanhCong, hamLoi) {
    return {
        khiThanhCong: function(hamXuLy) { return taoTrinhThucThi(hamXuLy, hamLoi); },
        khiCoLoi: function(hamXuLy) { return taoTrinhThucThi(hamThanhCong, hamXuLy); },
        goiApi: function(tenLenh, mangThamSo) {
            const taiKhoanNguoiDung = window.taiKhoanToanCuc || sessionStorage.getItem("taiKhoanHienTai");
            mangThamSo.push(taiKhoanNguoiDung); 

            fetch(duongDanApi, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ hanhDong: tenLenh, mangThamSo: mangThamSo })
            })
            .then(phanHoi => phanHoi.json())
            .then(ketQua => {
                if (ketQua.thanhCong === false) {
                    if (hamLoi) hamLoi(new Error(ketQua.thongBao || "Lỗi xử lý từ máy chủ."));
                } else {
                    if (hamThanhCong) hamThanhCong(ketQua.duLieu !== undefined ? ketQua.duLieu : ketQua);
                }
            })
            .catch(loi => { if (hamLoi) hamLoi(loi); });
        },
        layDuLieuKhoiTao: function() { this.goiApi('layDuLieuKhoiTao', []); },
        luuDuLieuLich: function(duLieu) { this.goiApi('luuDuLieuLich', [duLieu]); },
        layDuLieuLich: function(taiKhoan) { this.goiApi('layDuLieuLich', [taiKhoan]); },
        layDanhMucCongVan: function() { this.goiApi('layDanhMucCongVan', []); },
        luuDuLieuCongVan: function(duLieu, taiKhoan) { this.goiApi('luuDuLieuCongVan', [duLieu, taiKhoan]); },
        layDuLieuCongVan: function(taiKhoan) { this.goiApi('layDuLieuCongVan', [taiKhoan]); },
        layThuMucCon: function(taiKhoan) { this.goiApi('layThuMucCon', [taiKhoan]); },
        taoThuMucMoi: function(idCha, tenMoi) { this.goiApi('taoThuMucMoi', [idCha, tenMoi]); },
        taiTepLichLenDrive: function(mangTep, tenGoc, idThuMuc, linkCu, cheDoGhi) { this.goiApi('taiTepLichLenDrive', [mangTep, tenGoc, idThuMuc, linkCu, cheDoGhi]); },
        taiThuMucMinhChung: function(idCha, tenThuMuc, mangTep, linkCu, cheDoGhi) { this.goiApi('taiThuMucMinhChung', [idCha, tenThuMuc, mangTep, linkCu, cheDoGhi]); }
    };
}

const heThong = { mayChu: { chay: taoTrinhThucThi() } };