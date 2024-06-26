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
