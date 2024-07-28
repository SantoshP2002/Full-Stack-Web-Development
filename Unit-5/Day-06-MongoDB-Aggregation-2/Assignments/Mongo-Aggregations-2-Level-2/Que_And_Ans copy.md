## Que 01: Write Mongo query to retrieve documents from the orders in ascending order by total.
### Ans :`db.orders.aggregate([{$sort: {total:1}}]) `

## Que 02: Write Mongo query to retrieve the oldest paymentMethod from the payments collection as "_id".
### Ans :`db.payments.aggregate([{$sort: {date:1}}, {$limit: 1}, {$project: {_id: "$paymentMethod"}}])`

## Que 03: Write Mongo query to retrieve 2nd and 3rd buyers from the buyers collection.
### Ans :` db.buyers.aggregate([{$sort: {_id:1}}, {$skip: 1}, {$limit: 2}])`

## Que 04: Write Mongo query to retrieve the most Expensive product from order_details.
### Ans :`db.order_details.aggregate([{$sort: {price: -1}}, {$limit: 1}])`

## Que 05: Write Mongo query to retrieve the first order from the orders as per the order_date.
### Ans :`db.orders.aggregate([{$sort: {order_date: 1}}, {$limit: 1}])`

## Que 06: Write Mongo query to retrieve the last 3 orders from the orders collection who have less total amount.
### Ans :`db.orders.aggregate([{$sort: {order_date: 1}}, {$limit: 3}])`

## Que 07: Write Mongo query to retrieve the most recent shipped order from the orders collection.
### Ans :`db.orders.aggregate([{$match: {status: 'shipped'}}, {$sort: {"ship_date": -1}}, {$limit: 1}])`

## Que 08: Write Mongo query to get the total revenue from all orders
### Ans :`db.orders.aggregate([{}])`

## Que 09: Write Mongo query to retrieve all the orders that shipped before 2022-05-26
### Ans :`db.orders.aggregate([{$group: {"_id" : null, "total": {$sum: "$total"}}}, {$project: {_id: 0, total: 1}}])`

## Que 10: Write Mongo query to find the maximum price as maxPrice of products and their names as name for each category.
### Ans :` db.products.aggregate([{$sort: {"category_id": 1, "price": -1}}, {$group: {"_id": "$category_id", "maxPrice": {"$first": "$price"}, "productName": {"$first": "$name"}}}, {$project: {"_id": 0, "category": "$_id", "maxPrice": 1, "productName": 1}}])`

## Que 11: Write Mongo query to find Most used payment Method as paymentMethod and the number of time it is used as count.
### Ans :`db.payments.aggregate([{$group: {"_id": "$paymentMethod", "count": {"$sum": 1}}}, {"$sort": {"count": -1}}, {"$limit": 1}, {$project: {"_id": 0, "paymentMethod": "$_id", "count": 1}}])`

## Que 12: Write Mongo query to find the total count of orders by status.
### Ans :`db.orders.aggregate([{$group: {"_id": "$status",  "count": {"$sum": 1}}}, {project: {"_id": 0, "status": "$_id", "count": 1}}])`

## Que 13: Write Mongo query to retrieve the orders grouped by customer_id with the max total
### Ans :`db.orders.aggregate([{$sort: {" customer_id": 1, " total": -1}}, {$group: {"_id": "$customer_id", "maxTotal": {"$first": "$total"}, "orderDetails": {"$first": "$$ROOT"}}}, {"$replaceRoot": {"newRoot": "$orderDetails"}}, {$project: {"_id": 0, "customer_id": 1, "maxTotal": 1, "orderDetails": 1}}])`
