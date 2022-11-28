import './NavBar.css';
import { CartW } from '../cartW/cartW';
const NavBar = () => {



    return (

        <header>

            <nav class="navbar navbar-expand-lg bg-light">

                <div class="container-fluid">

                    <img src="https://res.cloudinary.com/dolnw6mjt/image/upload/v1669595088/istockphoto-1172329644-612x612_wivgvd.jpg" alt="Logo" width="80" height="80" class="d-inline-block logo align-text-top"></img>
                    <a class="navbar-brand" href="#">VediMaria</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link " aria-current="page" href="#">Tortas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">CupCakes</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Combos</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartW />

            </nav>

        </header>
    )
}




export default NavBar
