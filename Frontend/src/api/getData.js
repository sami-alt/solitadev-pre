
const serverUrl = 'http://localhost:3001'

export async function getData(apiPath, params) {
	const query = params ? new URLSearchParams(params).toString() : ''
	const fullUrl = serverUrl + '/' + apiPath + (query.length ? `?${query}` : '')
	const result = await fetch(fullUrl)
	if(result.ok){
		return await result.json()
	} else {
		const errorMessage = await result.text()
		throw new Error('Fetching  stations failed: ' + errorMessage)
	}
}
