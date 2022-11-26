window.addEventListener('load', () => {


    const name = localStorage.getItem('NAME');
    const address = localStorage.getItem('ADDRESS')
    const dob = localStorage.getItem('DOB')
    const role = localStorage.getItem('ROLE')
    const phonenumber = localStorage.getItem('PHONENUMBER')
    const gender = localStorage.getItem('GENDER')

    document.getElementById('result-name').innerHTML = name;
    document.getElementById('result-address').innerHTML = address;
    document.getElementById('result-dob').innerHTML = dob;
    document.getElementById('result-role').innerHTML = role;
    document.getElementById('result-phonenumber').innerHTML = phonenumber;
    document.getElementById('result-gender').innerHTML = gender;


})