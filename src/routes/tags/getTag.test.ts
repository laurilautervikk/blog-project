import axios from 'axios';
const endpoint = 'http://localhost:3000/tags/';

describe('get tag by ID', () => {
  let newId: string;

  beforeAll(async () => {
    //create a dummy tag first
    const testData = {
      title: 'Title gettag test',
      slug: 'Summary gettag test',
      content: 'Content gettag test'
    };

    const response = await axios.post(endpoint, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseData = response.data;

    //get the id from dummy tags response
    newId = responseData.id;
  });

  it('should return tag by ID', async () => {
    const response = await axios.get(endpoint + newId);
    expect(response.status).toBe(200);
    expect(response?.data?.title).toEqual('Title gettag test');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + 'nothing');
    const result = response.data;
    expect(result?.message).toEqual('no tag found with ID: nothing');
    return;
  });

  afterAll(async () => {
    // clean up
    const response = await axios.delete(endpoint + newId);
  });
});
