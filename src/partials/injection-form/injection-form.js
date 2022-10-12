import * as DOMPurify from 'dompurify';

const elements = {
  injectionForm: document.querySelector('[data-injection-form]'),
  injectionFormInput: document.querySelector('[data-injection-form-input]'),
  injectionFormOutput: document.querySelector('[data-injection-form-output]')
};

const sanitize = (type, string) => {
  switch (type) {
    case 'with-dom-purify':
      return DOMPurify.sanitize(string);
    case 'with-dom-purify-and-trusted-type':
      return DOMPurify.sanitize(string, { RETURN_TRUSTED_TYPE: true });
    default:
      return string;
  }
};

const handleSubmit = e => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const input = formData.get('input');
  const { type } = elements.injectionForm.dataset;

  elements.injectionFormOutput.innerHTML = sanitize(type, input);
};

elements.injectionForm.addEventListener('submit', handleSubmit);

elements.injectionFormInput.value = `<img src='none' alt='purposely erroring image attack' onerror='window.alert("hello!")'/>`;
