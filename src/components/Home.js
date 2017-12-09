import React from 'react'
import {Link} from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            Welcome to home
            <Link className="btn" to="/catalogue">See the Catalogue</Link>
        </div>
    )
}

export default Home;