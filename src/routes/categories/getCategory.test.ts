import axios from 'axios';
const endpoint = 'http://localhost:3000/categories/';

describe('get category by ID', () => {
  let newId: String;

  beforeAll(async () => {
    //create a dummy category first
    const testData = {
      title: 'Title getcategory test',
      slug: 'Summary getcategory test',
      content: 'Content getcategory test'
    };

    const response = await axios.post(endpoint, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const responseData = response.data;

    //get the id from dummy categorys response
    newId = responseData.id;
  });

  it('should return category by ID', async () => {
    const response = await axios.get(endpoint + newId);
    expect(response.status).toBe(200);
    expect(response?.data?.title).toEqual('Title getcategory test');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + 'nothing');
    const result = response.data;
    expect(result?.message).toEqual('no category found with ID: nothing');
    return;
  });

  afterAll(async () => {
    // clean up
    const response = await axios.delete(endpoint + newId);
  });
});
