import { cleanup, renderHook,  waitFor } from '@testing-library/react'

import { useData } from '../hooks/data';
import * as API from '../utils/API'
import { IPetListByGender } from '@/interfaces';
import mockData from './mockData.json'

describe('Data Fetch', () => {

    it('should fetch data and set state for petsByOwner and petsByGender', async () => {
        const mockResponse: IPetListByGender[] = mockData.ORDER_RESPONSE_1;
        jest.spyOn(API, 'getData').mockResolvedValue(mockData.API_RESPONSE);
  
        const { result } = renderHook(() => useData());
  
        await waitFor(() => {
          expect(result.current.petsByOwner.length).toEqual(6);
          expect(result.current.petsByGender).toEqual(mockResponse);
          expect(result.current.petsByGender.length).toEqual(2);
          expect(result.current.petsByGender[0].type).toEqual('Female');
          expect(result.current.petsByGender[0].pets.length).toEqual(3);
        });
      });

    afterAll(cleanup)
})


