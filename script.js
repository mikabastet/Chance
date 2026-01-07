document.addEventListener('DOMContentLoaded', () => {

  /* =========================
     FILTRO DE PROYECTOS
  ========================== */
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {

      const activeBtn = document.querySelector('.filter-btn.active');
      if (activeBtn) activeBtn.classList.remove('active');

      button.classList.add('active');

      const filter = button.dataset.filter;

      projectCards.forEach(card => {
        card.style.display =
          filter === 'all' || card.dataset.category === filter
            ? 'block'
            : 'none';
      });
    });
  });

  /* =========================
     MODAL DE IMÁGENES
  ========================== */
  const imageModal = document.getElementById('imageModal');
  const modalImg = document.getElementById('imgFull');
  const closeImageBtn = document.getElementById('closeBtn');

  document.querySelectorAll('.link-proyect').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      const img = btn.closest('.project-block')?.querySelector('img');
      if (!img) return;

      imageModal.style.display = 'block';
      modalImg.src = img.src;
      document.body.style.overflow = 'hidden';
    });
  });

  closeImageBtn?.addEventListener('click', () => {
    imageModal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });

  imageModal?.addEventListener('click', e => {
    if (e.target === imageModal) {
      imageModal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

  /* =========================
     MODAL LANDINGS (IFRAME)
  ========================== */
  const landingModal = document.getElementById('landing-modal');
  const landingFrame = document.getElementById('landing-frame');
  const closeLandingBtn = document.querySelector('.modal-close');

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.url;
      if (!url) return;

      landingFrame.src = url;
      landingModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeLandingBtn?.addEventListener('click', () => {
    landingFrame.src = '';
    landingModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

});
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const plan = btn.dataset.plan;
    const phone = '34664633223'; // tu número
    const message = `Hola Mika, me interesa el Plan ${plan} para una landing. Quisiera más información 🙌`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
});
