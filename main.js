// bài tập 1
/*
    input: ngày - tháng - năm
    progess:    khai báo day - month - year - newDay - newMonth - newYear
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
            }else {
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
        
    }else if ((day === soNgay) && (month < 12)) {
        newDay = 1;
        newMonth = month + 1;
        newYear = year;
    }else if ((day === soNgay) && (month === 12)) {
        newDay = 1;
        newMonth = 1;
        newYear = year +1;
    }else {
        newDay = 0;
        newMonth = 0;
        newYear = 0;
    }
    document.getElementById('ketQua1').innerHTML = newDay +'-'+ newMonth +'-'+ newYear;
}
truocDo.onclick = function (){
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
            }else {
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
        
    }else if ((day === 1) && (month <= 12) && (month > 1)) {
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
                }else {
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
    }else if ((day === 1) && (month === 1)) {
        newDay = soNgay;
        newMonth = 12;
        newYear = year - 1;
    }else {
        newDay = 0;
        newMonth = 0;
        newYear = 0;
    }
    document.getElementById('ketQua1').innerHTML = newDay +'-'+ newMonth +'-'+ newYear;
}

// bài tập 2
tinhNgay.onclick = function(){
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
            }else {
                soNgay = 28;
            }
        } break;
        default: {
            soNgay = 0;
        }
    }
    document.getElementById('ketQua2').innerHTML = 'tháng ' + month +' '+ 'năm ' + year + ' ' + 'có ' + soNgay + ' ngày';
}