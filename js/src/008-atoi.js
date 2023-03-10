module.exports = [
	/**
	 * @param {string} s
	 * @return {number}
	 */
	function myAtoi(s) {
		s = s.trim();
		let suffix = s[0];
		if (s[0] === "-" || s[0] === "+") {
			s = s.slice(1);
		}

		let validateStr = "";
		for (const item of s) {
			if (item.charCodeAt(0) < 48 || item.charCodeAt(0) > 57) {
				break;
			}
			validateStr += item;
		}

		if (!validateStr) {
			return 0;
		}

		let isNegative = suffix === "-";
		let atoiNum = isNegative ? -Number(validateStr) : Number(validateStr);
		if (atoiNum < -(2 ** 31)) {
			return -(2 ** 31);
		}
		if (atoiNum > 2 ** 31 - 1) {
			return 2 ** 31 - 1;
		}
		return atoiNum;
	},
	/**
	 * @param {string} s
	 * @return {number}
	 */
	function myAtoi1(s) {
		let automaton = new Automaton();
		Array.from(s).forEach((c) => automaton.get(c));
		return automaton.result() === 0 ? 0 : automaton.sign() * automaton.result();

		function Automaton() {
			const STATE = {
				Start: "start",
				Signed: "signed",
				InNumber: "in_number",
				End: "end",
			};
			const DFATable = {
				// space, signed, number, not number
				[STATE.start]: [STATE.start, STATE.Signed, STATE.InNumber, STATE.End],
				[STATE.Signed]: [STATE.End, STATE.End, STATE.InNumber, STATE.End],
				[STATE.InNumber]: [STATE.End, STATE.End, STATE.InNumber, STATE.End],
				[STATE.End]: [STATE.End, STATE.End, STATE.End, STATE.End],
			};
			let state = STATE.start;
			let sign = 1;
			let result = 0;
			return {
				sign: () => sign,
				result: () => result,
				get: (c) => {
					state = DFATable[state][getCol(c)];
					if (state === "in_number") {
						result = result * 10 + Number(c);
						result =
							sign === 1
								? Math.min(result, 2 ** 31 - 1)
								: Math.min(result, 2 ** 31);
					} else if (state === "signed") {
						sign = c === "+" ? 1 : -1;
					}
				},
			};

			function getCol(c) {
				if (c === " ") {
					return 0;
				}
				if (c === "+" || c === "-") {
					return 1;
				}
				if (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57) {
					return 2;
				}
				return 3;
			}
		}
	},
];
