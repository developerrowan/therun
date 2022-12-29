import { Game, httpFetch } from '../../utils';

/**
 * Gets a game's details by its name.
 * @param game Game name
 * @returns Game
 */
export const getGame = async (game: string): Promise<Game> => {
	const endpoint = `games/${game}`;
	const response: Game = await httpFetch(endpoint);

	return response;
};
