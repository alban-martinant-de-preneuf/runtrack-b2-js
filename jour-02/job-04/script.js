const formAddStudent = document.getElementById('form-add-student');


async function myRegisterStudent(formAddStudent) {
    const formData = new FormData(formAddStudent);
    const response = await fetch('request.php', {
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        const result = await response.text();
        alert(result);
    }
}

formAddStudent.addEventListener('submit', (e) => {
    e.preventDefault();
    myRegisterStudent(formAddStudent);
});