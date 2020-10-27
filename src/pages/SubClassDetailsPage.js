import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchSubClassDetails } from '../services/api'

export default function SubClassDetailsPage() {
    const { subclassIndex } = useParams()
    const [ details, setDetails ] = useState({})
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetchSubClassDetails(subclassIndex)
          setDetails({ ...res })
        }
        fetchData()
      }, [subclassIndex])

    if (!Object.keys(details).length) {
        return "Loading ..."
    } else {
        return (
            <>
            <div>
                Sub Class: <strong>{ details.name }</strong>
            </div>
            <div>
                Class: <strong><Link className="link" to={`/classes/${details.class.index}`}>{ details.class.name }</Link></strong>
            </div>
            <div>
                Flavor: <strong>{ details.subclass_flavor }</strong>
            </div>
            <hr/>
            <h4>Description</h4>
            { details.desc.map(details => <p className="para">{ details }</p>) }
            <p>
            </p>

            </>
        )
    }
}
