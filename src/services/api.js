import axios from 'axios'

const BASE_API_URL = 'https://www.dnd5eapi.co/api/'

export async function fetchClasses()  {
    const res = await axios.get(BASE_API_URL+'classes')
    return res.data
}

export async function fetchClassDetails(classIndex)  {
    const res = await axios.get(BASE_API_URL+'classes/'+classIndex)
    return res.data
}

export async function fetchSubClassDetails(subclassIndex)  {
    const res = await axios.get(BASE_API_URL+'subclasses/'+subclassIndex)
    return res.data
}
