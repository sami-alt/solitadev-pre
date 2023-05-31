import { getData } from './getData'

/**
 * @param {{limit: number, offset: number}} params 
 */
export async function fetchStations(params){
	return await getData('stations', params)
}

/**
 * @param {number} fid 
 */
export async function fetchSignleStation(fid){
	return await getData('stations/' + fid)
}
