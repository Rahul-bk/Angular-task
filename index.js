function Submit() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const dob = document.getElementById('dob').value;
    const role = document.getElementById('role').value;
    const phonenumber = document.getElementById('phonenumber').value;
    const gender = document.getElementById('gender').value;

    localStorage.setItem("NAME", name);
    localStorage.setItem("ADDRESS", address);
    localStorage.setItem("DOB", dob);
    localStorage.setItem("ROLE", role);
    localStorage.setItem("PHONENUMBER", phonenumber);
    localStorage.setItem("GENDER", gender);


}