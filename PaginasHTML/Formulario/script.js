function showData() {
    // Coletando os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    // Exibindo os dados coletados
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;
    document.getElementById('displayAge').textContent = age;
    document.getElementById('displayGender').textContent = gender;
    document.getElementById('displayMessage').textContent = message;

    // Mostrando a div com os dados
    document.getElementById('result').style.display = 'block';
}
