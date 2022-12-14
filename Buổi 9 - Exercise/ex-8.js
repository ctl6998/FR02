console.log('Ini ex 8')

// Viết hàm nhận một số làm đầu vào và chèn dấu gạch ngang (-) giữa mỗi số chẵn
// 025468 => 0-254-6-8

let test = "0245468"
let test2 = "abc24573476"

/// Trước mỗi số chắn -> nhầm
function convert(value, sepa){
    result = value.replace(/[02468]/g,function(letter){
        return sepa + letter
    })
    return result.substring(1)
}
