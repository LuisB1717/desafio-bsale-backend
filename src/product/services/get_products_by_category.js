const Product = require("../domain/product");

class GetProductsByCategory {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async call({ category, q }) {
    const results = await this.productRepository.getProductsByCategory({
      category,
      q,
    });
    return results;
  }
}

module.exports = GetProductsByCategory;
