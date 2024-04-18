function _mountXMasterKey() {
	const prefix = '$2a$10$dmff4DS';
	const content = process.env.NEXT_PUBLIC_JSON_BIN_ACCESS_KEY_CONTENT;
	const sufix = process.env.NEXT_PUBLIC_JSON_BIN_ACCESS_KEY_SUFIX;

	return `${prefix}/${content}/${sufix}`;
}

export async function getShirtsList() {
	const urlToRequestData = `https://api.jsonbin.io/v3/b/${process.env.NEXT_PUBLIC_JSON_BIN_ID}`;

	const shirtsResponse = await fetch(urlToRequestData, {
		headers: {
			'Content-Type': 'application/json',
			'X-Master-Key': _mountXMasterKey(),
		},
		cache: 'force-cache',
	});

	const shirts = await shirtsResponse.json();

	return shirts.record || [];
}
