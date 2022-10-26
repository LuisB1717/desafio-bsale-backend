/**
 * Caso de uso de obtener las categorías.
 */
class GetCategories {
  constructor(categoryRepository) {
    this.categoryRepository = categoryRepository;
  }

  async call() {
    const results = await this.categoryRepository.getAll();
    return results;
  }
}

module.exports = GetCategories;
