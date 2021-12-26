import React from 'react'
import Copyright  from './Copyright'
import SocialMediaLinks  from './SocialMediaLinks'

const Footer = () => {
    return (
        <footer>
            <div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", color: "white" }}>
                    <h5 style={{ marginRight: "30px" }}>Naufal Akbar Nugroho</h5>
                    <SocialMediaLinks />
                </div>
                <Copyright />
            </div>
        </footer>
    )
}

export default Footer
