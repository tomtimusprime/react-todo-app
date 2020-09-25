import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer style={footerStyle}>
                <h1>Copyright Tom Black</h1>
            </footer>
        </div>
    )
}

const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}