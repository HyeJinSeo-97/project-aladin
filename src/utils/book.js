export const getDiscountRate = (priceSales, priceStandard) => {
  if (!priceSales || !priceStandard) return

  return 100 - (priceSales / priceStandard) * 100
}

export const getYYYYMM = (date, unit = '-') => {
  if (!date) return

  return new Date(date).getFullYear() + unit + ('0' + (new Date(date).getMonth() + 1)).slice(-2)
}
