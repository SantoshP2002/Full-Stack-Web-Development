# Mongo-Aggregations-1-Level-I

## Que. 00 : Write Mongo query to retrieve documents from the products where supplier_id is 3 .

### Answer : `db.suppliers.aggregate({$match:{_id: 2}})`

## Que. 00 : Write Mongo query to retrieve the documents from the orders collection with "status": "shipped" .

### Answer : `db.orders.aggregate({$match: {status: "shipped"}})`

## Que. 00 : Write Mongo query to find buyers who from state CA ?

### Answer : `db.buyers.aggregate({$match: {"address.state" : "CA"}})`

## Que. 00 : Write Mongo query to retrieve the amount,paymentstatus and paymentMethod from payments.

### Answer : ``

## Que. 00 : Write Mongo query to retrieve documents from the orders with out \_id.

### Answer : ``

## Que. 00 : Write Mongo query to retrieve name,price from the products .

### Answer : ``

## Que. 00 : Write Mongo query to find buyers city and zip code ?

### Answer : ``

## Que. 00 : Write Mongo query to find buyers name,email, city and zip code ?

### Answer : ``

## Que. 00 : Write Mongo query to find suppliers name and phone ?

### Answer : ``

## Que. 00 : Write Mongo query to find buyers name,email, city and zip code ?

### Answer : ``

## Que. 00 : Write Mongo query to find buyers city and zip code ?

### Answer : ``

## Que. 00 : Write Mongo query to retrieve name,price from the products .

### Answer : ``