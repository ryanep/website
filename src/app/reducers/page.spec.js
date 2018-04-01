import reducer from '@reducers/page';

describe('reducers/page', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchObject({
      isFetching: false,
      error: null,
      page: null
    });
  });
});
