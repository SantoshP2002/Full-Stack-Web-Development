## Que 01:  Find the names of employees who work in the "Finance" department and have made sales on or after "2023-09-16.
### Ans: ` db.Sales_Collection.aggregate([{$match: {date: {$gte: new ISODate("2023-09-16")}}}, {$lookup: {from: "employees", localField: "employeeId", foreignField: "_id", as: "employee_info"}}, {$match: {"employee_info.department": "Finance"}}, {$group: {_id: "$employee_info._id", name: {$first: "$employee_info.name"}}}, {$project: {_id:1, name:1}}])`

## Que 02: Find the total sales count and total sales amount for each employee who has made a sale, and sort the results by total sales amount in descending order.
### Ans: `db.Sales_Collection.aggregate([{$project: {_id: "$employee_id", totalSalesAmount: {$sum: "$amount"}, totalSalesCount: {$sum:1}}}, {$lookup: {from: "employees", localField: "_id", foreignField: "_id", as: "employee_info"}}, {$unwind: "$employee_info"}, {$project: {_id:1,  name: "$employee_info.name"  ,totalSalesAmount: 1,  totalSalesCount: 1}}, {$sort: {totalSalesAmount: -1}}])`

## Que 03: Retrieve a list of departments with more than 10 employees
### Ans: ``
