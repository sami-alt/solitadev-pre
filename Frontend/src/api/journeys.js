import { getData } from './getData'

/**
 * @param {{limit: number, offset: number}} params 
 */
export async function fetchJourneys(params) {
	return await getData('journeys', params)
}
