function show() {

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    let gender = "";
    const genders = document.getElementsByName("gender");

    for (let i = 0; i < genders.length; i++) {
        if (genders[i].checked) {
            gender = genders[i].value;
        }
    }

    let qualification = [];
    const qualifications = document.getElementsByName("qualify");

    for (let i = 0; i < qualifications.length; i++) {
        if (qualifications[i].checked) {
            qualification.push(qualifications[i].value);
        }
    }

    const country = document.getElementById("country").value;
    const dob = document.getElementById("dob").value;

    const image = document.getElementById("image").files[0];

    let imageURL = "";

    if (image) {
        imageURL = URL.createObjectURL(image);
    }

    document.getElementById("result").innerHTML = `

        <img src="${imageURL}" width="150"><br><br>

        <b>Name:</b> ${name}<br><br>

        <b>Email:</b> ${email}<br><br>

        <b>Password:</b> ${password}<br><br>

        <b>Phone:</b> ${phone}<br><br>

        <b>Gender:</b> ${gender}<br><br>

        <b>Qualification:</b> ${qualification.join(", ")}<br><br>

        <b>Country:</b> ${country}<br><br>

        <b>Date of Birth:</b> ${dob}
    `;
}