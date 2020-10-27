import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
export default function Header() {
    const history = useHistory();
    const location = useLocation();
    return (
        <header className="App-header">
          <h1 className="text-primary text-center">Dungeons and Dragons</h1>
          {
            location.pathname !== "/" &&
            <div className="row">
              <Link className="link" to="/">Home</Link>
              <button className="button float-right" onClick={() => history.goBack()}>Back</button>
            </div>
          }

        </header>
    )
}
