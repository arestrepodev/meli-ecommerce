
export const formatPrice = (amount, currency) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const mappedData = (results) => {
  return {
    author: {
      name: "Arnold",
      lastname: "Restrepo Hernandez",
    },
    items: results.map(item => ({
      categories: item.category_id ? [item.category_id] : [],
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: formatPrice(item.price, item.currency_id),
        decimals: 0,
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping && item.shipping.free_shipping,
    })),
  };
};