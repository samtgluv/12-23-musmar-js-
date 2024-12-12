function toggleAccordion(trigger) {
    const accordion = trigger.closest('.accordion');
    accordion.classList.toggle('open');
  }
  
  function openModal() {
    document.getElementById('make_request').showModal();
  }
  
  function closeModal() {
    document.getElementById('make_request').close();
  }
    document.getElementById('requestForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = e.target.email.value;
    
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Пожалуйста, введите корректный email.');
      return;
    }
      fetch('/submit', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Ваша заявка успешно отправлена!');
        closeModal();
      } else {
        alert('Произошла ошибка. Попробуйте снова.');
      }
    })
    .catch(error => alert('Произошла ошибка. Попробуйте снова.'));
  });
  const linkExpand = document.querySelectorAll('.link_expand');
    linkExpand.forEach(link => {
        link.addEventListener('mouseover', () => {
            const content = link.querySelector('.link_expand__content');
            content.style.display = 'block';
        });
        link.addEventListener('mouseout', () => {
            const content = link.querySelector('.link_expand__content');
            content.style.display = 'none';
        });
    });
    document.addEventListener("DOMContentLoaded", function() {
      const bookButton = document.getElementById("bookButton");
      const bookingForm = document.getElementById("bookingForm");
      const closeFormButton = document.getElementById("closeForm");
      const form = document.getElementById("form");
        bookButton.addEventListener("click", function() {
          bookingForm.classList.remove("hidden");
      });
      closeFormButton.addEventListener("click", function() {
          bookingForm.classList.add("hidden");
      });
  
      form.addEventListener("submit", function(event) {
          event.preventDefault(); 
  
          const name = document.getElementById("name").value;
          const email = document.getElementById("email").value;
          const date = document.getElementById("date").value;
          alert(`Запись на фотосессию подтверждена!\nИмя: ${name}\nEmail: ${email}\nДата: ${date}`);
            bookingForm.classList.add("hidden");
          form.reset();
      });
  });
  window.onscroll = function() {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight / 2) {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('modal-overlay').style.display = 'block';
    }
};
document.getElementById('close-modal').onclick = function() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
};
  