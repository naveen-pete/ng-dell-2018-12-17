import { compute } from './compute';

describe('compute', () => {
  it('should return 0 if the parameter is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0);
  });

  it('should return an incremented number if the parameter is positive', () => {
    const result = compute(1);
    expect(result).toBe(2);
  });
});
