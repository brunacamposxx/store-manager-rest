const { ObjectId } = require('mongodb');
const connection = require('./connection');
const {
  errNotFound,
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

module.exports = {
  create,
  getAll,
  getById,
};