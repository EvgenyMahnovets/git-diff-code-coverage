import Arguments from '../../../src/services/arguments/Arguments';
import getArgumentsInstance from '../../../src/services/arguments/ArgumentsFactory';

jest.mock('../../../src/services/arguments/Arguments');

describe('arguments factory', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('should create one instance if Arguments class', () => {
    const firstArgumentsInstance = getArgumentsInstance();
    const secondArgumentsInstance = getArgumentsInstance();
    const thirdArgumentsInstance = getArgumentsInstance();

    expect(firstArgumentsInstance).toBeInstanceOf(Arguments);
    expect(Arguments).toHaveBeenCalledTimes(1);
    expect(firstArgumentsInstance).toBe(secondArgumentsInstance);
    expect(secondArgumentsInstance).toBe(thirdArgumentsInstance);
  });
});
