const GetProducts = require("../services/get_products_by_category");
const MysqlProductRepository = require("../repository/mysql_product_repository");

async function getProducts(req, res) {
  try {
    const { category, q } = req.query;
    const getProducts = new GetProducts(new MysqlProductRepository());
    const result = await getProducts.call({ category, q });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500), res.send(error.message);
  }
}

module.exports = { getProducts };
