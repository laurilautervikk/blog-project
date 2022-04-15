import axios from 'axios';
const endpoint = 'http://localhost:3000/categories/';

describe('create a category', () => {
  let newId: String;

  it('it should create a new category successfully', async () => {
    const testData = {
      title: 'Title createcategory test',
      slug: 'Slug createcategory test',
      content: 'Content createcategory test'
    };

    const response = await axios.post(endpoint, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseData = response.data;

    newId = responseData.id;

    expect(responseData.title).toEqual(testData.title);
    expect(responseData.content).toEqual(testData.content);
    expect(responseData.slug).toEqual(testData.slug);

    return;
  });

  afterAll(async () => {
    // clean up thest category
    const response = await axios.delete(endpoint + newId);
  });
});
