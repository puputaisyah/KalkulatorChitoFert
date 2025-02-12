// Sample data
const fertilizerData = {
    padi: {
        spray: { dose: 2, water: 500 }, // kg per hectare
        granular: { dose: 150, water: 0 }
    },
    jagung: {
        spray: { dose: 1.5, water: 400 },
        granular: { dose: 120, water: 0 }
    }
};

function calculateDosis() {
    const plantType = document.getElementById('plant-type').value;
    const area = parseFloat(document.getElementById('area').value);
    const unit = document.getElementById('unit').value;
    const fertilizerType = document.querySelector('input[name="fertilizer-type"]:checked').value;
    
    // Convert area to hectares
    const areaInHectares = unit === 'm2' ? area / 10000 : area;
    
    const data = fertilizerData[plantType][fertilizerType];
    const totalDosis = data.dose * areaInHectares;
    const totalWater = data.water * areaInHectares;
    
    document.getElementById('fertilizer-result').textContent = 
        `Dosis Pupuk: ${totalDosis.toFixed(2)} kg`;
    
    if(fertilizerType === 'spray') {
        document.getElementById('water-result').textContent = 
            `Kebutuhan Air: ${totalWater.toFixed(2)} liter`;
    } else {
        document.getElementById('water-result').textContent = '';
    }
}

// Weather Widget (Example with mock data)
function loadWeather() {
    const weatherContainer = document.getElementById('weather-container');
    const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    
    days.forEach(day => {
        const weatherCard = document.createElement('div');
        weatherCard.className = 'weather-card';
        weatherCard.innerHTML = `
            <h4>${day}</h4>
            <i class="fas fa-sun"></i>
            <p>32°C</p>
        `;
        weatherContainer.appendChild(weatherCard);
    });
}

// Initialize Map
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -6.2088, lng: 106.8456},
        zoom: 12
    });
}

// Navigation System
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('href');
        document.querySelectorAll('section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(sectionId).classList.add('active');
    });
});

// Initial Load
document.addEventListener('DOMContentLoaded', () => {
    loadWeather();
    // Load other initial data
});