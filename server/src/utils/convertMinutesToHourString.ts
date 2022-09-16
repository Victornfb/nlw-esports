function convertMinutesToHourString(minutesAmount: number): string {
	const hours = String(Math.floor(minutesAmount / 60)).padStart(2, '0');
	const minutes = String(minutesAmount % 60).padStart(2, '0');
	return `${hours}:${minutes}`;
}

export default convertMinutesToHourString;