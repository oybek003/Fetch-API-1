const kartochki = document.getElementById('kartochki');

const dark = document.getElementById("dark-mode");
const body = document.querySelector("body");

const searchInput = document.getElementById('searchInput');

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    kartochki.innerHTML = '';
    data.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.setAttribute('data-name', element.name.toLowerCase());

        card.innerHTML = `
            <h1>${element.name}</h1>
            <h1>👤</h1>
            <p>📧 ${element.email}</p>
            <h2>📞 ${element.phone}</h2>
            <p>🏡 ${element.address?.street}</p> 
        `;
        kartochki.appendChild(card);
    });
});

dark.addEventListener('click', () => {
    if (body.classList.toggle('dark-mode')) {
        dark.textContent = '☀️';
    } else {
        dark.textContent = '🌙';
    }
});

function searchProduct() {
    const searchValue = searchInput.value.toLowerCase().trim();
    const kartochka = Array.from(document.querySelectorAll('.card'));

    kartochka.forEach(card => {
        const productName = card.getAttribute('data-name'); 
        card.style.display = productName.includes(searchValue) ? 'block' : 'none';
    });
}

searchInput.addEventListener('input', searchProduct);
