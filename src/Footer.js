import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footerarea">
            <div className="footerarea__top">
                <p>Back to Top</p>
            </div>
            <div className="footerarea__links">
                <div className="footerarea__linkarea">
                    <span>Test1</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Test2</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Test3</span>
                </div>
                <div className="footerarea__linkarea">
                    <span>Test4</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;