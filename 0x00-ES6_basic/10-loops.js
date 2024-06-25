export default function appendToEachArrayValue(array, appendString) {
	const copy = [];
	for (const item of array) {
		const value = item;
		const newValue = appendString + value;
		copy.push(newValue);
	}

	return copy;
}
