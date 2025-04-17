import './Footerstyle.css'

const Footer = () => {
    return(
        <div className="footer">
            <div className="header">
                <div>
                    <h1>Eden Trek</h1>
                    <p>Choose your favorite Destination.</p>
                </div>
                <div>
                    <a href="/">
                        <i className = "fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i className = "fa-brands fa-instagram"></i>
                    </a>
                    <a href="/">
                        <i className = "fa-brands fa-linkedin"></i>      
                    </a>
                    <a href="/">
                        <i className = "fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;