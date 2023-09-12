
        teacherList()
        sortButton()
        var tempRecId = 0;

        function teacherList() {
            $('#form-data tbody').empty()
            var teacherData = "";
            for (let i = 0; i < user.length; i++) {
                teacherData += "<tr>" +
                    "<th>" + (i + 1) + "</th>" +
                    "<td>" + user[i].name + "</td>" +
                    "<td>" + user[i].address + "</td>" +
                    "<td>" + user[i].roleId + "</td>" +
                    "<td>" + "<button class='btn btn-info' onclick='showUpdateForm(" + user[i].id + ")'>" + "Edit" + "</button>" +
                    "<td>" + "<button class='btn btn-danger'  onclick='deleteTeacherData(" + user[i].id + ")'>" + "Delete" + "</button>" +
                    "</tr>";

            }
            // console.log(teacherData)
            $('#form-data tbody').append(teacherData)
        }


        function adduserData() {

            var name, designation,address;
            name = document.getElementById("rname").value;
            address = document.getElementById("address").value;
            designation = document.getElementById("option").value

            var objForm = { name: name,address:address, designation: designation };
            user.push(objForm);
            // sortButton();
            teacherList()
            $('#addDataModal').modal('hide');

        }

        function showUpdateForm(id) {
            tempRecId = id;
            //alert(c)
            $("#addbtn").hide();
            $("#updatebtn").show()
            $('#addDataModal').modal('show');
            $('#modal-title').text('Update student information');

            for (i = 0; i < user.length; i++) {
                if (user[i].id == id) {
                    $('#rname').val(user[i].name);
                    $('#designation').val(user[i].designation);
                    break
                }
            }
        }






        // // for updating existing data
        function updateTeacherData() {
            for (let i = 0; i < obj.length; i++) {
                if (user[i].id == tempRecId) {
                    // var objIndex = obj.findIndex((obj => obj.id == id));
                    user[i].name = $("#rname").val();
                    user[i].designation = $("#address").val();
                    break
                }
            }
            teacherList()
            $('#addDataModal').modal('hide');
        }


        // shows update's form
        function showUpdateForm(id) {
            tempRecId = id;
            // alert(tempRecId)
            $("#addbtn").hide();
            $("#updatebtn").show()
            $('#addDataModal').modal('show');
            $('#modal-title').text('Update student information');

            for (i = 0; i < user.length; i++) {
                if (user[i].id == tempRecId) {
                    $('#rname').val(user[i].name);
                    $('#designation').val(user[i].designation);
                    updateTeacherData(id)
                    break
                }
            }
        }


        // shows new add data form
        function showAddForm() {
            $("#addDataModal").modal('show');
            $("#addbtn").show();
            $('#modal-title').text('Add user information');
            $("#updatebtn").hide();
            $('#designation').val("");
            $('#rname').val("");
        }

        function deleteTeacherData(id) {
            // alert(id)
            var conformAlert = confirm("Do you want to delete this record!")
            if (conformAlert) {
                for (let i = 0; i < user.length; i++) {
                    // debugger
                    if (user[i].id == id) {
                        user.splice(i, 1);
                        teacherList();
                        break;
                    }
                }
            }
        }


        function sortButton() {
            $("#dropDown").empty();
            var dropdown = "";
            for (let i = 0; i < user.length; i++) {
                dropdown += "<li><a class='dropdown-item' href='#' onclick='getSearchValue(\"" + user[i].name + "\")'>" + user[i].name + "</a></li>"
            }
            $("#dropDown").append(dropdown)
            // console.log(dropdown)
        }

        $("#clearFilter").hide()

        function getSearchValue(item) {
            var name = item
            console.log(name)
            // debugger
            // var showdata="";
            var filter_rec = user.filter((key) => key.name === name)

            user = filter_rec
            teacherList();
            console.log("filter by name Vinesh", filter_rec)
            $("#clearFilter").show()

        }


        function clearFilter() {
            location.reload()
        }

        var roleData = ""
        for (let i = 0; i < role.length; i++) {
            roleData += "<option value='1'>" + role[i].designation + "</option>"
        }
        console.log(roleData)
        $("#option").append(roleData)

        
// shortcut keys functions
$(document).on('keydown', function (e) {
    if ((e.metaKey || e.altKey) && (String.fromCharCode(e.which).toLowerCase() === 'a')) {
        $("#addDataModal").modal('show');
        $("#updatebtn").hide();
    }
}); // alt + A -- opens a new data form 

$(document).on('keydown', function (e) {
    if ((e.metaKey || e.altKey) && (String.fromCharCode(e.which).toLowerCase() === 'q')) {
        $('#rname').val("Warren");
        // $('#age').val("50");
        $('#address').val("US");
    }
}); // alt + Q -- fills a data 