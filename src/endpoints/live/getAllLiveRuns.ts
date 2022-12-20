import { LiveRun, httpFetch } from '../../utils';

/**
 * Gets all live runs.
 * @deprecated do not rely on this function, as it will likely be deprecated in the future
 * @returns LiveRun[]
 */
export const getAllLiveRuns = async (): Promise<LiveRun[]> => {
	const endpoint = `live`;
	const response: LiveRun[] = await httpFetch(endpoint);

	return response;
};
