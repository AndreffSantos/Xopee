export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === "" && query === "") {
    // eslint-disable-next-line no-template-curly-in-string
    const url = "https://api.mercadolibre.com/sites/MLB/search?&q=${query}";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } else {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
}