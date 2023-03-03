import { useNavigate } from '@remix-run/react';

import ExpenseForm from '~/components/expenses/ExpenseForm.jsx';
import Modal from '~/components/util/Modal.jsx';

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
