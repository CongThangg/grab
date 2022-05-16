

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

//function main(){}

function tinhTienXe(){
    //lấy các giá trị từ form
    var radioCar = document.getElementById("grabCar");
    var radioSUV = document.getElementById("grabSUV");
    var radioBlack = document.getElementById("grabBlack");

    var soKM = document.getElementById("km").value;
    var tgCho = document.getElementById("time").value;
    // console.log(radioCar, radioSUV, radioBlack, soKM, tgCho);

    var loaiXe = "";
    //gọi hàm kiểm tra loại xe
    loaiXe = kiemTraLoaiXe(radioCar, radioSUV, radioBlack);
    // console.log (loaiXe)

    //tiền phạt
    // var lanPhat = 0;
    // lanPhat = tinhTienPhat(tgCho);
    // console.log(lanPhat);

    switch (loaiXe){
        case "Car":
            console.log('Tính tiền Car')
            thanhTien = tinhTienKM(soKM,GiaKM_DauCar,GiaKM1_19Car,GiaKMTren_19Car) + tinhTienPhat(tgCho,GiaCho_Car);
            break;
        case "SUV":
            console.log('Tính tiền SUV')
            thanhTien = tinhTienKM(soKM,GiaKM_DauSUV,GiaKM1_19SUV,GiaKMTren_19SUV) + tinhTienPhat(tgCho,GiaCho_SUV);
            break;
        case "Black":
            console.log("Tính tiền Black")
            thanhTien = tinhTienKM(soKM,GiaKM_DauBlack,GiaKM1_19Black,GiaKMTren_19Black) + tinhTienPhat(tgCho,GiaCho_Black);
            break;
        default:
            alert('Loại xe không xác định');
            break;
    }
    // console.log(thanhTien);
    document.getElementById("xuatTien").innerHTML = thanhTien;
    document.getElementById("divThanhTien").style.display = "block";
}

//tạo hàm kiemTraLoaiXe
function kiemTraLoaiXe(radio1, radio2, radio3){
    if (radio1.checked) {
        //trả thực tiếp giá trị ra ngoài hàm mà ko cần tốn biến để lưu trữ
        return "Car";
    } else if (radio2.checked) {
        return "SUV";
    } else if (radio3.checked) {
        return "Black";
    } else {
        alert("Loại xe chưa được chọn");
        return"";
    }
}

//Tạo tinhTienPhat
function tinhTienPhat(tgCho, GiaCho){
    //tính lần phạt
    //tính tiền phạt
    var lanPhat = 0;
    if (tgCho >= 3) {
        lanPhat = Math.floor(tgCho / 3);
    }
    return lanPhat * GiaCho;

}

function tinhTienKM(soKM, GiaKM_Dau,GiaKM1_19, GiaKMTren_19){
    if (0 < soKM && soKM <= 1) {
        console.log("đoạn 1");
        return soKM * GiaKM_Dau;
    } else if (1 < soKM && soKM <= 19) {
        console.log("đoạn 2");
        return GiaKM_Dau + (soKM - 1) * GiaKM1_19;
    } else if (soKM > 19) {
        console.log("đoạn 3");
        return GiaKM_Dau + 18 * GiaKM1_19 + (soKM - 19) * GiaKMTren_19;
    } else {
        alert("số km không hợp lệ");
        return 0;
    }
}