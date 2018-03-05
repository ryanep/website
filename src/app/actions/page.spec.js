import * as types from '@constants/action-types';
import * as actions from './page';

describe('actions/page', () => {
  const data = {};
  const slug = 'home';
  const error = new Error('Error');

  describe('pageFetchRequest', () => {
    it('return PAGE_FETCH_REQUEST action type', () => {
      expect(actions.pageFetchRequest(slug)).toMatchObject({
        type: types.PAGE_FETCH_REQUEST
      });
    });

    it('returns slug string', () => {
      expect(actions.pageFetchRequest(slug)).toMatchObject({ slug });
    });
  });

  describe('pageFetchSuccess', () => {
    it('return PAGE_FETCH_SUCCESS action type', () => {
      expect(actions.pageFetchSuccess(data)).toMatchObject({
        type: types.PAGE_FETCH_SUCCESS
      });
    });

    it('returns data object', () => {
      expect(actions.pageFetchSuccess(data)).toMatchObject({ data });
    });
  });

  describe('pageFetchFailure', () => {
    it('return PAGE_FETCH_FAILURE action type', () => {
      expect(actions.pageFetchFailure(data)).toMatchObject({
        type: types.PAGE_FETCH_FAILURE
      });
    });

    it('returns data object', () => {
      expect(actions.pageFetchFailure(error)).toMatchObject({ error });
    });
  });
});
