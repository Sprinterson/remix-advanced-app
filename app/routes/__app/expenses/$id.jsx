import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';

import ExpenseForm from '~/components/expenses/ExpenseForm.jsx';
import Modal from '~/components/util/Modal.jsx';
import { deleteExpense, updateExpense } from '~/data/expenses.server';
import { validateExpenseInput } from '~/data/validation.server';

export default function UpdateExpensePage() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('..');
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ params, request }) {
  const expenseId = params.id;

  if (request.method === 'PATCH') {
    const formData = await request.formData();
    const expenseData = Object.fromEntries(formData);

    try {
      validateExpenseInput(expenseData)
    } catch (error) {
      return error;
    }

    await updateExpense(expenseId, expenseData);
    return redirect('/expenses');
  } else if (request.method === 'DELETE') {
    await deleteExpense(expenseId);
    return redirect('/expenses');
  }
}

export function meta({ params, parentsData }) {
  const expense = parentsData['routes/__app/expenses'].find(
    (expense) => expense.id === params.id
  );

  return {
    title: expense.title,
    description: 'Update expense.',
  }
}