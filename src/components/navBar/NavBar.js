import './NavBar.css';
import { CartW } from '../cartW/CartW';
import { Link } from 'react-router-dom';




const NavBar = () => {



    return (

        <header>

            <nav class="navbar navbar-expand-lg bg-light">

                <div class="container-fluid">


                    <Link to="/" class="d-inline-block logo align-text-top navbar-brand" >

                        <img alt="tortita" src="https://res.cloudinary.com/dolnw6mjt/image/upload/v1669595088/istockphoto-1172329644-612x612_wivgvd.jpg" width="80" height="80" ></img>
                    </Link>

                    <Link to="/" class="navbar-brand" href="#">VediMaria</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <Link to="/category/tortas" class="nav-item">
                                <a class="nav-link " aria-current="page" >Tortas</a>
                            </Link>
                            <Link to="/category/cupcakes" class="nav-item">
                                <a class="nav-link">CupCakes</a>
                            </Link>
                            <Link to="/category/combos" class="nav-item">
                                <a class="nav-link">Combos</a>
                            </Link>
                        </ul>
                    </div>
                </div>
                <CartW />

            </nav>

        </header>
    )
}




export default NavBar
