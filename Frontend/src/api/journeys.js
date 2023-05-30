

const serverUrl = 'http://localhost:3001'

/**
 * @param {{limit: number, offset: number}} params 
 */
export async function fetchJourneys(params) {
    const query = new URLSearchParams(params).toString()
    const result = await fetch(`${serverUrl}/journeys?` + query)
    if (result.ok) {
        return await result.json()
    } else {
        const errorMessage = await result.text()
        throw new Error('Fetching journeys failed: ' + errorMessage)
    }
}