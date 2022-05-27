// bài tập 1
/*
    input: ngày - tháng - năm
    progess:    khai báo biến day - month - year - newDay - newMonth - newYear
                sử dụng swith...case để đếm số ngày trong tháng
                khi click vào nút ngày mai thì xét
                    + (day >= 1) && (day < soNgay) --> newDay = day + 1
                    + (day === soNgay) && (month < 12) --> newDay = 1 ; newMonth = month + 1
                    + (day === soNgay) && (month === 12) --> newDay = 1 ; newMonth = 1 ; newYear = year +1
                khi click vào nút ngày hôm qua thì xét
                    + tạo biến soNgays
                    + (day > 1) && (day <= soNgay) --> newDay = day - 1
                    + (day === 1) && (month <= 12) && (month > 1):
                        - tạo 1 swith..case để gán vào số ngày tháng trước đó cho tháng sau bằng biến soNgayS
                        - newDay = soNgayS; newMonth = month - 1;
                    + (day === 1) && (month === 1) --> newDay = soNgay; newMonth = 12; newYear = year - 1;
    output: newDay, newMonth, newYear
*/
keTiep.onclick = function () {
    var day = +document.getElementById('day').value;
    var month = +document.getElementById('month').value;
    var year = +document.getElementById('year').value;
    var newDay = 0;
    var newMonth = 0;
    var newYear = 0;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: {
            soNgay = 31;
        } break;
        case 4: case 6: case 9: case 11: {
            soNgay = 30;
        } break;
        case 2: {
            if ((((year % 4) === 0) && (year % 100 !== 0)) || ((year % 400) === 0)) {
                soNgay = 29;
            } else {
                soNgay = 28;
            }
        } break;
        default: {
            soNgay = 0;
        }
    }

    if ((day >= 1) && (day < soNgay)) {
        newDay = day + 1;
        newMonth = month;
        newYear = year;

    } else if ((day === soNgay) && (month < 12)) {
        newDay = 1;
        newMonth = month + 1;
        newYear = year;
    } else if ((day === soNgay) && (month === 12)) {
        newDay = 1;
        newMonth = 1;
        newYear = year + 1;
    } else {
        newDay = 0;
        newMonth = 0;
        newYear = 0;
    }
    document.getElementById('ketQua1').innerHTML = newDay + '-' + newMonth + '-' + newYear;
}
truocDo.onclick = function () {
    var day = +document.getElementById('day').value;
    var month = +document.getElementById('month').value;
    var year = +document.getElementById('year').value;
    var newDay = 0;
    var newMonth = 0;
    var newYear = 0;
    var soNgayS = 0;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: {
            soNgay = 31;
        } break;
        case 4: case 6: case 9: case 11: {
            soNgay = 30;
        } break;
        case 2: {
            if ((((year % 4) === 0) && (year % 100 !== 0)) || ((year % 400) === 0)) {
                soNgay = 29;
            } else {
                soNgay = 28;
            }
        } break;
        default: {
            soNgay = 0;
        }
    }
    if ((day > 1) && (day <= soNgay)) {
        newDay = day - 1;
        newMonth = month;
        newYear = year;

    } else if ((day === 1) && (month <= 12) && (month > 1)) {
        switch (month) {
            case 1: case 2: case 4: case 6: case 8: case 9: case 11: {
                soNgayS = 31;
            } break;
            case 5: case 7: case 10: case 12: {
                soNgayS = 30;
            } break;
            case 3: {
                if ((((year % 4) === 0) && (year % 100 !== 0)) || ((year % 400) === 0)) {
                    soNgayS = 29;
                } else {
                    soNgayS = 28;
                }
            } break;
            default: {
                soNgayS = 0;
            }
        }
        newDay = soNgayS;
        newMonth = month - 1;
        newYear = year;
    } else if ((day === 1) && (month === 1)) {
        newDay = soNgay;
        newMonth = 12;
        newYear = year - 1;
    } else {
        newDay = 0;
        newMonth = 0;
        newYear = 0;
    }
    document.getElementById('ketQua1').innerHTML = newDay + '-' + newMonth + '-' + newYear;
}

// bài tập 2
/*
    input: tháng và ngày 
    progess:    khai báo biến month, year và soNgay
                sử dung swith..case để đếm số ngày trong tháng
                    + các tháng 1,3,5,7,8,10,12 có 31 ngày
                    + các thắng 4,6,9,11 có 30 ngày
                    + tháng 2 có 28 ngày, năm nhuận 29 ngày
    output: số ngày của tháng trong năm đó
*/
tinhNgay.onclick = function () {
    var month = +document.getElementById('nhapThang').value;
    var year = +document.getElementById('nhapNam').value;
    var soNgay = 0;
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12: {
            soNgay = 31;
        } break;
        case 4: case 6: case 9: case 11: {
            soNgay = 30;
        } break;
        case 2: {
            if ((((year % 4) === 0) && (year % 100 !== 0)) || ((year % 400) === 0)) {
                soNgay = 29;
            } else {
                soNgay = 28;
            }
        } break;
        default: {
            soNgay = 0;
        }
    }
    document.getElementById('ketQua2').innerHTML = 'tháng ' + month + ' ' + 'năm ' + year + ' ' + 'có ' + soNgay + ' ngày';
}

// bài tập 3
/*
    input: số có 3 số
    progess: khai báo biến soCo3So, hangTram, hangChuc, donVi, docSo1, docSo2, docSo3
             xét soCo3So >= 100 && soCo3So <= 999 --> cách đọc số: hangTram, hangChuc, donVi
    output: docSo1, docSo2, docSo3
*/
docSo.onclick = function () {
    var soCo3So = +document.getElementById('nhapSo').value;
    var hangTram = Math.floor(soCo3So / 100);
    var hangChuc = Math.floor(soCo3So % 100 / 10);
    var donVi = Math.floor(soCo3So % 10);
    var docSo1 = '';
    var docSo2 = '';
    var docSo3 = '';
    if (soCo3So >= 100 && soCo3So <= 999) {
        switch (hangTram) {
            case 9: {
                docSo1 = 'chín trăm';
            } break;
            case 8: {
                docSo1 = 'tám trăm';
            } break;
            case 7: {
                docSo1 = 'bảy trăm';
            } break;
            case 6: {
                docSo1 = 'sáu trăm';
            } break;
            case 5: {
                docSo1 = 'năm trăm';
            } break;
            case 4: {
                docSo1 = 'bốn trăm';
            } break;
            case 3: {
                docSo1 = 'ba trăm';
            } break;
            case 2: {
                docSo1 = 'hai trăm';
            } break;
            case 1: {
                docSo1 = 'một trăm';
            } break;
        }
        switch (hangChuc) {
            case 9: {
                docSo2 = 'chín mươi';
            } break;
            case 8: {
                docSo2 = 'tám mươi';
            } break;
            case 7: {
                docSo2 = 'bảy mươi';
            } break;
            case 6: {
                docSo2 = 'sáu mươi';
            } break;
            case 5: {
                docSo2 = 'năm mươi';
            } break;
            case 4: {
                docSo2 = 'bốn mươi';
            } break;
            case 3: {
                docSo2 = 'ba mươi';
            } break;
            case 2: {
                docSo2 = 'hai mươi';
            } break;
            case 1: {
                docSo2 = 'mười';
            } break;
            default: {
                if (hangChuc === 0 && donVi === 0) {
                    docSo2 = '';
                } else {
                    docSo2 = 'lẻ';
                }
            }
        }
        switch (donVi) {
            case 9: {
                docSo3 = 'chín';
            } break;
            case 8: {
                docSo3 = 'tám';
            } break;
            case 7: {
                docSo3 = 'bảy';
            } break;
            case 6: {
                docSo3 = 'sáu';
            } break;
            case 5: {
                if (hangChuc === 0) {
                    docSo3 = 'năm';
                } else {
                    docSo3 = 'lăm';
                }
            } break;
            case 4: {
                docSo3 = 'bốn';
            } break;
            case 3: {
                docSo3 = 'ba';
            } break;
            case 2: {
                docSo3 = 'hai';
            } break;
            case 1: {
                docSo3 = 'một';
            } break;
            default: {
                docSo3 = '';
            }
        }
    } else {
        docSo1 = 'nhập số có 3 số';
    }
    document.getElementById('ketQua3').innerHTML = docSo1 + ' ' + docSo2 + ' ' + docSo3;
}