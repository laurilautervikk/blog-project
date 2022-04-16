import axios from 'axios';
const endpoint = 'http://localhost:3000/users/';

describe('delete user by ID', () => {
  //empty var to hold id from a response
  let newId: string;

  beforeAll(async () => {
    //create a dummy entry first
    const testData = {
      firstName: 'Testa',
      lastName: 'Usaar',
      mobile: '+377789789789',
      email: 'test@user.com'
    };

    //insert test data
    const response = await axios.post(endpoint, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    //console.log(response.data);
    newId = response.data.id;
    return response.data;
  });

  it('should delete user by ID and return "affected: 1"', async () => {
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
