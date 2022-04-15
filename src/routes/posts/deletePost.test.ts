import axios from 'axios';
const endpoint = 'http://localhost:3000/posts/';
import { v4 as uuidV4 } from 'uuid';

describe('delete post by ID', () => {
  //empty var to hold id from a response
  let newId: String;

  beforeAll(async () => {
    //create test data
    const data = {
      authorId: '05af4060-059e-418d-bfe9-0ef18e855471',
      title: 'Test title',
      summary: 'Test summary',
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

  it('should delete post by ID and return "affected: 1"', async () => {
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
