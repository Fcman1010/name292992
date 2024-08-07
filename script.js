function guessAge() {
    const color = document.getElementById('favoriteColor').value;
    const pet = document.getElementById('pet').value;
    let ageGuess = 0;

    // Simple logic to guess age based on selected options
    if (color === 'red') {
        ageGuess += 10;
    } else if (color === 'blue') {
        ageGuess += 20;
    } else if (color === 'green') {
        ageGuess += 30;
    } else if (color === 'yellow') {
        ageGuess += 40;
    }

    if (pet === 'dog') {
        ageGuess += 5;
    } else if (pet === 'cat') {
        ageGuess += 15;
    } else if (pet === 'bird') {
        ageGuess += 25;
    } else if (pet === 'fish') {
        ageGuess += 35;
    }

    document.getElementById('result').innerText = `เราทายว่าคุณอายุประมาณ ${ageGuess} ปี`;
}
