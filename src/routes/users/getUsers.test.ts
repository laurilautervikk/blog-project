import axios from 'axios';
import { LessThanOrEqual } from 'typeorm';

const endpoint = 'http://localhost:3000/users';

describe('users', () => {
  beforeAll(() => {
    //will be stated before batch testing (ie create a test db and populate it)
  });

  it('should return user ID', async () => {
    const response = await axios.get(
      endpoint + '/089ddda5-f4c8-4bca-974a-e69d616e504a'
    );
    const data = response.data;
    expect(data).toHaveProperty('id');
    expect(data.id).toEqual('089ddda5-f4c8-4bca-974a-e69d616e504a');
  });

  it('should return error for non existing user ID', async () => {
    const response = await axios.get(endpoint + '/nonexistingID');
    const data = response.data;
    expect(data).toHaveProperty('message');
    expect(data.message).toEqual('no user found with given ID');
  });

  afterAll(() => {
    //is run after testing(ie delete test db)
  });
});
