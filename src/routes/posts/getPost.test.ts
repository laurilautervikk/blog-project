import axios from 'axios';

const endpoint = 'http://localhost:3000/posts/';

describe('get post by ID', () => {
  beforeAll(() => {
    // käivitatakse enne testi paki algust (nt. tee test andmebaasi ja täida see)
  });
  it('should return post by ID', async () => {
    const response = await axios.get(
      endpoint + '/4c4a2617-bca8-460f-ab67-a692bb4cc553'
    );
    expect(response?.data).toHaveProperty('id');
    expect(response?.data?.title).toEqual('Title for a random post');
  });

  it('Should return error for non existing ID', async () => {
    const response = await axios.get(endpoint + '/nonExististentID');
    const data = response.data;
    console.log(data);
    expect(data).toHaveProperty('message');
    expect(data?.message).toEqual('no post found with given ID');
    return;
  });

  afterAll(() => {
    // käivitatakse peale testi pakki (nt. kustuta test andmebaas)
  });
});
