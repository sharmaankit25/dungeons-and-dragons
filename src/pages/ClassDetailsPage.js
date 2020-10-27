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
            <div>
                Hit Die: <strong>{ details.hit_die }</strong>
            </div>
            <hr/>
            <h4>Sub Classes</h4>
            <div className="flex-container">
            {
                details.subclasses.length ?
                details.subclasses.map(d =>
                    <Card key={d.index} title={d.name}>
                        <Link to={`/subclasses/${d.index}`} className="button">View Details</Link>
                    </Card>
                ) :
                "Loading ..."
            }
            </div>
            <h4>Proficiencies</h4>
            <div className="flex-container">
            {
                details.proficiencies.length ?
                details.proficiencies.map(p =>
                    <Card key={p.index} title={p.name} />
                ) :
                "Loading ..."
            }
            </div>
            <h4>Saving Throws</h4>
            <div className="flex-container">
            {
                details.saving_throws.length ?
                details.saving_throws.map(p =>
                    <Card key={p.index} title={p.name} />
                ) :
                "Loading ..."
            }
            </div>

            </>
        )
    }

}
