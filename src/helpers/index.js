export const propertyPrice = (price) => {
  return Number(price).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
}
