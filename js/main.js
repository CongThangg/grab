/**
 * Khối 1: input
 * loaiXe
 * soKM
 * tgCho
 * 
 * Khối 2:
 * B1: tạo hàm tinhTien
 * B2: lấy giắ trị từ form
 *     soKm, tgCho
 *     
 *     Kiểm tra người dùng đang chọn radio nào?
 * 
 * B3: tính tiền cước theo Km
 *     đoạn 1
 *     Nếu 0< soKM <=1 : tienKM = soKM * GiaKM_Dau
 *     đoạn 2
 *     Nếu 1< soKM <= 19 : tienKM = GiaKM_Dau + (soKM - 1)*GiaKM1_19
 *     đoạn 3
 *     Nếu 19< soKM : tienKM = GiaKM_Dau + 18 * GiaKM1_19 + (soKM - 19) * GiaKMTren_19
 * 
 * Khối 3: output
 * thanhTien
 */


//Global
const GiaKM_DauCar = 8000;
const GiaKM1_19Car = 7500;
const GiaKMTren_19Car = 7000;
const GiaCho_Car = 2000;

const GiaKM_DauSUV = 9000;
const GiaKM1_19SUV = 8500;
const GiaKMTren_19SUV = 8000;
const GiaCho_SUV = 3000;

const GiaKM_DauBlack = 10000;
const GiaKM1_19Black = 9500;
const GiaKMTren_19Black = 9000;
const GiaCho_Black = 3500;


function tinhTienXe() {
    //Lấy các thẻ radio
    var radioCar = document.getElementById("grabCar");
    var radioSUV = document.getElementById("grabSUV");
    var radioBlack = document.getElementById("grabBlack");

    var soKM = document.getElementById("km").value;
    var tgCho = document.getElementById("time").value;
    console.log(radioCar, radioSUV, radioBlack, soKM, tgCho);

    var loaiXe = "";
    //kiểm tra loại xe
    //radioCar.checked == true
    if (radioCar.checked) {
        loaiXe = "Car";
    } else if (radioSUV.checked) {
        loaiXe = "SUV";
    } else if (radioBlack.checked) {
        loaiXe = "Black";
    }
    else {
        alert("Loại xe chưa được chọn");
    }

    console.log(loaiXe);

    //tính tiền KM theo loại xe
    //if(loaiXe == "SUV")


    //Tính số lần phạt
    var lanPhat = 0;
    if (tgCho >= 3) {
        lanPhat = Math.floor(tgCho / 3);
    }

    var thanhTien = 0;

    switch (loaiXe) {
        case "Car":
            console.log("tính loại car");
            // 0 <sokm <=1
            if (0 < soKM && soKM <= 1) {
                console.log("đoạn 1");
                thanhTien = soKM * GiaKM_DauCar;
                //thanhTien (mới) = thanhTien (cũ) + lanPhat * tienCho
                thanhTien = thanhTien + (lanPhat * GiaCho_Car)
            } else if (1 < soKM && soKM <= 19) {
                console.log("đoạn 2");
                thanhTien = GiaKM_DauCar + (soKM - 1) * GiaKM1_19Car;
            } else if (soKM > 19) {
                console.log("đoạn 3");
                thanhTien = GiaKM_DauCar + 18 * GiaKM1_19Car + (soKM - 19) * GiaKMTren_19Car;
            } else {
                alert("số km không hợp lệ");
            }
            break;
        case "SUV":
            console.log("tính loại SUV");
            if (0 < soKM && soKM <= 1) {
                console.log("đoạn 1");
                thanhTien = soKM * GiaKM_DauSUV;
                thanhTien = thanhTien + (lanPhat * GiaCho_SUV)
            } else if (1 < soKM && soKM <= 19) {
                console.log("đoạn 2");
                thanhTien = GiaKM_DauSUV + (soKM - 1) * GiaKM1_19SUV;
            } else if (soKM > 19) {
                console.log("đoạn 3");
                thanhTien = GiaKM_DauSUV + 18 * GiaKM1_19SUV + (soKM - 19) * GiaKMTren_19SUV;
            } else {
                alert("số km không hợp lệ");
            }
            break;
        case "Black":
            console.log("tính loại Black");
            if (0 < soKM && soKM <= 1) {
                console.log("đoạn 1");
                thanhTien = soKM * GiaKM_DauBlack;
                thanhTien = thanhTien + (lanPhat * GiaCho_Black)
            } else if (1 < soKM && soKM <= 19) {
                console.log("đoạn 2");
                thanhTien = GiaKM_DauBlack + (soKM - 1) * GiaKM1_19Black;
            } else if (soKM > 19) {
                console.log("đoạn 3");
                thanhTien = GiaKM_DauBlack + 18 * GiaKM1_19Black + (soKM - 19) * GiaKMTren_19Black;
            } else {
                alert("số km không hợp lệ");
            }
            break;
        default:
            console.log("loại xe ko xác định");
            break;
    }
    console.log(thanhTien);
}