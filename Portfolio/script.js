const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');

function openModal(title, description) {
  modalBody.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
  `;
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
  if (event.target === modal) {
    closeModal();
  }
};

// Close modal on Escape key
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'block') {
    closeModal();
  }
});
