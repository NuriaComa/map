import reducer from './reducer';

describe('modify search reducer', () => {
    it ('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({ search: [{
                address: 'Barcelona',
                lat: 41.38879,
                lng: 2.15899,
            }]
        })
    })
});
