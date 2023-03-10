const path = require("path");

module.exports = function (filename) {
	const sourceFileName = path.parse(filename).name.split(".")[0];
	return {
		sourcePath: `../src/${sourceFileName}`,
	};
};
