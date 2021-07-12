import { createLongMonthNames } from "./dateTools";

describe('dateTools module', () => {
    describe('createLongMonthNames', () => {
        it('should be a function', () => {
            expect(createLongMonthNames).toEqual(expect.any(Function));
        });

        it('should return an array', () => {
            expect(Array.isArray(createLongMonthNames())).toEqual(true);
        });

        it('return value should have length 12', () => {
            expect(createLongMonthNames()).toHaveLength(12);
        });
    })
})