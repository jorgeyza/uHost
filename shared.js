var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButton = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector('.main-nav__item--cta');

// console.dir(backdrop);
// console.dir(selectPlanButton);

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener('click', function () {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    // modal.className = 'open' // This will actually overwrite the complete class list
    modal.classList.add('open');
    backdrop.style.display = 'block';
    // hacky way of not letting css change all the properties at the same time, thus allowing the "transition:" property to work with the backdrop
    setTimeout(function () {
      backdrop.classList.add('open');
    }, 10);
  });
}

backdrop.addEventListener('click', function () {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  if (modal) {
    modal.classList.remove('open');
  }

  backdrop.classList.remove('open');
  // I use 200ms for this delay to match up with the css transition property used in the backdrop
  setTimeout(function () {
    backdrop.style.display = 'none';
  }, 200);
}

toggleButton.addEventListener('click', function () {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.style.display = 'block';
  setTimeout(function () {
    backdrop.classList.add('open');
  }, 10);
  backdrop.classList.add('open');
});

ctaButton.addEventListener('animationstart', function (event) {
  console.log('Animation started', event);
});

ctaButton.addEventListener('animationend', function (event) {
  console.log('Animation ended', event);
});

ctaButton.addEventListener('animationiteration', function (event) {
  console.log('Animation iteration', event);
});
