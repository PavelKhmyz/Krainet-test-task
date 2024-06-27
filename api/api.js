class MessagesApi {
  url;
  config;

  constructor(url, config) {
    const apiDefaultUrl = import.meta.env.VITE_MOCK_API_URL

    this.url = url ? url : apiDefaultUrl;
    this.config = config ? config : {};
  }

  async POST(endpoint, body) {
    const response = await fetch(
      this.url + endpoint, {
      ...this.config,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    if (response.ok) {
      alert('Сообщение успешно отправленно!')
    } else {
      alert('Что-то пошло не так!')
    }
  }
}

export const messagesApi = new MessagesApi();
