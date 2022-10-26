/**
 * Caso de uso de obtener los productos.
 */
class GetProducts {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async call({ category, q }) {
    const results = await this.productRepository.getProducts({
      category,
      q,
    });
    return results;
  }
}

module.exports = GetProducts;
