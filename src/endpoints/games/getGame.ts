import { Game, httpFetch, remap } from '../../utils';

/**
 * Gets a game's details by its name.
 * @param game
 * @returns Game
 */
export const getGame = async (game: string): Promise<Game> => {
	const endpoint = `games/${game}`;
	const response: Game = await httpFetch(endpoint);

	// The hash sign in this configuration is incompatible with JS / TS
	remap(response.data.game, [
		{
			from: 'category#username',
			to: 'categoryToUsername',
		},
	]);

	return response;
};
