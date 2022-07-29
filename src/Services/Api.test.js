import axios from 'axios';

import { postMedication } from './Api';

jest.mock('axios');

describe('fetchData', () => {
    describe('fetchData', () => {
        it('fetches successfully data from an API', async () => {
          const data = [{test:"hi"}];
      
          axios.post.mockImplementationOnce(() => Promise.resolve(data));
      
          await expect(postMedication(data)).resolves.toEqual(data);
        });
      
        it('fetches erroneously data from an API', async () => {
          const errorMessage = 'Network Error';
          const data = [{test:"hi"}];
          axios.post.mockImplementationOnce(() =>
            Promise.reject(new Error(errorMessage)),
          );
          await expect(postMedication(data)).rejects.toThrow(errorMessage);
        });
      });
});