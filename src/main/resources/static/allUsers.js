allUsers();

function allUsers() {
    let tBody = document.getElementById("tBody");
    tBody.innerHTML = "";
    fetch('http://localhost:8080/api/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(function (user) {
                var row = tBody.insertRow();
                row.setAttribute("id", user.id);
                var cell0 = row.insertCell();
                cell0.innerHTML = user.id;
                var cell1 = row.insertCell();
                cell1.innerHTML = user.name;
                var cell2 = row.insertCell();
                cell2.innerHTML = user.surname;
                var cell3 = row.insertCell();
                cell3.innerHTML = user.department;
                var cell4 = row.insertCell();
                cell4.innerHTML = user.salary;
                var cell5 = row.insertCell();
                cell5.innerHTML = user.username;
                var cell6 = row.insertCell();
                cell6.innerHTML = allRoles(user).textContent;
                var cell7 = row.insertCell();
                cell7.innerHTML =
                    '<button type="button" onclick="modalEdit(' + user.id + ')" class="btn btn-info">Edit</button>';
                var cell8 = row.insertCell();
                cell8.innerHTML =
                    '<button type="button" onclick="modalDelete(' + user.id + ')" class="btn btn-danger">Delete</button>';
            })
        });
}