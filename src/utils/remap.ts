export const remap = (obj: object, map: { from: string; to: string }[]) => {
	for (let i = 0; i < map.length; i++) {
		const to = map[i].to as keyof typeof obj;
		const from = map[i].from as keyof typeof obj;

		if (!obj[from]) continue;

		obj[to] = obj[from];
		delete obj[from];
	}
};
