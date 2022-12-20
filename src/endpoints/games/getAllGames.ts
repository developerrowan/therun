import { GameResult, httpFetch } from '../../utils';

/**
 * Gets list of all games
 * @returns GameResult[]
 */
export const getAllGames = async (): Promise<GameResult[]> => {
	const endpoint = `games`;
	const response: GameResult[] = await httpFetch(endpoint);

	return response;
};
