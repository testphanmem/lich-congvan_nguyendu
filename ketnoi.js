/**
 * TRẠM KẾT NỐI API TÀNG HÌNH
 * Phiên bản: An toàn định danh 100%
 */

const urlApi = "https://script.google.com/macros/s/AKfycbx71MO65PWen4-G6P3wFBSC95uhFDi-MyNgs4vTNTrJZ8ZAE3s1r_JnIOLkUxX69O-d-g/exec";

function taoNguoiChay(khiTcong, khiLoi) {
    return {
        voiKhiTcong: function(hm) { return taoNguoiChay(hm, khiLoi); },
        voiKhiLoi: function(hm) { return taoNguoiChay(khiTcong, hm); },
        goiApi: function(tLenh, mTham) {
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
        cvLayDlDau: function() { this.goiApi('cvLayDlDau', []); },
        cvLuuDlLich: function(a) { this.goiApi('cvLuuDlLich', [a]); },
        cvLayDlLich: function(a) { this.goiApi('cvLayDlLich', [a]); },
        cvLayDmCv: function() { this.goiApi('cvLayDmCv', []); },
        cvLuuCv: function(a,b) { this.goiApi('cvLuuCv', [a,b]); },
        cvLayDlCv: function(a) { this.goiApi('cvLayDlCv', [a]); },
        cvLayTmCon: function(a) { this.goiApi('cvLayTmCon', [a]); },
        cvTaoTmMoi: function(a,b) { this.goiApi('cvTaoTmMoi', [a,b]); },
        cvTaiTepLichDrive: function(a,b,c,d,e) { this.goiApi('cvTaiTepLichDrive', [a,b,c,d,e]); },
        cvTaiTmMinhChung: function(a,b,c,d,e) { this.goiApi('cvTaiTmMinhChung', [a,b,c,d,e]); }
    };
}

const heThong = { server: { chay: taoNguoiChay() } };