const template = `
<!doctype html>
<html lang="en">
	<head></head>
	<body>
		<div id="root" data-ssr="true">___content___</div>
		<script src="/umd/index.js"></script>
	</body>
</html>
`;

module.exports = template;
