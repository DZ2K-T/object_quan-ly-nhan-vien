class validation {
  // Kiểm tra không được để trống
  checkEmpty(value, divID, message) {
    if (value === "" || value === "Chọn chức vụ") {
      //show error mes
      document.getElementById(divID).innerHTML = message;
      document.getElementById(divID).style.display = "block";
      return false;
    } else {
      //hide error mes
      document.getElementById(divID).innerHTML = "";
      document.getElementById(divID).style.display = "none";
      return true;
    }
  }

  // Kiểm tra tài khoản 4-6 ký số
  checkAccount(value, divID, message) {
    const validAccount = /^[0-9]{4,6}$/;
    if (value.match(validAccount)) {
      document.getElementById(divID).innerHTML = "";
      document.getElementById(divID).style.display = "none";
      return true;
    } else {
      document.getElementById(divID).innerHTML = message;
      document.getElementById(divID).style.display = "block";
      return false;
    }
  }

  //   Kiểm tra tên nhân viên chỉ có chữ
  checkName(value, divID, message) {
    const validLetter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";

    if (value.match(validLetter)) {
      document.getElementById(divID).innerHTML = "";
      document.getElementById(divID).style.display = "none";
      return true;
    } else {
      document.getElementById(divID).innerHTML = message;
      document.getElementById(divID).style.display = "block";
      return false;
    }
  }

  // Kiểm tra email hợp lệ
  checkEmail(value, divID, message) {
    const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value.match(validEmail)) {
      document.getElementById(divID).innerHTML = "";
      document.getElementById(divID).style.display = "none";
      return true;
    }
    document.getElementById(divID).innerHTML = message;
    document.getElementById(divID).style.display = "block";
    return false;
  }

  // Kiểm tra mật khẩu 6-10 ký tự, có số, ký tự hoa, đặc biệt
  checkPassword(value, divID, message) {
    const validPassword =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    if (value.match(validPassword)) {
      document.getElementById(divID).innerHTML = "";
      document.getElementById(divID).style.display = "none";
      return true;
    }
    document.getElementById(divID).innerHTML = message;
    document.getElementById(divID).style.display = "block";
    return false;
  }

  // Kiểm tra định dạng ngày làm việc mm/dd/yyyy
  checkDate(value, divID, message) {
    const validDate = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (value.match(validDate)) {
      document.getElementById(divID).innerHTML = "";
      document.getElementById(divID).style.display = "none";
      return true;
    }
    document.getElementById(divID).innerHTML = message;
    document.getElementById(divID).style.display = "block";
    return false;
  }

  // Kiểm tra lương cơ bản
  checkSalary(value, divID, message) {
    const validSalary = parseFloat(value);
    if (validSalary >= 1000000 && validSalary <= 20000000) {
      document.getElementById(divID).innerHTML = "";
      document.getElementById(divID).style.display = "none";
      return true;
    }
    document.getElementById(divID).innerHTML = message;
    document.getElementById(divID).style.display = "block";
    return false;
  }

  //   Kiểm tra số giờ làm việc trong tháng
  checkWorkingHours(value, divID, message) {
    const hours = parseInt(value);
    if (hours >= 80 && hours <= 200) {
      document.getElementById(divID).innerHTML = "";
      document.getElementById(divID).style.display = "none";
      return true;
    }
    document.getElementById(divID).innerHTML = message;
    document.getElementById(divID).style.display = "block";
    return false;
  }
}

export default validation;
