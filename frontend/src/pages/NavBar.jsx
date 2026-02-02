import { useState, useEffect } from "react";



export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scroll, setScroll] = useState(false)


    useEffect(() =>{
        const handleScroll = () =>{
            setScroll(window.scrollY >50 );
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.addEventListener('scroll', handleScroll)
    
    }, [])

    const navlinks = [
        { href: "#home", label:"Home"},
        { href: "#skills", label:"Skills"},
        { href: "#rojects", label:"Project"},
        { href: "#Subscribe", label:"Subscribe"},
    ]

    return (

        <div>
            <nav className={`navbar navbar-expand-md ${scroll ? 'bg-white shadow-sm' : 'bg-white' } fixed-top`}>
                <div className="container">
                    <a className="navbar-brand fw-bold" href="#HOME"></a>
                    <span className="text-primary">Chiengtch</span>

                    <button className="navbar-toggler" type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-expanded
                    aria-label="Toggler- navigation">
                    <span className="navbar-toggler-icon"/></button>

                    <div className={`collapse navbar-collapse ${isOpen ? 'show' : '' }`}>
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0 align-items-md-center">
                            {navlinks.map((link) => (
                                <li className="nav-item" key={link.href}>
                                    <a className="nav-link text-dark " href={link.href}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                                <li className={`nav-item ms-md-3 ${isOpen ? 'w-100' : ''}`}>
                                    <a className={`btn btn-primary ${isOpen ? 'w-100 text-align-center': ''}`}
                                    href="#Contact">Hire Me</a>
                                </li>
                        </ul>
                    </div>
                </div>

            </nav>
        </div>
    );
};