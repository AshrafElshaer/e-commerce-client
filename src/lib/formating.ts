export const formatPrice = (price: number) => {
  const f = new Intl.NumberFormat("en-us", {
    currency: "USD",
    style: "currency",
  });

  return f.format(price);
};

export const formatDate = (date: string) => {
  const f = new Intl.DateTimeFormat("en-us", {
    month: "long",
    day: "numeric",
    year: "2-digit",
  });
  return f.format(new Date(date));
};

// number.toLocaleString(undefined, { minimumFractionDigits: 2 })
