function getPriceAfterDiscount(price: number, discountPercentage: number): number {
    if (price <= 0 || discountPercentage < 0 || discountPercentage > 100) {
        throw new Error('Invalid price or discount percentage');
    }

    const discountAmount = (price * discountPercentage) / 100;
    const discountedPrice = price - discountAmount;

    return discountedPrice;
}

export default getPriceAfterDiscount;
