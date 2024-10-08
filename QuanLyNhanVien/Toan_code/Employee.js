class Employee {
    constructor(account, fullName, email, passWork, hireDate, baseSalary, position, workHours, totalSalary = 0, typeEmployee) {
        this.account = account;
        this.fullName = fullName;
        this.email = email;
        this.passWork = passWork;
        this.hireDate = hireDate;
        this.baseSalary = baseSalary;
        this.position = position;
        this.workHours = workHours;
        this.totalSalary = this.calcTotalSalary(position, baseSalary);
        this.typeEmployee = this.classifyEmployee(workHours);
        // this.totalSalary = baseSalary * position === "Sếp" ? 3 : position === "Trưởng phòng" ? 2 : 1;
        // this.typeEmployee = workHours >= 192 ? "xuất sắc" : (workHours >= 176 ? "giỏi" : (workHours >= 160 ? "khá" : "trung bình"));
    };

    calcTotalSalary(position, baseSalary) {
        if (position === "Sếp") {
            return baseSalary * 3;
        } else if (position === "Trưởng phòng") {
            return baseSalary * 2;
        } else {
            return baseSalary;
        }
    };



    classifyEmployee(workHours) {
        if (workHours >= 192) {
            return 'xuất sắc';
        } else if (workHours >= 176) {
            return 'giỏi';
        } else if (workHours >= 160) {
            return 'khá';
        } else { return 'trung bình' }
    };

};

export default Employee;