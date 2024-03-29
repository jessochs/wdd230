const businessUrl = 'https://jessochs.github.io/wdd230/chamber/data/members.JSON';
const cards = document.querySelector('div.cards');


const displayBusinesses = (businesses) => {
    // const cards = document.querySelector('div.cards');

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('p');
        let membership = document.createElement('p');
        let image = document.createElement('img');

        name.textContent = business.name;
        image.setAttribute('src', business.img);
        image.setAttribute('alt', 'business logo');
        image.setAttribute('width', '100');
        image.setAttribute('height', '50')
        phone.textContent = business.phone;
        address.textContent = business.address;
        website.textContent = business.website;
        membership.textContent = business.membership;

        card.appendChild(name);
        
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(image);

        cards.appendChild(card);
    });
}

async function getBusinessData() {
    const response = await fetch(businessUrl);
    const data = await response.json();

    displayBusinesses(data.businesses);
}

getBusinessData();

// grid/list

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

cards.classList.add("grid");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

listbutton.addEventListener("click", () => {
	// example using arrow function
	cards.classList.toggle("list");
	
});

gridbutton.addEventListener("click", () => {
    cards.classList.remove("list");
});