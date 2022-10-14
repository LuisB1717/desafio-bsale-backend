const Mysql = require("../../config/mysql");
const CategoryRepository = require("../domain/category_repository");

class MysqCategoryRepository extends CategoryRepository {
  async getAll() {
    const query = `SELECT * FROM category`;
    const results = await Mysql.doQuery(query);
    return results;
  }
}

module.exports = MysqCategoryRepository;
