const fs = require("fs");
const leetcodeMeta = require("../data/meta.json");

let questionId = Number(process.argv[process.argv.length - 1]);
if (Number.isNaN(questionId)) {
	console.error("questionId is no Number");
	process.exit();
}

let question = leetcodeMeta.stat_status_pairs.find(
	(r) => r.stat.question_id === questionId,
);

if (!question) {
	console.error("can't find question");
	process.exit();
}

// foramt questionId to 001
questionId = String(questionId);
if (questionId.length < 3) {
	questionId = "0".repeat(3 - questionId.length) + questionId;
}

let questionFileName = `${questionId}-${question.stat.question__title_slug}`;
if (fs.existsSync(`./src/${questionFileName}.js`)) {
	console.error(`exist file: ${questionFileName}`);
	process.exit();
}

fs.writeFileSync(
	`./src/${questionFileName}.js`,
	`module.exports = [
    function test() {
    },
];`,
);
fs.writeFileSync(
	`./test/${questionFileName}.test.js`,
	`const fns = require(require(".")(__filename).sourcePath);

fns.forEach((fn) => {
    describe(fn.name, () => {
        it("test", () => {
            expect(fn("test")).toEqual(true);
        });
    });
});`,
);
