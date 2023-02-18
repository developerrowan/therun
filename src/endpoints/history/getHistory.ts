import { THERUN_FILEHISTORY_URL } from '../../constants';
import { RunHistory, httpFetch } from '../../utils';

/**
 * Gets the run history, which is used to populate the run detail page.
 * See: https://github.com/therungg/api-docs#user-runs
 * @param historyFileName
 * @returns RunHistory
 */
export const getHistory = async (
	historyFileName: string
): Promise<RunHistory> => {
	const response = await httpFetch(historyFileName, THERUN_FILEHISTORY_URL);

	return response as RunHistory;
};
