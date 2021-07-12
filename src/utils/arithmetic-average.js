const arithmeticAverage = (restaurant) => {
    return restaurant.rate.reduce((a,b) => a + b, 0) / restaurant.rate.length;
}

export default arithmeticAverage;
