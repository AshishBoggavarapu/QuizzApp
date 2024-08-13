document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var favoriteCar = document.getElementById('favorite-car').value;
    var carOpinion = document.getElementById('car-opinion').value;

    document.getElementById('result-car').textContent = favoriteCar.charAt(0).toUpperCase() + favoriteCar.slice(1);
    document.getElementById('result-opinion').textContent = carOpinion;

    document.getElementById('results').classList.remove('hidden');
});
