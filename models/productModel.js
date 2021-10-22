const { ObjectId } = require('mongodb');
const connection = require('./connection');

// busca todos os produtos e transforma em array com vários objetos;
const getAll = async () => {
  const db = await connection();
  return db.collection('products').find({}).toArray();
};

const getById = async (id) => {
  // isValid é uma função nativa do mongo
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  return db.collection('products').findOne({ _id: ObjectId(id) });
};

const create = async ({ name, quantity }) => {
  const db = await connection();
  const inserted = await db.collection('products').insertOne({ name, quantity });
  
  return { _id: inserted.insertedId, name, quantity };
};

const update = async ({ id, name, quantity }) => {
    // isValid é uma função nativa do mongo
    if (!ObjectId.isValid(id)) {
      return null;
    }
  const db = await connection();
  await db.collection('products').updateOne({ _id: ObjectId(id) }, { $set: { name, quantity } });
  // return { id, name, quantity };
  const updated = await db.collection('products').findOne({ _id: ObjectId(id) });
  return updated;
};

const exclude = async ({ id }) => {
    // isValid é uma função nativa do mongo
    if (!ObjectId.isValid(id)) {
      return null;
    }
    const db = await connection();
    const excludeId = await getById();
    await db.collection('products').deleteOne({ _id: ObjectId(id) });
    const excluded = await db.collection('products').findOne({ _id: ObjectId(id) });
    return { excludeId, excluded };
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
};