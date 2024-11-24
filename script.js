document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
      btn.style.transform = 'scale(1.1)';
    });
  
    btn.addEventListener('mouseout', () => {
      btn.style.transform = 'scale(1)';
    });
  });
  