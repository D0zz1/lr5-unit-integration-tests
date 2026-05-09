const fetchPosts = require('../src/api');
const axios = require('axios');

jest.mock('axios');

describe('Інтеграційний тест API', () => {
  test('Отримання постів зі стороннього API з використанням mock', async () => {
    const response = {
      data: [
        {
          userId: 1,
          id: 1,
          title: 'Тестова назва 1',
          body: 'Тестовий контент 1',
        },
        {
          userId: 1,
          id: 2,
          title: 'Тестова назва 2',
          body: 'Тестовий контент 2',
        },
      ],
    };

    axios.get.mockResolvedValue(response);

    const posts = await fetchPosts();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(posts).toBeInstanceOf(Array);
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toHaveProperty('id');
    expect(posts[1].id).toBe(2);
    expect(posts[1].title).toBe('Тестова назва 2');
  });
});