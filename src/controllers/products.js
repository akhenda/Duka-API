import { Product } from 'src/models';


// Retrieve and return all products from the database.
export const findAll = (req, res) => {
  const query = {};
  const select = 'name image category price slug';
  const limit = Math.abs(req.query.limit) || 10;
  const page = (Math.abs(req.query.page) || 1) - 1;
  const querySort = req.query.sort || { name: 'asc' };
    
  Product
    .find(query)
    .select(select)
    .limit(limit)
    .skip(page * limit)
    .sort(querySort)
    .exec((error, products) => {
      // if (error) {
      //   res.status(500).send({ message: 'Some error occurred while retrieving products.' });
      // }

      // if (products.length === 0) {
      //   return res.status(404).send({ message: 'Duka has no products at the moment' });
      // }

      Product.count().exec((err, count) => {
        const pages = Math.ceil(count / limit);

        res.json({
          data: products,
          meta: {
            limit,
            total: count,
            page: page + 1,
            pages: pages < 1 ? 1 : pages,
          },
        });
      });
    });
};

// Find a single product with a productId.
export const findOne = (req, res) => {
  const notFoundMsg = item => `Product with id ${item} not found`;

  Product.findById(req.params.productId, (err, product) => {
    const { productId } = req.params;

    if (err) {
      if (err.kind === 'ObjectId') return res.status(404).send({ message: notFoundMsg(productId) });

      // return res.status(500).send({ message: `Error retrieving product with id ${productId}` });
    } 

    // if (!product) return res.status(404).send({ message: notFoundMsg(productId) });

    res.json({
      data: product,
      meta: {
        urls: {
          self: `/api/v1/products/${product.id}`,
          collection: '/api/v1/products',
        },
      },
    });
  });
};

/**
 * Seed the database
 */
export const seedProducts = (req, res) => {
  // create some products
  const products = require('./fixtures/products.json');

  // use the Product model to insert/save
  products.forEach((product) => {
    const newProduct = new Product(product);
    newProduct.save();
  });

  // seeded!
  res.status(201).json({ status: 'ok', message: 'Database seeded!' });
};
