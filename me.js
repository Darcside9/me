function one() {
    alert("Signing Up")
}
function two() {
    alert("Signing In")
}



//Change Surname
function changeSurName() {
    var changeSur = document.getElementById('changeSurname').value;    
    document.getElementById('surName').innerHTML = changeSur;

    alert('Surname Successfully Changed')
}

//Change First
function changeFirstName() {
    var changeFirst = document.getElementById('changeFirstname').value;
    document.getElementById('firstName').innerHTML = changeFirst;

    alert('First Successfully Changed')
}

//Change Other Name
function changeOtherName() {
    var changeOther = document.getElementById('changeOthername').value;
    document.getElementById('otherName').innerHTML = changeOther;

    alert('Other Name Changed Successfully')
}

//Change Date of Birth
function changeDob() {
    var changeDOB = document.getElementById('changeDob').value;
    document.getElementById('dob').innerHTML = changeDOB;

    //alert('DOB Successfully Changed')
}

//Change Gender
function changeGender() {
    var changeGen = document.getElementById('changeGender').value;
    document.getElementById('gender').innerHTML = changeGen;

    alert('Gender Successfully Changed')
}
