const modals = () => {
  function bindModal (trigger, modal, close) {
    trigger.addEventListener('click', (e) => {
      if (e.target) {
        e.preventDefault();
      }
      modal.style.displey = 'block';
      document.body.style.overflow = 'hidden';
    })
  }
}
export default modals;