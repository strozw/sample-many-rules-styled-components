
/**
 * create many rules by specific size
 *
 * @param size {number}
 * @return {string}
 */
export function createManyRules(size) {
	return Array.from(Array(size).keys())
	 .map(n => `.fs${n} { font-size: ${n}px; }`)
	 .join("\n")
}
