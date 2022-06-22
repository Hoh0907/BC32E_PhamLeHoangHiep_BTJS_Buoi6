/*Bài 1 : Tìm số nguyên dương nhỏ nhất 
 * Mô hình 3 khối:
 * - Input:
 *      + tong: Number, tang: Number
 * - Xử lý:
 *      + tang = 0
 *      + tong = 0
 *      + với điều kiện vòng lập là tong < 10000
 *      + tang = tang + 1 đến khi tong < 10000 => tong = tong + tang < 10000
 * - Output:
 *      + txtSoNGNN = tang đến khi thỏa điều kiện tong < 10000
 */
function soNDNN() {
    var tong = 0,
        tang = 0;
    while (tong < 10000) {
        tang++;
        tong = tong + tang; //tong+=tang
    }
    document.getElementById('txtSoNGNN').innerHTML = "Số nguyên dương nhỏ nhất " + tang;
}
document.getElementById('btnSoNGNN').onclick = soNDNN;

/* Bài 2 : Tính Tổng 
 * Mô hình 3 khối
 * - Input:
 *          + x: Number, y: Number
 * - Xử lý:
 *          + tang = 1
 *          + tong = 0
 *          + Điều kiện vòng lập rtangun2 <= y
 *          + tong = tong + Math.pow(x,tang)
 *          + tang++
 * - Output:
 *          + txtTinhTong = tong
 */
function tinhTong() {
    var x = Number(document.getElementById("nhapX").value),
        y = Number(document.getElementById("nhapY").value),
        tong = 0,
        tang = 1;
    while (tang <= y) {
        tong += Math.pow(x, tang);
        tang++;
    }
    document.getElementById("txtTinhTong").innerHTML = "Tổng: " + tong;
}
document.getElementById('btnTinhTong').onclick = tinhTong;

/* Bài 3 : Tính giao thừa
 * Mô hình 3 khối
 * - Input:
 *      + num: Number;
 * - Xử lý: 
 *      + gt = 1;
 *      + tang = 1;
 *      + Điều kiện vòng lập  tang <= gt
 *      + gt = gt * tang
 *      + tang++
 * - Output:
 *      + txtGT = tinhGiaiThua
 */
function giaiThua() {
    var num = Number(document.getElementById('nhapN').value),
        gt = 1,
        tang = 1;
    while (tang <= num) {
        gt = gt * tang; //gt*=tang
        tang++;
    }
    document.getElementById('txtGT').innerHTML = gt;
}
document.getElementById('btnGT').onclick = giaiThua;



/* Bài 4 : Tạo thẻ div 
 * Mô hình 3 khối
 * - Input:
 *          + tang: Number, html: String, a: String;
 * - Xử lý:
 *          + Điều kiện vòng lập đề bài tang <= 10
 *          + if(tang %2==0) => a = "<div class='bg-danger text-white p-2'>Div chẵn</div>"; else => a = "<div class='bg-primary text-white p-2'>Div lẻ </div>";
 *          + html = html + a
 *          + tang++
 * - Output:
 *          + In ra html theo từng điều kiện chẵn lẻ như đề bài bằng thẻ <div><div>
 */
function taoDiv() {
    var a = "",
        tang = 1,
        html = '';
    while (tang <= 10) {
        if (tang % 2 == 0) {
            a = "<div class='bg-danger text-white p-2'>Div chẵn</div>";
        } else {
            a = "<div class='bg-primary text-white  p-2'>Div lẻ </div>";
        }
        html += a;
        tang++;
    }
    document.getElementById('txtDiv').innerHTML = html;
}
document.getElementById('btnTaoDiv').onclick = taoDiv;