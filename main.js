// // bài 1: tính lương
document.getElementById("countSalary").onclick = function (){
    // // input: nhap so ngay lam
    let dayEL = document.getElementById('day').value;
    // progress: luong = luong 1 ngay * so ngay lam
    let salaryOneDayEL = +document.getElementById('salaryOneDay').innerHTML;
    let salaryEL = dayEL * salaryOneDayEL;
    // output: tien luong
    document.getElementById('showSalary').style.display = 'block';
    document.getElementById('resultSalary').innerHTML = salaryEL + ' VND';
};


// // bài 2:tính giá trị trung bình

document.getElementById("countAverage").onclick = function (){
    // input: nhập vào 5 số
    let so1 = +document.getElementById('number1').value;
    console.log(typeof so1);
    let so2 = +document.getElementById('number2').value;
    let so3 = +document.getElementById('number3').value;
    let so4 = +document.getElementById('number4').value;
    let so5 = +document.getElementById('number5').value;
    //progress: tính giá trị trung bình của 5 số
    let soTrungBinh = (so1 + so2 + so3 + so4 + so5)/5;
    // output: giá trị trung bình
    document.getElementById('showAverage').style.display = 'block';
    document.getElementById('resultAverage').innerHTML = soTrungBinh;
}
// // bài 3: quy đổi tiền
document.getElementById("countUsd").onclick = function (){
    // input: nhập số tiền USD
    let usd = +document.getElementById('usd').value;
    // progress and output: tiền  quy đổi sang VND = số usd * giá USD, xuất kết quả
    const priceUSD = +document.getElementById('priceUSD').innerHTML;
    document.getElementById('showUsd').style.display = 'block';
    document.getElementById('resultUsd').innerHTML = usd * priceUSD + ' VND';
}


//bài 4: tính diện tích và chu vi
// input: nhập chiều dài và chiều rộng

document.getElementById("countCV").onclick = function (){
    // progress and output: chu vi
    let dai = +document.getElementById('dai').value;
    let rong = +document.getElementById('rong').value;
    console.log(dai);
    document.getElementById('showCV').style.display = 'block';
    document.getElementById('resultCV').innerHTML = (dai + rong)*2;
}

document.getElementById("countDT").onclick = function (){
    const dai = +document.getElementById('dai').value;
    const rong = +document.getElementById('rong').value;
    // progress and output: chu vi
    document.getElementById('showDT').style.display = 'block';
    document.getElementById('resultDT').innerHTML = (dai * rong);
}

// bài 5: tổng 2 ký số
document.getElementById("countTotal").onclick = function () {
    // input: nhập vào nguyên
    let n = +document.getElementById('soNguyen').value;
    // output: tổng 2 ký số
    let total = 0;
    // progress: 
    while(n > 0) {
    total += n % 10;
        n = Math.floor(n/10);
    }

    document.getElementById('showTotal').style.display = 'block';
    document.getElementById('resultTotal').innerHTML = total;
}