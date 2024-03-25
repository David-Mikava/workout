const { registration, login } = document.forms;

async function submit(form, path) {
  const res = await fetch(path, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: form.name?.value,
      email: form.email.value,
      password: form.password.value,
    }),
  });
  return res;
}

function showToast(message, { type = 'error' } = {}) {
  const toast = document.createElement('div');
  toast.innerText = message;
  toast.style.position = 'fixed';
  toast.style.top = '20px';
  toast.style.left = '50%';
  toast.style.transform = 'translateX(-50%)';
  toast.style.backgroundColor = type === 'error' ? '#ff000091' : '#626262';
  toast.style.color = 'white';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '5px';
  toast.style.zIndex = '1000';
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 4000);
}

function isValidEmail(email) {
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
}

function displayErrorMessage(message, parentElement) {
  const errTxt = document.createElement('p');
  errTxt.innerText = message;
  errTxt.style.color = 'red';
  parentElement.appendChild(errTxt);
  setTimeout(() => {
    errTxt.remove();
  }, 4000);
}

registration?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (isValidEmail(e.target.email.value)) {
    const response = await submit(e.target, '/auth/reg');
    if (response.status === 200) {
      showToast('You have successfully registered', { type: 'success' });
      window.location.href = '/auth/login';
    } else if (response.status === 401) {
      alert('The email address is busy');
    }
  } else {
    displayErrorMessage('The email format is incorrect', registration);
  }
});

login?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (isValidEmail(e.target.email.value)) {
    const response = await submit(e.target, '/auth/login');
    if (response.status === 200) {
      window.location.href = '/skills';
    } else {
      displayErrorMessage('Incorrect email address or password', login);
    }
  } else {
    displayErrorMessage('The email format is incorrect', login);
  }
});
