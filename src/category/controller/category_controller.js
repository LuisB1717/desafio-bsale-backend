const GetCategories = require("../services/get_categories");
const MysqCategoryRepository = require("../repository/mysql_category_repository");

async function getAll(req, res) {
  try {
    const getCategories = new GetCategories(new MysqCategoryRepository());
    const result = await getCategories.call();
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500), res.send(error.message);
  }
}

module.exports = { getAll };
