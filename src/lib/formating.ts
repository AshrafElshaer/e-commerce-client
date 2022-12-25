export const formatPrice = (price: number) => {
  const f = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  });

  return f.format(price);
};

// number.toLocaleString(undefined, { minimumFractionDigits: 2 })
