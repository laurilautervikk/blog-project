import axios from 'axios';
const endpoint = 'http://localhost:3000/categories/';
//category
describe('create a category', () => {
  it('it should create a new category successfully', async () => {
    const testData = {
      title: 'Cathegory Title',
      slug: 'slug2233',
      content: 'Content here223'
    };

    const response = await axios.post(endpoint, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseData = response.data;

    expect(responseData.title).toEqual(testData.title);
    expect(responseData.slug).toEqual(testData.slug);
    expect(responseData.content).toEqual(testData.content);

    return;
  });
});
