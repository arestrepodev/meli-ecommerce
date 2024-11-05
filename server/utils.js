
export const formatPrice = (amount, currency) => {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

export const mappedDataSearch = (results, author) => {
  return {
    author: { ...author },
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

export const mappedDataDetails = (data, author) => { 
  return {
    author: {
      name: author?.name,
      lastname: author?.lastname,
    },
    item: {
      id: data?.id,
      title: data?.title,
      price: {
        currency: data?.currency_id,
        amount: formatPrice(data?.price, data?.currency_id),
        decimals: 0,
      },
      description: data?.description || 'Sin descripcion',
      picture: data?.pictures[0]?.secure_url,
      condition: data?.condition,
      free_shipping: data?.shipping?.free_shipping,
    },
  };
};