import Employee from "./Employee.js";
import ManageEmployee from "./ManageEmployee.js";
import validation from "./Validation.js";
const getEleId = (id) => document.getElementById(id);
const manageEmployee = new ManageEmployee();
const Validation = new validation();

//save listEmployee to local storage
const setLocalStorage = () => {
  //convert listEmployee to string
  const dataString = JSON.stringify(manageEmployee.listEmployee);
  localStorage.setItem("LIST_EMPLOYEE", dataString);
};

const getInfoEmployee = () => {
  const account = getEleId("tknv").value;
  const fullName = getEleId("name").value;
  const email = getEleId("email").value;
  const passWork = getEleId("password").value;
  const hireDate = getEleId("datepicker").value;
  const baseSalary = getEleId("luongCB").value;
  const position = getEleId("chucvu").value;
  const workHours = getEleId("gioLam").value;
  let isValid = true;

  //validate form
  //account
  isValid &=
    Validation.checkEmpty(account, "tbTKNV", "Vui lòng nhập tài khoản") &&
    Validation.checkAccount(
      account,
      "tbTKNV",
      "Vui lòng nhập tài khoản từ 4-6 số"
    );
  //name
  isValid &=
    Validation.checkEmpty(fullName, "tbTen", "Vui lòng nhập tên") &&
    Validation.checkName(fullName, "tbTen", "Tên đăng nhập phải là chữ");
  //email
  isValid &=
    Validation.checkEmpty(email, "tbEmail", "Vui lòng nhập email") &&
    Validation.checkEmail(
      email,
      "tbEmail",
      "Vui lòng nhập đúng định dạng email"
    );
  // password
  isValid &=
    Validation.checkEmpty(passWork, "tbMatKhau", "Vui lòng nhập mật khẫu") &&
    Validation.checkPassword(
      passWork,
      "tbMatKhau",
      " Mật khẩu 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)"
    );
  //date
  isValid &=
    Validation.checkEmpty(hireDate, "tbNgay", "Vui lòng nhập ngày/tháng/năm") &&
    Validation.checkDate(hireDate, "tbNgay", "Định dạng mm/dd/yyyy");
  //lương
  isValid &=
    Validation.checkEmpty(
      baseSalary,
      "tbLuongCB",
      "Vui lòng nhập lương cơ bản"
    ) &&
    Validation.checkSalary(
      baseSalary,
      "tbLuongCB",
      "Mức lương từ 1000000 - 20000000"
    );
  //position
  isValid &= Validation.checkEmpty(
    position,
    "tbChucVu",
    "Vui lòng chọn chức vụ"
  );
  // giờ làm
  isValid &=
    Validation.checkEmpty(workHours, "tbGiolam", "Vui lòng nhập giờ làm") &&
    Validation.checkWorkingHours(
      workHours,
      "tbGiolam",
      "Giờ làm phải từ 80 đến 200 giờ"
    );

  if (isValid) {
    const employee = new Employee(
      account,
      fullName,
      email,
      passWork,
      hireDate,
      baseSalary,
      position,
      workHours
    );
    return employee;
  }
  return null;
};

/**
 *
 * Delete a employee to listEmployee
 */
//register deleteEmployee function to window object
const deleteEmployee = (account) => {
  manageEmployee.deleteEmployee(account);
  renderEmployee(manageEmployee.listEmployee);
  setLocalStorage();
};
window.deleteEmployee = deleteEmployee;
getEleId("btnThem").onclick = () => {
  //update title
  getEleId("header-title").innerHTML = "Đăng nhập";
  //hide button cập nhật
  getEleId("btnCapNhat").style.display = "none";
  //show button "them"
  getEleId("btnThemNV").style.display = "block";
  //reset form
  document.getElementsByTagName("form")[0].reset();
};

//edit employee
const editEmployee = (account) => {
  //update title of modal header
  getEleId("header-title").innerHTML = "Cập nhật";
  //hide button "Thêm"
  getEleId("btnThemNV").style.display = "none";
  //show button "Cập nhật"
  getEleId("btnCapNhat").style.display = "block";

  const employee = manageEmployee.getEmployeeById(account);
  if (employee) {
    //set value to input fields
    getEleId("tknv").value = employee.account;
    getEleId("name").value = employee.fullName;
    getEleId("email").value = employee.email;
    getEleId("password").value = employee.passWork;
    getEleId("datepicker").value = employee.hireDate;
    getEleId("luongCB").value = employee.baseSalary;
    getEleId("chucvu").value = employee.position;
    getEleId("gioLam").value = employee.workHours;
  }
};

//update Employee
getEleId("btnCapNhat").onclick = () => {
  const employee = getInfoEmployee();
  manageEmployee.updateEmployee(employee);
  renderEmployee(manageEmployee.listEmployee);
  const closeModal = getEleId("btnDong").click();
  setLocalStorage();
};

window.editEmployee = editEmployee;

const renderEmployee = (listEmployee) => {
  let contentHTML = "";
  listEmployee.forEach((employee) => {
    contentHTML += `
        <tr>
        <td>${employee.account}</td>
        <td>${employee.fullName}</td>
        <td>${employee.email}</td>
        <td>${employee.hireDate}</td>
        <td>${employee.position}</td>
        <td>${employee.totalSalary}</td>
        <td>${employee.typeEmployee}</td>
        <td>
        <button class="btn btn-danger" onclick="deleteEmployee('${employee.account}')">Delete</button>
        <button class= "btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editEmployee('${employee.account}')">Edit</button>
        </td>
        </tr>
        `;
  });
  getEleId("tableDanhSach").innerHTML = contentHTML;
};
//get listEmployee to local storage
const getLocalStorage = () => {
  const dataString = localStorage.getItem("LIST_EMPLOYEE");
  if (dataString) {
    //convert string to listEmployee
    const dataJson = JSON.parse(dataString);
    //assign listEmployee to manageEmployee.listEmployee
    manageEmployee.listEmployee = dataJson;
    renderEmployee(manageEmployee.listEmployee);
  }
};

getLocalStorage();

getEleId("btnThemNV").onclick = () => {
  const employee = getInfoEmployee();
  if (employee) {
    manageEmployee.addEmployee(employee);
    renderEmployee(manageEmployee.listEmployee);
    //close modal
    getEleId("btnDong").click();
    //save local storage
    setLocalStorage();
  }
};

/*
filter 
 */

getEleId("searchName").addEventListener("keyup", () => {
  const searchValue = getEleId("searchName").value;
  const listEmployeeFilter = manageEmployee.filterEmployee(searchValue);
  console.log(listEmployeeFilter);

  renderEmployee(listEmployeeFilter);
});
