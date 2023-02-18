export type Nullable<T> = T | null;

export type UserProfile = {
	runs: UserProfileRun[];
};

export type UserProfileRun = {
	gameTimeData: Nullable<GameTimeData>;
	personalBestTime: Nullable<string>;
	attemptCount: number;
	displayRun: string;
	run: string;
	uploadTime: string;
	variables: KeyValuePair<string>[];
	user: string;
	personalBest: string;
	finishedAttemptCount: number;
	hasGameTime: boolean;
	timeToSave: number;
	pbId: number;
	totalRunTime: string;
	lastSplitId: number;
	historyFilename: string;
	sessions: Session[];
	gameregion: string;
	sumOfBests: Nullable<string>;
	splitsFile: string;
	emulator: boolean;
	originalRun?: string;
	game: string;
	url: string;
};

export type FrontPageRun = {
	gameTimeData: Nullable<GameTimeData>;
	personalBestTime: Nullable<string>;
	status: string;
	displayRun: string;
	attemptCount: number;
	run: string;
	user: string;
	personalBest: string;
	hasGameTime: boolean;
	originalRun: string;
	game: string;
	url: string;
};

export type GameTimeData = {
	sessions: Session[];
	personalBest: string;
	personalBestTime: Nullable<string>;
	history: string;
	stdDev: number;
	timeToSave: number;
	sumOfBests: Nullable<string>;
};

export type Session = {
	startedAt: string;
	runIds: RunIds[];
	finishedRuns: string[];
	endedAt: string;
};

export type RunHistory = {
	runs: Run[];
	splits: SplitHistory[];
	sessions: Session[];
	meta: HistoryMeta;
};

export type Run = {
	splits: Split[];
	time: string;
	duration: string;
	startedAt: string;
	endedAt: string;
};

export type RunIds = {
	first: number;
	last: number;
};

export type Split = {
	splitTime: string;
	totalTime: string;
};

export type SplitHistory = {
	single: AdvancedSplitInfo;
	total: AdvancedSplitInfo;
	name: string;
	icon: string;
	values: number[];
	valuesTotal: number[];
};

export type AdvancedSplitInfo = {
	time: string;
	bestPossibleTime: Nullable<string>;
	bestAchievedTime: Nullable<string>;
	averageTime: string;
	stdDev: string;
	alternative: AlternativeSplitInfo[];
};

export type AlternativeSplitInfo = {
	name: string;
	time: string;
};

export type HistoryMeta = {
	totalRunTime: string;
	pbId: number;
};

export type GameResult = {
	image: string;
	categories: Category[];
	display: string;
	status: string;
	sort: number;
	game: string;
};

export type Category = {
	gameTimePb: Nullable<string>;
	bestTime: string;
	gameTime: boolean;
	display: string;
	bestTimeUser: string;
	category: string;
	totalRunTime: number;
	bestGameTimeUser: string;
};

export type Game = {
	data: {
		game: GameDetails;
	};
	stats: GameStats;
};

export type GameDetails = {
	alias: string;
	active: boolean;
	image: string;
	display: string;
	game: string;
};

export type GameStats = {
	userData: KeyValuePair<string>[];
	gameLeaderboard: Leaderboard;
	categoryLeaderboards: Leaderboard[];
	statsGameTime: {
		userData: KeyValuePair<string>[];
		gameLeaderboard: Leaderboard;
		categoryLeaderboards: Leaderboard[];
	};
	global: GameDetails;
};

export type KeyValuePair<T> = {
	[key: string]: T;
};

export type Leaderboard = {
	uploadLeaderboard: LeaderboardDetails[];
	attemptCountLeaderboard: LeaderboardDetails[];
	finishedAttemptCountLeaderboard: LeaderboardDetails[];
	totalRunTimeLeaderboard: LeaderboardDetails[];
	recentRuns: LeaderboardRecentRun[];
	completePercentageLeaderboard: LeaderboardDetails[];
	categoryName?: string;
	categoryNameDisplay?: string;
	stats: LeaderboardStats;
};

export type LeaderboardDetails = {
	username: string;
	stat: number;
	meta: Nullable<string>;
	game: string;
	category: string;
	url: string;
};

export type LeaderboardStats = {
	uploadCount: number;
	attemptCount: number;
	finishedAttemptCount: number;
	totalRunTime: number;
	completePercentage: number;
};

export type LeaderboardRecentRun = {
	achievedAt: string;
	time: string;
	username: string;
	category: string;
};

export type FrontPageData = {
	runs: FrontPageRun[];
	gamestats: GameResult[];
};

// TODO: more enums babyyyyy
export type LiveWebSocketResponse = {
	user: string;
	run: LiveRun;
	type: string;
};

export type WebSocketEvent<T> = (data?: T) => void;

export type LiveRun = {
	game: string;
	splits: LiveSplit[];
	bestPossible: Nullable<number>;
	importance: Nullable<number>;
	sob: Nullable<number>;
	delta: number;
	startedAt: string;
	platform: string;
	gameTime: false;
	events: LiveRunEvent[];
	previousRun: Nullable<LiveRun>;
	variables: KeyValuePair<string>[];
	currentSplitIndex: number;
	runPercentage: number;
	currentlyStreaming: boolean;
	currentPrediction: number;
	picture: string;
	currentTime: 0;
	emulator: false;
	pb: Nullable<number>;
	hasReset: boolean;
	currentSplitName: string;
	insertedAt: number;
	endedAt: string;
	removeAt: number;
	gameData: UserProfileRun;
	gameImage: string;
	region: string;
	category: string;
	user: string;
};

export type LiveRunEvent = {
	game: string;
	data: {
		splitName?: string;
		newGold?: number;
		previousGold?: number;
		delta?: number;
		finishedSplitAttemptCount?: number;
		personalBest?: Nullable<number>;
		expectedEndTime?: Nullable<number>;
		achievedTime?: number;
		targetTime?: number;
		pbSplitTime?: string;
		expectedSplitTime?: number;
		bestSplitTime?: string;
	};
	name: string;
	description: string;
	time: string;
	type: string;
	category: string;
	username: string;
};

export type LiveSplit = {
	average: Nullable<number>;
	top90Single: Nullable<number>;
	pbSplitTime: Nullable<number>;
	deltaToPredicted: Nullable<number>;
	recentCompletionsSingle: number[];
	bestPossible: Nullable<number>;
	consistency: Nullable<number>;
	top90Total: Nullable<number>;
	single: AdvancedSplitInfo;
	total: AdvancedSplitInfo;
	top10Total: Nullable<number>;
	attemptsFinished: number;
	top10Single: Nullable<number>;
	name: string;
	comparisons: KeyValuePair<Nullable<number>>;
	predictedSingleTime: Nullable<number>;
	recentCompletionsTotal: number[];
	attemptsStarted: number;
	splitTime: Nullable<number>;
};
