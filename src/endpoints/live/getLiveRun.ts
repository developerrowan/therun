import { LiveRun, httpFetch } from '../../utils';

/**
 * Gets a live run
 * @param username
 * @returns LiveRun
 */
export const getLiveRun = async (username: string): Promise<LiveRun> => {
	const endpoint = `live/${username}`;
	const response: LiveRun = await httpFetch(endpoint);

	return response;
};
