document.addEventListener('DOMContentLoaded', () => {
    const popularPlaces = [
        {
            image: 'https://via.placeholder.com/300x200',
            title: 'Paris, France',
            description: 'Explore the city of lights and its iconic landmarks like the Eiffel Tower and Louvre Museum.'
        },
        {
            image: 'https://via.placeholder.com/300x200',
            title: 'New York, USA',
            description: 'Experience the bustling life of New York City, from Times Square to Central Park.'
        },
        {
            image: 'https://via.placeholder.com/300x200',
            title: 'Tokyo, Japan',
            description: 'Discover the unique blend of tradition and technology in Tokyo, from temples to skyscrapers.'
        },
        {
            image: 'https://via.placeholder.com/300x200',
            title: 'Sydney, Australia',
            description: 'Enjoy the stunning views of the Sydney Opera House and the Harbour Bridge.'
        }
    ];

    const popularPlacesContainer = document.getElementById('popular-places');

    function renderPopularPlaces() {
        popularPlacesContainer.innerHTML = '';
        popularPlaces.forEach(place => {
            const placeElement = document.createElement('div');
            placeElement.className = 'place';
            placeElement.innerHTML = `
                <img src="${place.image}" alt="${place.title}">
                <div class="place-details">
                    <h3>${place.title}</h3>
                    <p>${place.description}</p>
                </div>
            `;
            popularPlacesContainer.appendChild(placeElement);
        });
    }

    renderPopularPlaces();
});
