import mongoose from 'mongoose';


const { Schema } = mongoose;
const schema = Schema({
  name: String,
  price: Number,
  image: String,
  category: String,
  slug: {
    type: String,
    unique: true,
  },
}, {
  timestamps: true,
});

// function to slugify a name
function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

// middleware
// make sure that the slug is created from the name
schema.pre('save', function (next) {
  this.slug = slugify(this.name);
  next();
});

const Product = mongoose.model('Product', schema);

export default Product;
