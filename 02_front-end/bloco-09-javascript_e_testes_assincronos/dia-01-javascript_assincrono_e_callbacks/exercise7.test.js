import uppercase from './exercise7';

it('should return PROMISE', (done) => {
    uppercase('promise', (str) => {
        try {
            expect(str).toBe('PROMISE');
            done();
        } catch (e) {
            done(e);
        }
    });
});