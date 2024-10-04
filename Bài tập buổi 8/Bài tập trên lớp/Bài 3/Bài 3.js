// Lấy số ngẫu nhiên từ 1 đến 10
let soNgauNhien = Math.floor(Math.random() * 10) + 1;

// Hàm đoán số
function doanSo() {
    let soNguoiDungNhap = parseInt(document.getElementById("soNhap").value);

    // Kiểm tra xem người dùng có nhập số hay không
    if (isNaN(soNguoiDungNhap)) {
        document.getElementById("ketQua").innerHTML = "Vui lòng nhập một số từ 1 đến 10!";
        return;
    }

    // So sánh giá trị người dùng nhập và số ngẫu nhiên
    if (soNguoiDungNhap === soNgauNhien) {
        document.getElementById("ketQua").innerHTML = "Chúc mừng! Bạn đã đoán đúng số " + soNgauNhien + "!";
    } else {
        document.getElementById("ketQua").innerHTML = "Bạn đoán sai! Số ngẫu nhiên là " + soNgauNhien + ". Hãy thử lại.";
        // Tạo lại số ngẫu nhiên để chơi lại
        soNgauNhien = Math.floor(Math.random() * 10) + 1;
    }
}
