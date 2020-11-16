import * as actions from './actions'

describe('actions', () => {
    it('should create an action to update search', () => {
        const payload = 'Finish docs';
        const expectedAction = {
            type: 'MODIFY_SEARCH',
            payload
        };
        expect(actions.updateSearch(payload)).toEqual(expectedAction)
    })
});
