import { remap } from './';
import { describe, beforeEach, expect, it } from 'vitest';

describe('Remapper tests', () => {
	const mockModel = {
		foo: 'bar',
		bar: 'baz',
		tapo: 'oops',
		anothertipo: 'doubleoops',
		appel: 'fruit',
	};

	let mockedObject = {};

	beforeEach(() => {
		mockedObject = mockModel;
	});

	it('should remap "tapo" to "typo"', () => {
		// Arrange / Act
		remap(mockedObject, [{ from: 'tapo', to: 'typo' }]);

		// Assert
		expect(mockedObject['tapo']).toBeUndefined();
		expect(mockedObject['typo']).toEqual('oops');
	});

	it('should remap all typoed keys', () => {
		// Arrange / Act
		remap(mockedObject, [
			{ from: 'tapo', to: 'typo' },
			{ from: 'anothertipo', to: 'anothertypo' },
			{ from: 'appel', to: 'apple' },
		]);

		// Assert
		expect(mockedObject).toEqual({
			foo: 'bar',
			bar: 'baz',
			typo: 'oops',
			anothertypo: 'doubleoops',
			apple: 'fruit',
		});
	});

	it('should remain unchanged when "from" key does not exist', () => {
		// Arrange / Act
		remap(mockedObject, [{ from: 'abcd', to: 'efgh' }]);

		// Assert
		expect(mockedObject).toEqual(mockModel);
	});
});
