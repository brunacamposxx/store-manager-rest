const { ObjectId } = require('mongodb');
const connection = require('./connection');
const { erroWrongIdFormat } = require('../helper/index');

const getAll = async () => {
  const db = await connection();
  const products = await db.collection('products').find({}).toArray();
  return { products };
};

const getById = async (id) => {
  const db = await connection();
  return db.collection('products').findOne(ObjectId(id));
};

const create = async (product) => {
  const db = await connection();
  const inserted = await db.collection('products').insertOne(product);
  return inserted.ops[0];
};

const getByName = async (name) => {
  const db = await connection();
  const products = await db.collection('products').findOne({ name });
  return products;
};

const update = async (product) => {
  const { id, name, quantity } = product;
  if (!ObjectId.isValid(id)) {
    return erroWrongIdFormat;
  }
  const db = await connection();
  await db.collection('products').updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } });
  const updated = await db.collection('products').findOne({ _id: ObjectId(id) });
  if (!updated) {
    return erroWrongIdFormat;
  }
  return updated;
};

const exclude = async (id) => {
    if (!ObjectId.isValid(id)) {
      return erroWrongIdFormat;
    }
    const excludeId = await getById(id);
    if (!excludeId) {
      return erroWrongIdFormat;
    }

    const db = await connection();
    await db.collection('products').deleteOne({ _id: ObjectId(id) });
    return excludeId;
};

module.exports = {
  getAll,
  getByName,
  getById,
  create,
  update,
  exclude,
};