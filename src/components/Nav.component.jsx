import AstoriaLogo from '../assets/svg/logo.svg';
import ChooLogo from '../assets/svg/logo-choo-communities.svg';

const Nav = ({ setCurrentSection }) => {
    return (
        <nav className="nav">
            <div className="nav__content">
                <div className="nav__logo--astoria" onClick={() => setCurrentSection('home')}>
                    <img src={AstoriaLogo} alt="Astoria" />
                </div>

                <div className="nav__links">
                    <button className="nav__link" onClick={() => setCurrentSection('suites')}>
                        <p>SUITE TOUR</p>
                    </button>

                    <button className="nav__link" onClick={() => setCurrentSection('propertyTour')}>
                        <p>PROPERTY TOUR</p>
                    </button>

                    <button className="nav__link" onClick={() => setCurrentSection('neighbourhoodTour')}>
                        <p>NEIGHBOURHOOD TOUR</p>
                    </button>

                    <button className="nav__link" onClick={() => setCurrentSection('gallery')}>
                        <p>GALLERY</p>
                    </button>
                </div>

                <div className="nav__logo--choo">
                    <img src={ChooLogo} alt="Choo Communities" />
                </div>
            </div>
        </nav>
    )
}

export default Nav;