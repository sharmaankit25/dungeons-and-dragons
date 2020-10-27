import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Card from '../components/card/Card'
import { fetchClasses } from '../services/api'
export default function Home() {
  const [classes, setClasses] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchClasses()
      setClasses([ ...res.results ])
    }
    fetchData()
  }, [])

    return (
      <div className="flex-container">
        {
          classes.length ?
          classes.map(cls =>
            <Card key={cls.index} title={cls.name}>
              <Link to={`/classes/${cls.index}`} className="button">View Details</Link>
            </Card>
          ) :
          "Loading ..."
        }
      </div>
    )
}
