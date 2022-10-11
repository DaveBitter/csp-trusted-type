const elements = {
  injectionForm: document.querySelector('[data-injection-form]'),
  injectionFormOutput: document.querySelector('[data-injection-form-output]')
};

const handleSubmit = e => {
  e.preventDefault();

  elements.injectionFormOutput.innerHTML = null;

  const formData = new FormData(e.currentTarget);
  const input = formData.get('input');

  const script = document.createElement('script');
  script.innerHTML = input;

  elements.injectionFormOutput.appendChild(script);
};

elements.injectionForm.addEventListener('submit', handleSubmit);
