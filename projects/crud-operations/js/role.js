teacherList()
        sortButton()
        var tempRecId = 0;

        function teacherList() {
            $('#form-data tbody').empty()
            var teacherData = "";
            for (let i = 0; i < role.length; i++) {
                teacherData += "<tr>" +
                    "<th>" + (i + 1) + "</th>" +
                    "<td>" + role[i].name + "</td>" +
                    "<td>" + role[i].designation + "</td>" +
                    "<td>" + "<button class='btn btn-info' onclick='showUpdateForm(" + role[i].id + ")'>" + "Edit" + "</button>" +
                    "<td>" + "<button class='btn btn-danger'  onclick='deleteTeacherData(" + role[i].id + ")'>" + "Delete" + "</button>" +
                    "</tr>";

            }
            // console.log(teacherData)
            $('#form-data tbody').append(teacherData)
        }


        function addRoleData() {

            var name, designation;
            name = document.getElementById("rname").value;
            designation = document.getElementById("designation").value

            var objForm = { name: name, designation: designation };
            role.push(objForm);
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

            for (i = 0; i < role.length; i++) {
                if (role[i].id == id) {
                    $('#rname').val(role[i].name);
                    $('#designation').val(role[i].designation);
                    break
                }
            }
        }






        // // for updating existing data
        function updateTeacherData() {
            for (let i = 0; i < obj.length; i++) {
                if (role[i].id == tempRecId) {
                    // var objIndex = obj.findIndex((obj => obj.id == id));
                    role[i].name = $("#rname").val();
                    role[i].designation = $("#designation").val();
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

            for (i = 0; i < role.length; i++) {
                if (role[i].id == tempRecId) {
                    $('#rname').val(role[i].name);
                    $('#designation').val(role[i].designation);
                    updateTeacherData(id)
                    break
                }
            }
        }


        // shows new add data form
        function showAddForm() {
            $("#addDataModal").modal('show');
            $("#addbtn").show();
            $('#modal-title').text('Add role information');
            $("#updatebtn").hide();
            $('#designation').val("");
            $('#rname').val("");
        }

        function deleteTeacherData(id) {
            // alert(id)
            var conformAlert = confirm("Do you want to delete this record!")
            if (conformAlert) {
                for (let i = 0; i < role.length; i++) {
                    // debugger
                    if (role[i].id == id) {
                        role.splice(i, 1);
                        teacherList();
                        break;
                    }
                }
            }
        }


        function sortButton() {
            $("#dropDown").empty();
            var dropdown = "";
            for (let i = 0; i < role.length; i++) {
                dropdown += "<li><a class='dropdown-item' href='#' onclick='getSearchValue(\"" + role[i].name + "\")'>" + role[i].name + "</a></li>"
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
            var filter_rec = role.filter((key) => key.name === name)

            role = filter_rec
            teacherList();
            console.log("filter by name Vinesh", filter_rec)
            $("#clearFilter").show()

        }


        function clearFilter() {
            location.reload()
        }
