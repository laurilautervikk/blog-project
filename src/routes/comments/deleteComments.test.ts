import axios from 'axios';
const endpoint = 'http://localhost:3000/comments/';

describe('delete comment by ID', () => {
  //empty var to hold id from a response
  let newId: string;

  beforeAll(async () => {
    //create test data
    const data = {
      postId: 'df2c15c1-7c3c-428d-86db-bad0a73741e9',
      title: 'Title deletecomment test',
      content: 'Content deletecomment test'
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

  it('should delete comment by ID and return "affected: 1"', async () => {
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
