const { ObjectId } = require('mongodb');
const connection = require('./connection');
const {
  errNotFound,
  errWrongIdFormatSale,
} = require('../helper/index');

const create = async (sales) => {
  const db = await connection();
  const sale = await db.collection('sales').insertOne({ itensSold: sales });
  // console.log(sale.ops[0]);
  return sale.ops[0];
};

const getAll = async () => {
  const db = await connection();
  const sales = await db.collection('sales').find({}).toArray();
  return { sales };
};

const getById = async (id) => {
  if (!ObjectId.isValid(id)) return errNotFound;

  const db = await connection();
  const sale = await db.collection('sales').findOne(ObjectId(id));
  return sale;
};

const update = async (id, sale) => {
  const { productId, quantity } = sale;
  if (!ObjectId.isValid(id)) {
    return errNotFound;
  }
  const db = await connection();
  await db.collection('sales').updateOne({ _id: ObjectId(id) },
    { $set: { itensSold: { productId, quantity } } });
  const updated = await db.collection('sales').findOne({ _id: ObjectId(id) });
  // if (!updated) {
  //   return errNotFound;
  // }
  return updated;
};

const exclude = async (id) => {
  if (!ObjectId.isValid(id)) {
    return errWrongIdFormatSale;
  }
  const deleteId = await getById(id);
  if (!deleteId) {
    return errWrongIdFormatSale;
  }

  const db = await connection();
  await db.collection('sales').deleteOne({ _id: ObjectId(id) });
  // const excluded = await db.collection('sales').findOne({ _id: ObjectId(id) });
  // return { deleteId, excluded };
  return deleteId;
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  exclude,
};