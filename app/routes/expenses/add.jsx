import ExpenseForm from '~/components/expenses/ExpenseForm.jsx';
import Modal from '~/components/util/Modal.jsx';

export default function ExpensesAddPage() {
  return (
    <Modal>
      <ExpenseForm />
    </Modal>
  );
}
