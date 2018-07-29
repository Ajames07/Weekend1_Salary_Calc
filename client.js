console.log('in Js');

let empList = [];

let monthlySalary = 0;

const totalMontlyCost = 20000;

$('document').ready(readyNow);

class Employee {
    constructor(firstName, lastName, employeeId, jobTitle, annualSalary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    } //end constructor
} //end class Employee



function readyNow() {
    console.log('in jQ');
    $('#addIn').on('click', inputVals);
} //end readyNow

function inputVals() {
    //Store input value in array
    console.log('In inputVals');
    empDataInfo = new Employee($('#firstNameIn').val(), $('#lastNameIn').val(), $('#empIdIn').val(), $('#jobTitleIn').val(), $('#salaryIn').val());
    empList.push(empDataInfo);
    console.log(empList);
    //empty input fields
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#empIdIn').val('');
    $('#jobTitleIn').val('');
    $('#salaryIn').val('');
    salaryCalc();
} //end inputVals

function salaryCalc() {
    console.log('In salary Calc');
    //take annual values & calcuate
    for (let staff of empList) {
         monthlySalary += (staff.annualSalary / 12);
         //****monthlySalary is not properly adding up combined vals*****
        console.log(monthlySalary);
        if (monthlySalary <= totalMontlyCost) {
            console.log('within budget');
        } else if (monthlySalary > totalMontlyCost) {
            console.log('expenses exceede budget');
            //if salary val exceeds total budget
            //highlight total cost red
        }//end else if
    }//end for of
} //end salaryCalc