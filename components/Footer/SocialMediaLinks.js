import React from 'react'
import { FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa'

const SocialMediaLinks = (props) => {
    return (
        <div {...props}>
            <a href="https://github.com/nuflakbrr" target='_blank' aria-label="GitHub" rel="noreferrer" style={{ marginRight: "10px" }}>
                <FaGithub style={{ fontSize: "20px" }} />
            </a>
            <a href="https://www.instagram.com/kbrnugroho" target='_blank' aria-label="Instagram" rel="noreferrer" style={{ marginRight: "10px" }}>
                <FaInstagram style={{ fontSize: "20px" }} />
            </a>
            <a href="https://www.linkedin.com/public-profile/in/nuflakbrr" target='_blank' aria-label="LinkedIn" rel="noreferrer" style={{ marginRight: "10px" }}>
                <FaLinkedin style={{ fontSize: "20px" }} />
            </a>
            <a href="mailto:naufalakbar378@gmail.com" aria-label="Email" rel="noreferrer">
                <FaEnvelope style={{ fontSize: "20px" }} />
            </a>
        </div>
    )
}

export default SocialMediaLinks
