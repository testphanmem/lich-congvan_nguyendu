/**
 
 */

const urlApi = "https://script.google.com/macros/s/AKfycbx71MO65PWen4-G6P3wFBSC95uhFDi-MyNgs4vTNTrJZ8ZAE3s1r_JnIOLkUxX69O-d-g/exec";

function taoNguoiChay(khiTcong, khiLoi) {
    return {
        voiKhiTcong: function(hm) { return taoNguoiChay(hm, khiLoi); },
        voiKhiLoi: function(hm) { return taoNguoiChay(khiTcong, hm); },
        _goi: function(tLenh, mTham) {
            const tkNd = window.cvTkToanCuc || sessionStorage.getItem("cvTkHienTai");
            mTham.push(tkNd); 

            fetch(urlApi, {
                method: 'POST',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify({ hDong: tLenh, mTham: mTham })
            })
            .then(ph => ph.json())
            .then(kq => {
                if (kq.tCong === false) {
                    if (khiLoi) khiLoi(new Error(kq.tBao || "Lỗi xử lý từ máy chủ."));
                } else {
                    if (khiTcong) khiTcong(kq.dLieu !== undefined ? kq.dLieu : kq);
                }
            })
            .catch(loi => { if (khiLoi) khiLoi(loi); });
        },
        cvLayDlDau: function() { this._goi('cvLayDlDau', []); },
        cvLuuDlLich: function(a) { this._goi('cvLuuDlLich', [a]); },
        cvLayDlLich: function(a) { this._goi('cvLayDlLich', [a]); },
        cvLayDmCv: function() { this._goi('cvLayDmCv', []); },
        cvLuuCv: function(a,b) { this._goi('cvLuuCv', [a,b]); },
        cvLayDlCv: function(a) { this._goi('cvLayDlCv', [a]); },
        cvLayTmCon: function(a) { this._goi('cvLayTmCon', [a]); },
        cvTaoTmMoi: function(a,b) { this._goi('cvTaoTmMoi', [a,b]); },
        cvTaiTepLichDrive: function(a,b,c,d,e) { this._goi('cvTaiTepLichDrive', [a,b,c,d,e]); },
        cvTaiTmMinhChung: function(a,b,c,d,e) { this._goi('cvTaiTmMinhChung', [a,b,c,d,e]); }
    };
}

const heThong = { server: { chay: taoNguoiChay() } };