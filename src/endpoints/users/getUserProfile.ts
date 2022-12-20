import { UserProfile, UserProfileRun, httpFetch } from '../../utils';

/**
 * Gets a user profile.
 * @param username
 * @returns UserProfile
 */
export const getUserProfile = async (
	username: string
): Promise<UserProfile> => {
	const endpoint = `users/${username}`;
	const response: UserProfileRun[] = await httpFetch(endpoint);

	return {
		runs: response,
	} as UserProfile;
};
