const isInRange = (number, { start = 0, end }) => {
    if (typeof number !== 'number' && typeof number !== 'bigint') {
        throw new TypeError('The number parameter must be of type number or bigint.');
    }

    if (typeof start !== 'number' && typeof start !== 'bigint') {
        throw new TypeError('The start parameter must be of type number or bigint.');
    }

    if (typeof end !== 'number' && typeof end !== 'bigint') {
        throw new TypeError('The end parameter must be of type number or bigint.');
    }

    // Converte start e end in BigInt se sono di tipo number
    if (typeof start === 'number') {
        start = BigInt(start);
    }
    if (typeof end === 'number') {
        end = BigInt(end);
    }

    // Verifica se start è maggiore di end e scambia i due valori se necessario
    if (start > end) {
        [start, end] = [end, start];
    }

    return number >= start && number <= end;
};

export default isInRange;
