function convert(rate) {
    return Math.round((Number(rate) + Number.EPSILON) * 10) / 100;
}

export default convert;
