import { THERUN_HTTP_URL } from '../constants';

export const httpFetch = async <T>(
	endpoint: string,
	url?: string
): Promise<T> => {
	try {
		const response = await fetch(`${url || THERUN_HTTP_URL}/${endpoint}`);

		if (!response.ok) throw new Error(response.status.toString());
		return await response.json();
	} catch (e: unknown) {
		if (e instanceof Error) {
			if (e.message === '404') throw new Error('Not Found');
			if (e.message === '429') throw new Error('Rate Limited');

			throw e;
		}

		throw new Error('Something went wrong');
	}
};
