let validateEmail = () => {
    var emailID = document.getElementById('inputEmail4').value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Kiểm tra lại định dạnh email")
        return false;
    }
    return (true);
}
let HandleButton = () => {
    let email = document.getElementById('inputEmail4').value
    let name = document.getElementById('namefrom').value
    let phone = document.getElementById('inputPhone').value
    let quetion = document.getElementById('inputQuetion').value
    let sex = document.getElementById('inputState').value
    if (!email || !name || !phone || !quetion) {
        alert(`Thiếu thông tin vui lòng kiểm tra lại.`)
        return
    } else {
        if (validateEmail() === true) {
            alert("Câu hỏi đã được gửi, xin chờ 1 ít tời gian chúng tôi sẽ trả lời bạn")
        }

    }





}