// Hàm tìm số lớn nhất
function timSoLonNhat(daySo) {
    return Math.max(...daySo);
}

// Hàm tìm số nhỏ nhất
function timSoNhoNhat(daySo) {
    return Math.min(...daySo);
}

// Hàm chính thực hiện việc tìm số lớn nhất và nhỏ nhất
function timSo() {
    // Lấy giá trị từ ô nhập
    let daySo = document.getElementById("daySo").value.split(',').map(Number);
            
    // Kiểm tra xem có phải là mảng hợp lệ không
    if (daySo.every(isNaN)) {
        alert("Vui lòng nhập các số hợp lệ!");
        return;
    }

    // In kết quả ra giao diện
    document.getElementById("ketQuaLonNhat").innerHTML = "Số lớn nhất: " + timSoLonNhat(daySo);
    document.getElementById("ketQuaNhoNhat").innerHTML = "Số nhỏ nhất: " + timSoNhoNhat(daySo);
}
