import AstoriaLogo from '../assets/svg/logo.svg';
import ChooLogo from '../assets/svg/logo-choo-communities.svg';

import { initUserSettings } from '../data/initUserSettings';

const navLinks = [
    { label: 'Suite Tour', id: 'suites' },
    { label: 'Property Tour', id: 'propertyTour' },
    { label: 'Neighbourhood Tour', id: 'neighbourhoodTour' },
    { label: 'Gallery', id: 'gallery' },
]

const Nav = ({ currentSection, setUserSettings, setCurrentSection }) => {
    const clearFilters = () => {
        setUserSettings(initUserSettings);
        setCurrentSection('home')
    }

    const renderNavLinks = (link) => {
        const { label, id } = link;
        
        const classes = ['nav__link'];
        const isActive = currentSection === id;
        isActive && classes.push('active');

        return (
            <button key={id} className={classes.join(' ')} onClick={() => setCurrentSection(id)}>
                <p>{label}</p>
            </button>
        )
    }
    
    return (
        <nav className="nav">
            <div className="nav__content">
                <div className="nav__logo--astoria" onClick={() => clearFilters()}>
                    <img src={AstoriaLogo} alt="Astoria" />
                </div>

                <div className="nav__links">
                   {navLinks.map(link => renderNavLinks(link))}
                </div>

                <div className="nav__logo--choo">
                    <img src={ChooLogo} alt="Choo Communities" />
                </div>
            </div>
        </nav>
    )
}

export default Nav;