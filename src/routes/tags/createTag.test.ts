import axios from 'axios';
const endpoint = 'http://localhost:3000/tags/';

describe('create a tag', () => {
  let newId: string;

  it('it should create a new tag successfully', async () => {
    const testData = {
      title: 'Title createtag test',
      slug: 'Slug createtag test',
      content: 'Content createtag test'
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
    // clean up thest tag
    const response = await axios.delete(endpoint + newId);
  });
});
