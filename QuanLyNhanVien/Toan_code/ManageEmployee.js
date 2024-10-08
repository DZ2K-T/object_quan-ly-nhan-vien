class ManageEmployee {
    constructor() {
        this.listEmployee = [];
    }

    addEmployee(employee) {
        this.listEmployee.push(employee);
    }
    findIndexbyId(account) {
        let index = -1;
        for (let i = 0; i < this.listEmployee.length; i++) {
            if (this.listEmployee[i].account === account) {
                index = i;
                break;
            }
        }
        return index;
    }
    deleteEmployee(account) {
        const index = this.findIndexbyId(account);
        if (index !== -1) {
            this.listEmployee.splice(index, 1);
        }
    }
    getEmployeeById(account) {
        const index = this.findIndexbyId(account);
        if (index !== -1) {
            return this.listEmployee[index];
        }
        return null;
    }
    updateEmployee(employee) {
        const index = this.findIndexbyId(employee.account);
        if (index !== -1) {
            this.listEmployee[index] = employee;
        }

    }

    /**
     * 0. Tạo biến listEmployeeFilter = []
     * 1. Nếu type === ""
     *      1.1 Trả về listEmployee
     * 2. duyệt mảng listEmployee
     *  2.1 nếu value trùng với type của employee
     *  2.1.1 Thêm employee vào listEmployeeFilter
     */
    filterEmployee(type) {
        let listEmployeeFilter = []
        if (type === "") {
            return this.listEmployee;
        } else {
            this.listEmployee.forEach((employee) => {
                console.log(employee);

                if (employee.typeEmployee === type) {
                    listEmployeeFilter.push(employee);
                }
            });
        }
        return listEmployeeFilter;

    }
};

export default ManageEmployee;