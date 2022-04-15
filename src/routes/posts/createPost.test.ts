import axios from 'axios';
const endpoint = 'http://localhost:3000/posts/';

describe('create a post', () => {
  let newId: String;

  it('it should create a new post successfully', async () => {
    const testData = {
      authorId: '05af4060-059e-418d-bfe9-0ef18e855471',
      title: 'Title createPost test',
      summary: 'Summary createPost test',
      content: 'Content createPost test'
    };

    const response = await axios.post(endpoint, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseData = response.data;

    newId = responseData.id;

    expect(responseData.authorId).toEqual(testData.authorId);
    expect(responseData.title).toEqual(testData.title);
    expect(responseData.content).toEqual(testData.content);
    expect(responseData.summary).toEqual(testData.summary);

    return;
  });

  afterAll(async () => {
    // clean up thest post
    const response = await axios.delete(endpoint + newId);
  });
});
