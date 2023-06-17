const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');

        name.textContent = business.name;
        phone.textContent = business.phone;
        address.textContent = business.address;
        website.textContent = business.website;
        membership.textContent = business.membership;

        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(membership);

        cards.appendChild(card);
    });
}

async function getBusinessData() {
    const response = await fetch('json/data.json');
    const data = await response.json();

    displayBusinesses(data.businesses);
}

getBusinessData();