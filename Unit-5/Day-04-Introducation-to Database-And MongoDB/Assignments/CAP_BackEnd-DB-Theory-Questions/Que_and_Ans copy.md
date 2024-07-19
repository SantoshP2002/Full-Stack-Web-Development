 ###  CAP_BackEnd - DB - Theory Questions

# QUE 01: What is a NoSQL Database, and explain the types of NoSQL database?
## ANS : `A NoSQL database is a non-relational database designed for flexible, scalable storage of data, often used for big data and real-time web applications. The main types are document stores, key-value stores, column-family stores, and graph databases.`

# QUE 02: What is the difference between SQL and NoSQL databases?
## ANS : `SQL databases are relational, using structured query language (SQL) and tables to manage data with fixed schemas. NoSQL databases are non-relational, handling unstructured data with flexible schemas, often optimized for scalability and performance.`

# QUE 03: How to choose between MongoDB and MySQL based on your requirements?
## ANS : `Choose MongoDB for flexible, scalable storage of unstructured data and high write throughput. Opt for MySQL when you need structured data, complex queries, and transactional integrity.`

# QUE 04: What are collections and documents in a MongoDB database?
## ANS : `n MongoDB, a collection is a group of documents, similar to a table in a relational database. A document is a record within a collection, represented as a JSON-like BSON (Binary JSON) object, which stores data in key-value pairs.`

# QUE 05: What is BSON? What is the difference between BSON and JSON?
## ANS : `BSON (Binary JSON) is a binary-encoded serialization of JSON-like documents, designed to be efficient in both storage and traversal. The main difference is that BSON supports additional data types, like int and date, and is more efficient for encoding and decoding large documents compared to JSON.`

# QUE 06: What are MongoDB Compass and MongoDB Shell used for?
## ANS : `MongoDB Compass is a graphical user interface for managing and visualizing data in MongoDB. MongoDB Shell is a command-line interface used for interacting with MongoDB databases, executing queries, and performing administrative tasks.`

# QUE 07: How to create collections in MongoDB?
## ANS : `To create collections in MongoDB, you can use the db.createCollection("collectionName") command in MongoDB Shell or simply insert a document into a non-existing collection, which will create it automatically.`

# QUE 08: What is the difference between insertMany and insertOne?
## ANS : `insertOne adds a single document to a collection, while insertMany adds multiple documents in one operation.`

# QUE 09: What is the difference between deleteOne and deleteMany?
## ANS : `deleteOne removes a single document that matches the filter criteria, while deleteMany removes all documents that match the filter criteria.`

# QUE 10: How to read data in MongoDB? What is the difference between find and findOne?
## ANS : `To read data in MongoDB, use the find method to retrieve multiple documents matching a query, or findOne to retrieve a single document. find returns a cursor to the matching documents, while findOne returns just one document.`

# QUE 11: What is $set in MongoDB?
## ANS : `$set in MongoDB is an update operator used to modify the value of a field in a document or add a new field if it doesn't exist`

# QUE 12: How to filter data using MongoDB?
## ANS : `To filter data in MongoDB, use the find method with a query object specifying the filter criteria. For example, db.collection.find({ field: value }) returns documents that match the criteria.`