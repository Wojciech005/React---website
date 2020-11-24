import React from 'react'
import {Route} from 'react-router-dom'
import "../styles/Footer.css"

const Footer = () => {
    return(
        <div>
            <h2>Copyright 2020</h2>
            <Route path="/" exact render={(props) => {
                
                    <p>you are on <span>main site</span> </p>
            }
            }/>

            <Route path="/:page" exact render={(props) => {
            return(
            <p>you are on <span>{props.match.params.page}</span> </p>
            )
            }
            } />

        </div>
    )
}

export default Footer