import axios from 'axios';
const endpoint = 'http://localhost:3000/users/';

describe('create a category', () => {
  let newId: string;

  it('it should create a new category successfully', async () => {
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

    expect(responseData.firstName).toEqual(testData.firstName);
    expect(responseData.lastName).toEqual(testData.lastName);
    expect(responseData.mobile).toEqual(testData.mobile);
    expect(responseData.email).toEqual(testData.email);

    return;
  });

  afterAll(async () => {
    // clean up thest category
    const response = await axios.delete(endpoint + newId);
  });
});
