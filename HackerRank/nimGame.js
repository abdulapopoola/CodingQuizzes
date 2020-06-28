function nimGame(pile) {
    return pile.reduce((curr, acc) => curr ^ acc, 0) ? 'First' : 'Second';
}
