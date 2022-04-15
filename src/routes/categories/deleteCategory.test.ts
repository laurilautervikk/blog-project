import axios from 'axios';
const endpoint = 'http://localhost:3000/categories/';

describe('delete category by ID', () => {
  //empty var to hold id from a response
  let newId: String;

  beforeAll(async () => {
    //create test data
    const data = {
      title: 'Test title',
      slug: 'Test summary',
      content: 'Test content'
    };

    //insert test data
    const response = await axios.post(endpoint, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //console.log(response.data);
    newId = response.data.id;
    return response.data;
  });

  it('should delete category by ID and return "affected: 1"', async () => {
    let response = await axios.delete(endpoint + newId);
    expect(response.status).toBe(200);
    expect(response.data.affected).toBe(1);
  });

  it('Should not find id and return "affected: 0"', async () => {
    let wrongId = 'nothing';
    let response = await axios.delete(endpoint + wrongId);
    expect(response.status).toBe(200);
    expect(response.data.affected).toBe(0);
  });

  afterAll(() => {
    //Cleanup
  });
});
