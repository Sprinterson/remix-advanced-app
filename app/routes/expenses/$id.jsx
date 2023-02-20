import ExpenseForm from '~/components/expenses/ExpenseForm.jsx';
import Modal from '~/components/util/Modal.jsx';

export default function UpdateExpensePage() {
  return (
    <Modal>
      <ExpenseForm />
    </Modal>
  );
}
