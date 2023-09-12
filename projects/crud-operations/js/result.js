

listStudent();
sortButton()
var tempRecId = 0;

// Display list of the student in tabular form 
function listStudent() {
    $('#form-data tbody').empty()
    var data = "";
    for (let i = 0; i < obj.length; i++) {
        var total = obj[i].english + obj[i].science + obj[i].maths;
        parseInt(total)
        var percentage = parseInt((total / 300) * 100);
        percentage.toFixed(2)
        var temp,status = "";
        // for marks check
        if (obj[i].english >= 34 && obj[i].science >= 34 && obj[i].maths >= 34) {
            status = "Pass"
            temp="<span class='badge bg-success'>"+status+"</span>"
        }
        else {
            status = "Fail"
            temp="<span class='badge bg-danger'>"+status+"</span>"
        }
        data += "<tr>" +
            "<th>" + (i + 1) + "</th>" +
            "<td>" + obj[i].name + "</td>" +
            "<td>" + obj[i].age + "</td>" +
            "<td>" + obj[i].address + "</td>" +
            "<td>" + obj[i].english + "</td>" +
            "<td>" + obj[i].maths + "</td>" +
            "<td>" + obj[i].science + "</td>" +
            "<td>" + total + "</td>" +
            "<td>" + percentage + "%</td>" +
            "<td id='st'>" + temp + "</td>" +
            "<td>" + "<button class='btn btn-info' onclick='showUpdateForm(" + obj[i].id + ")'>" + "Edit" + "</button>" +
            "<td>" + "<button class='btn btn-danger'  onclick='deleteStudentData(" + obj[i].id + ")'>" + "Delete" + "</button>" +
            "</tr>";

    }
    $('#form-data tbody').append(data)
    // document.getElementById("table-body"`).innerHTML=data;
    console.log(obj);

}

// for new data
function addAnotherData() {
    var name, age, address, english, maths, science, total, status;
    name = document.getElementById("studentName").value;
    age = document.getElementById("studentAge").value
    address = document.getElementById("studentAddress").value;
    english = parseInt(document.getElementById("englishMarks").value);
    maths = parseInt(document.getElementById("mathsMarks").value);
    science = parseInt(document.getElementById("scienceMarks").value);
    total = english + maths + science
    parseInt(total)

    // conditon for empty entry
    if (name === "" && age === "" && address === "") {
        document.getElementById("studentName").style.border = "2px solid red";
        document.getElementById("studentAge").style.border = "2px solid red";
        document.getElementById("studentAddress").style.border = "2px solid red";
        alert("Input fields cannot be empty");
        return false
    }
    else if (name === "") {
        document.getElementById("studentName").style.border = "2px solid red";
        alert("Input fields cannot be empty");
    }
    else if (age === "") {
        document.getElementById("studentAge").style.border = "2px solid red";
        alert("Input fields cannot be empty");
        return false
    }
    else if (address === "") {
        document.getElementById("studentAddress").style.border = "2px solid red";
        alert("Input fields cannot be empty");
        return false
    }

    var objForm = { name: name, age: age, address: address, english: english, maths: maths, science: science, total: total, status: status };
    obj.push(objForm);
    sortButton();
    listStudent()

    $('#addDataModal').modal('hide');

}


// shows new add data form
function showAddForm() {
    $("#addbtn").show();
    $("#addDataModal").modal('show');
    $('#modal-title').text('Insert student information');
    $("#updatebtn").hide();
    $('#studentName').val("");
    $('#studentAge').val("");
    $('#studentAddress').val("");

}

// for deleting data
function deleteStudentData(id) {
    // alert(id)
    //var id =;
    var conformAlert = confirm("Do you want to delete this record!")


    if (conformAlert) {
        for (let i = 0; i < obj.length; i++) {
            // debugger
            if (obj[i].id == id) {
                obj.splice(i, 1);
                listStudent();
                break;
            }
        }
    }


}

// shows update's form
function showUpdateForm(id) {
    tempRecId = id;
    //alert(c)
    $("#addbtn").hide();
    $("#updatebtn").show()
    $('#addDataModal').modal('show');
    $('#modal-title').text('Update student information');

    for (i = 0; i < obj.length; i++) {
        if (obj[i].id == id) {
            $('#studentName').val(obj[i].name);
            $('#studentAge').val(obj[i].age);
            $('#studentAddress').val(obj[i].address);
            $('#englishMarks').val(obj[i].english);
            $('#mathsMarks').val(obj[i].maths);
            $('#scienceMarks').val(obj[i].science);
            $('#total').val(obj[i].total);
            //updateStudentData(id)
            break
        }
    }
}

// for updating existing data
function updateStudentData() {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].id == tempRecId) {
            // var objIndex = obj.findIndex((obj => obj.id == id));
            obj[i].name = $("#studentName").val();
            obj[i].age = $("#studentAge").val();
            obj[i].address = $("#studentAddress").val();
            obj[i].english = $("#englishMarks").val();
            obj[i].maths = $("#mathsMarks").val();
            obj[i].science = $("#scienceMarks").val();
            obj[i].total = $("#total").val();
            break
        }
    }
    listStudent()

    $('#addDataModal').modal('hide');
}


function sortButton() {
    $("#dropDown").empty();
    var dropDown = "";
    for (let i = 0; i < obj.length; i++) {
        dropDown += "<li><a class='dropdown-item' href='#' onclick='getSearchValue(\"" + obj[i].name + "\")'>" + obj[i].name + "</a></li>"
    }
    $("#dropDown").append(dropDown)
    $("#clearFilter").show()

}

$("#clearFilter").hide()

function getSearchValue(item) {
    var name=item
    var filter_rec = obj.filter((key) => key.name === name)
    
    obj = filter_rec
    listStudent();
    
    console.log("filter by name Vinesh", filter_rec)
    $("#clearFilter").show()
}

// clear filter button will refresh 
function clearFilter() {
    location.reload()
}

// shortcut keys functions
$(document).on('keydown', function (e) {
    if ((e.metaKey || e.altKey) && (String.fromCharCode(e.which).toLowerCase() === 'a')) {
        $("#addDataModal").modal('show');
        $("#updatebtn").hide();
    }
}); // alt + A -- opens a new data form 

$(document).on('keydown', function (e) {
    if ((e.metaKey || e.altKey) && (String.fromCharCode(e.which).toLowerCase() === 'q')) {
        $('#studentName').val("Vinesh Gurram");
        $('#studentAge').val("21");
        $('#studentAddress').val("Ulwe");
        $('#englishMarks').val("90");
        $('#mathsMarks').val("90");
        $('#scienceMarks').val("90");
    }
}); // alt + Q -- fills a data 



