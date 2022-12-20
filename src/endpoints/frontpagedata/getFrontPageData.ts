import { FrontPageData, httpFetch } from '../../utils';

/**
 * Gets front page data
 * @returns FrontPageData
 */
export const getFrontPageData = async (): Promise<FrontPageData> => {
	const endpoint = `frontpagedata`;
	const response: FrontPageData = await httpFetch(endpoint);

	return response;
};
