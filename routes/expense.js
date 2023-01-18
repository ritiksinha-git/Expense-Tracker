const express= require ('express');
const router= express.Router();
const expenseController = require('../controller/expense')

router.post('/expense/add-expense', expenseController.addExpense)

router.get('/expense/get-expense',expenseController.getExpense)

router.delete('/expense/delete-expense/:id',expenseController.deleteExpense)

router.put('/expense/update-expense/:id', expenseController.updateExpense)

module.exports=router;
