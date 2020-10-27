import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchClassDetails } from '../services/api'

import Card from '../components/card/Card'

export default function ClassDetailsPage() {
    const { classIndex } = useParams()
    const [ details, setDetails ] = useState({})
    useEffect(() => {
        const fetchData = async () => {
          const res = await fetchClassDetails(classIndex)
          console.log(res)
          setDetails({ ...res })
        }
        fetchData()
      }, [classIndex])

    if (!Object.keys(details).length) {
        return "Loading ..."
    } else {
        return (
            <>
            <div>
                Class: <strong>{ details.name }</strong>
            </div>
            <h4>Proficiencies</h4>
            <div className="flex-container">
            {
                details.proficiencies.length ?
                details.proficiencies.map(p =>
                    <Card key={p.index} text={p.name} />
                ) :
                "Loading ..."
            }
            </div>
            <hr/>
            <h4>Sub Classes</h4>
            <div className="flex-container">
            {
                details.subclasses.length ?
                details.subclasses.map(d =>
                    <Card key={d.index} text={d.name}>
                        <Link to={`/subclasses/${d.index}`} className="button">View Details</Link>
                    </Card>
                ) :
                "Loading ..."
            }
            </div>
            </>
        )
    }

}
