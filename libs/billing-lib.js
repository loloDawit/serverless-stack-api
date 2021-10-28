export default function calculateCost(storage) {
    // eslint-disable-next-line no-nested-ternary
    const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;

    return rate * storage * 100;
}
