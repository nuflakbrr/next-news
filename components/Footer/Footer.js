import React from 'react'
import Copyright  from './Copyright'
import SocialMediaLinks  from './SocialMediaLinks'
import styles from '../../styles/Footer.module.css'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <div>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", color: "white" }}>
                    <h5 style={{ marginRight: "30px" }}><a href="https://github.com/nuflakbrr/next-news" target="_blank" rel="noreferrer" className={styles.source}>Source Code <FaExternalLinkAlt style={{ marginLeft: "5px" }} /></a></h5>
                    <SocialMediaLinks />
                </div>
                <Copyright />
            </div>
        </footer>
    )
}

export default Footer
