import React  from 'react';
import myphoto from '../../img/img11.png';
import About from '../header/about';

const Header = ()=>{
        return(
                <header>
                <div className="collapse bg-dark" id="navbarHeader">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-8 col-md-7 py-4">
                        <img alt='momuzio' src={myphoto}></img>
                        <hr></hr>
                        <h1>Mahmoud hassan hamed okily </h1>
                        <h4> Full stack web developer</h4>
                        <h6>Faculty of commerce</h6>
                        <h6>Egyption</h6>
                        <h6>Italy-como</h6>
                        <h6>heshamalamam73@gmail.com</h6>
                        <a className='skills' href='#skills'>MY SKILLS</a>
                      </div>
                      <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        <ul className="list-unstyled">
                          <li><a href="https://www.instagram.com/hesham_alamam/" className="text-white">Follow on intgram</a></li>
                          <li><a href="https://www.facebook.com/mahmoudhassan993" className="text-white">Like on Facebook</a></li>
                          <li><a href="https://www.linkedin.com/in/mahmoud-hassan-okily-3ab3a7b6/" className="text-white">Follow on linkedin</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="navbar navbar-dark bg-dark shadow-sm">
                  <div className="container d-flex justify-content-between">
                    <a href="/" className="navbar-brand d-flex align-items-center">
                      <strong>MOMUZIO</strong>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                  </div>
                </div>
              </header>
        )
    }

export default Header;