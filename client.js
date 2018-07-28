console.log('in Js');

$('document').ready(readyNow);

function readyNow(){
    console.log('in jQ');
    $('#addIn').on('click',inputVals);
}

function inputVals(){
    console.log('In inputVals');
    //gather inputs
    //append values to dom
    let firstName = $('firstNameIn').val();
    let lastName = $('lastNameIn').val();
    let employeeId = $('empIdIn').val();
    let jobTitle = $('jobTitleIn').val();
    let salary = $('salaryIn').val();
    console.log('Values gathered');
    $('.valApp').append('<td>'+firstName+'</td>');
    $('.valApp').append('<td>'+lastName+'</td>');
    $('.valApp').append('<td>'+employeeId+'</td>');
    $('.valApp').append('<td>'+jobTitle+'</td>');
    $('.valApp').append('<td>'+salary+'</td>');
    console.log('Values appended');
    salaryCalc();
    $('firstNameIn').val('');
    $('lastNameIn').val('');
    $('empIdIn').val('');
    $('jobTitleIn').val('');
    $('salaryIn').val('');
    console.log('Values emptied');
    
}

function salaryCalc(){
    //take input values & calcuate
    //if salary val excedes total budget
    //turn highlight total cost red
    console.log('In salary Calc');
}