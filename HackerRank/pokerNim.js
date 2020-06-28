function pokerNim(k, c) {
    return c.reduce((acc, curr) => acc ^ curr, 0) ? 'First' : 'Second';
}
