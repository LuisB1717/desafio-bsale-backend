const Mysql = require("../../config/mysql");
const ProductRepository = require("../domain/product_repository");

class MysqlProductRepository extends ProductRepository {
  /**
   * Consultar todos los productos o por categoría a la BD.
   * @param {filters} object
   * @param {filters.category} string
   * @param {filters.q} string
   */
  async getProducts({ category, q = "" }) {
    const modifier = category ? "AND product.category = ? " : "";
    const query = `
        SELECT * FROM product WHERE product.name LIKE ? ${modifier}
        `;
    const results = await Mysql.doQuery(query, [`%${q}%`, category]);
    return results;
  }
}

module.exports = MysqlProductRepository;
