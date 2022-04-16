import axios from 'axios';
const endpoint = 'http://localhost:3000/users/';

describe('get user by ID', () => {
  let newId: string;

  beforeAll(async () => {
    //create a dummy entry first
    const testData = {
      firstName: 'Testa',
      lastName: 'Usaar',
      mobile: '+377789789789',
      email: 'test@user.com'
    };
    const response = await axios.post(endpoint, testData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const responseData = response.data;
    newId = responseData.id;
  });

  it('should return user by ID', async () => {
    const response = await axios.get(endpoint + newId);
    expect(response.status).toBe(200);
    expect(response?.data?.firstName).toEqual('Testa');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + 'nothing');
    const result = response.data;
    expect(result?.message).toEqual('no entry found with ID: nothing');
    return;
  });

  afterAll(async () => {
    // clean up
    const response = await axios.delete(endpoint + newId);
  });
});
