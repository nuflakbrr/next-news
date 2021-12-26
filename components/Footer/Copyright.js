import React from 'react'

const Copyright = (props) => {

    return (
        <p style={{ fontSize: "small", color: "white", textAlign: "center" }} {...props}>
            &copy; {new Date().getFullYear()} Naufal Akbar Nugroho. All rights reserved.
        </p>
    )
}

export default Copyright
