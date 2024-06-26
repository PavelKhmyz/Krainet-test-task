const apiUrl = 'https://662d2a110547cdcde9e01b5d.mockapi.io/ea/mock';

class MessagesApi {
  url;
  config;

  constructor(url, config) {
    this.url = url ? url : apiUrl;
    this.config = config ? config : {};
  }

  async POST(endpoint, body) {
    try {
      return await fetch(
        this.url + endpoint, {
        ...this.config,
        method: 'POST',
        body,
      })
    } catch {
      throw new Error('Что-то пошло не так');
    }
  }
}

export const messagesApi = new MessagesApi();
