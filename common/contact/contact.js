document.getElementById('name').addEventListener('blur', (event) => nameValidator(event.target.value));
document.getElementById('email').addEventListener('blur', (event) => emailValidator(event.target.value));
document.getElementById('message').addEventListener('blur', (event) => messageValidator(event.target.value));

document.getElementById('name').addEventListener('focus', () => nameFocus());
document.getElementById('email').addEventListener('focus', () => emailFocus());
document.getElementById('message').addEventListener('focus', () => messageFocus());

document.querySelector('.contact__button').addEventListener('click', () => submitForm())

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const nameFocus = () => {
  document.getElementById('name-error').style.display = 'none';
  document.getElementById('name').style.borderColor = 'black';
  document.getElementById('name-label').style.color = 'black';
}

const emailFocus = () => {
  document.getElementById('email-error').style.display = 'none';
  document.getElementById('email').style.borderColor = 'black';
  document.getElementById('email-label').style.color = 'black';
}
const messageFocus = () => {
  document.getElementById('message-error').style.display = 'none';
  document.getElementById('message').style.borderColor = 'black';
  document.getElementById('message-label').style.color = 'black';
}

const nameValidator = (name) => {
  const errorMessage = document.getElementById('name-error');
  const input = document.getElementById('name');
  const label = document.getElementById('name-label');

  if (!name) {
    errorMessage.innerText = 'Введите имя';
    errorMessage.style.display = 'block';
    input.style.borderColor = 'red';
    label.style.color = 'red';

    return false;
  }

  if (name.length <= 2) {
    errorMessage.innerText = 'Имя должно содержать больше 2 букв'
    errorMessage.style.display = 'block';
    input.style.borderColor = 'red';
    label.style.color = 'red';

    return false;
  }

  return true
}

const emailValidator = (email) => {
  const errorMessage = document.getElementById('email-error');
  const input = document.getElementById('email');
  const label = document.getElementById('email-label');

  if (!email) {
    errorMessage.innerText = 'Введите почту';
    errorMessage.style.display = 'block';
    input.style.borderColor = 'red';
    label.style.color = 'red';

    return false;
  }

  if (!email.match(emailRegex)) {
    errorMessage.innerText = 'Неверная почта';
    errorMessage.style.display = 'block';
    input.style.borderColor = 'red';
    label.style.color = 'red';

    return false;
  }

  return true;
}

const messageValidator = (message) => {
  const errorMessage = document.getElementById('message-error');
  const input = document.getElementById('message');
  const label = document.getElementById('message-label');

  if (!message) {
    errorMessage.innerText = 'Введите сообщение';
    errorMessage.style.display = 'block';
    input.style.borderColor = 'red';
    label.style.color = 'red';

    return false;
  }

  return true;
}




const apiUrl = 'https://662d2a110547cdcde9e01b5d.mockapi.io/ea/mock';

class MessagesApi {
  url;
  config;

  constructor(url, config) {
    this.url = url ? url : apiUrl;
    this.config = config ? config : {};
  }

  async POST(endpoint, body) {
    const response = await fetch(
      this.url + endpoint, {
      ...this.config,
      method: 'POST',
      body,
    })

    if (response.ok) {
      alert('Сообщение успешно отправленно!')
    } else {
      alert('Что-то пошло не так!')
    }
  }
}

const messagesApi = new MessagesApi();






const submitForm = () => {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const isValidName = nameValidator(nameInput.value);
  const isValidEmail = emailValidator(emailInput.value);
  const isValidMessage = messageValidator(messageInput.value);

  if (isValidName && isValidEmail && isValidMessage) {
    messagesApi.POST('/messages', {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    });
  }
}
