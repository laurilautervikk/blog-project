import axios from 'axios';
import { response } from '../../app';
import getCategories from './getCategory';

const endpoint = 'http://localhost:3000/categories/';

describe('getCategories', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should return category by ID', async () => {
    const response = await axios.get(
      endpoint + '/bbc8b538-8f52-4548-96f3-0348441965d7'
    );
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.title).toEqual('Title for a random category');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + '/nonExististentID');
    const data = response.data;
    console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('no category found with given ID');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});
