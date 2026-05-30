/**************************************************
 * TỆP KẾT NỐI (ketnoi.js)
 * Lĩnh vực: Quản lý địa chỉ kết nối và Giao diện UI.
 * Nguyên tắc: Chỉ chứa link Web App, định danh, Link Logo.
 **************************************************/

var SCV_CONFIG_GAS_URL = "https://script.google.com/macros/s/AKfycbx71MO65PWen4-G6P3wFBSC95uhFDi-MyNgs4vTNTrJZ8ZAE3s1r_JnIOLkUxX69O-d-g/exec";
var SCV_LINK_LOGO = "https://i.ibb.co/8Df1xXsN/Logo-nguyen-du.png"; 

var SCV_TEN_TRUONG = "TRƯỜNG TIỂU HỌC NGUYỄN DU";
var SCV_TEN_TRUONG_UP = "TRƯỜNG TIỂU HỌC NGUYỄN DU";

var SCV_TEN_PM = "Quản lý Công văn & Lịch công tác";
var SCV_TEN_PM_UP = "QUẢN LÝ CÔNG VĂN & LỊCH CÔNG TÁC";
var SCV_PHIEN_BAN = "V2.5.2026";
var SCV_TAC_GIA = "Hoàng Ngọc Lâm";
var SCV_TAC_GIA_UP = "HOÀNG NGỌC LÂM";

// BỔ SUNG: BIẾN MÔ TẢ HỆ THỐNG DÙNG ĐỂ SEO/NHẬN DIỆN WEB
var SCV_MO_TA = "Hệ thống quản lý công văn và lịch công tác nội bộ - Trường TH&THCS Hợp Thành.";

// MÃ CLIENT ID CỦA GOOGLE ĐĂNG NHẬP
var SCV_GOOGLE_CLIENT_ID = "407480994586-m6fpq6sfcc90qqj9k08rsmi1lge6br94.apps.googleusercontent.com";

/* ========================================================================= */
/* KHỞI TẠO CẤU TRÚC HEADER TỰ ĐỘNG TỪ FILE JS                               */
/* ========================================================================= */
(function() {
    // 1. Sinh thẻ Meta Description động
    var metaDesc = document.createElement('meta');
    metaDesc.name = "description";
    metaDesc.content = SCV_MO_TA;
    document.head.appendChild(metaDesc);

    // 2. Sinh thẻ Link Icon (Favicon) động
    var linkIcon = document.createElement('link');
    linkIcon.rel = 'icon';
    linkIcon.href = SCV_LINK_LOGO;
    document.head.appendChild(linkIcon);
})();
