import axios from 'axios';
const endpoint = 'http://localhost:3000/users/';

describe('get users by ID', () => {
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

    //get the id from dummy posts response
    newId = responseData.id;
  });

  it('should return the users created above', async () => {
    const response = await axios.get(endpoint);
    //console.log(response.data[0].title);

    //seting a delay because other tests may have not cleaned all data yet
    const delay = setTimeout(function () {
      expect(response?.data[0]?.firstName).toEqual('Testa');
    }, 1000);
    delay.unref();
  });

  afterAll(async () => {
    // clean up thest post
    const response = await axios.delete(endpoint + newId);
  });
});
