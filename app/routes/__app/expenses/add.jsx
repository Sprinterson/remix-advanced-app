import { redirect } from '@remix-run/node';
import { useNavigate } from '@remix-run/react';

import ExpenseForm from '~/components/expenses/ExpenseForm.jsx';
import Modal from '~/components/util/Modal.jsx';
import { addExpense } from '~/data/expenses.server';

export default function AddExpensesPage() {
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

export async function action({ request }) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);
  console.log(expenseData, formData);

  await addExpense(expenseData);
  return redirect('/expenses');
}