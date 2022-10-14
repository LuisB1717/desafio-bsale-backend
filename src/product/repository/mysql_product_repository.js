const Mysql = require("../../config/mysql");
const ProductRepository = require("../domain/product_repository");

class MysqlProductRepository extends ProductRepository {
  async getProductsByCategory({ category, q }) {
    const query = `
        SELECT * FROM product WHERE product.category = ? AND product.name LIKE ?
        `;
    const results = await Mysql.doQuery(query, [category, `%${q}%`]);
    return results;
  }
}

module.exports = MysqlProductRepository;
