const form = document.getElementById('cardForm');
const logoInput = document.getElementById('logo-file');
const logoElement = document.getElementById('card-second-logo');
const cardsSection = document.getElementById('cards-section');
const MAX_LOGO_BYTES = 5 * 1024 * 1024;

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const logoFile = logoInput.files && logoInput.files[0];
  if (logoFile && !logoFile.type.startsWith('image/')) {
    alert('Please choose a valid image file for the logo.');
    logoInput.value = '';
    return;
  }
  if (logoFile && logoFile.size > MAX_LOGO_BYTES) {
    alert('Logo must be 5 MB or smaller.');
    logoInput.value = '';
    return;
  }

  const name = document.getElementById('name').value.trim();
  const designation = document.getElementById('designation').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const website = document.getElementById('website').value.trim();
  const company = document.getElementById('company').value.trim();
  const address = document.getElementById('address').value.trim();

  document.getElementById('card-name').textContent = name;
  document.getElementById('card-designation').textContent = designation;
  document.getElementById('card-phone').textContent = phone;
  document.getElementById('card-email').textContent = email;
  document.getElementById('card-website').textContent = website;
  document.getElementById('card-address').textContent = address;
  document.getElementById('card-second-company').textContent = company;
  document.getElementById('card-second-website').textContent = website;

  // Clear the previous logo when no replacement is selected.
  if (!logoFile) {
    logoElement.style.backgroundImage = 'none';
    cardsSection.style.display = 'flex';
    return;
  }

  const reader = new FileReader();
  reader.onerror = () => {
    alert('Could not read the logo file. Please try another image.');
  };
  reader.onload = () => {
    logoElement.style.backgroundImage = 'url("' + String(reader.result) + '")';
    cardsSection.style.display = 'flex';
  };
  reader.readAsDataURL(logoFile);
});
