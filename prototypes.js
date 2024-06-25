const euphoria = "literally i had a dream about this last night     ";

String.prototype.trueLength = function() {
    return this.trim().split(' ').reduce((acc, word) => acc + word.length, 0);
}

console.log(euphoria.length);
console.log(euphoria.trueLength());