import React, { Component } from 'react' ;

export class MyFooter extends Component {
   render () {
   
    return(
      <footer className="page-footer font-small blue pt-4 bg-dark text-white">
      <div className="container-fluid text-center text-md-left">
          <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                  <h5 className="text-uppercase">Ecommerce Shop</h5>
                  <p>E-shop best choices for you .</p>
              </div>
  
              <hr className="clearfix w-100 d-md-none pb-0"/>
  
              <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase ">Links</h5>
                  <ul className="list-unstyled ">
                      <li><a className="text-decoration-none" href="#!">Home</a></li>
                      <li><a className="text-decoration-none" href="#!">Features</a></li>
                      <li><a className="text-decoration-none" href="#!">Pricing</a></li>
                  </ul>
              </div>
  
              <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Links</h5>
                  <ul className="list-unstyled">
                      <li><a className="text-decoration-none" href="#!">Facbook</a></li>
                      <li><a className="text-decoration-none" href="#!">instagram</a></li>
                      <li><a className="text-decoration-none" href="#!">Twitter</a></li>
                  </ul>
              </div>
          </div>
      </div>
  
      <div className="footer-copyright text-center py-3">© 2022 Copyright:
          <a className="text-decoration-none" href="#"> E-shop.com</a>
      </div>
  
  </footer>
  


        )
      }
   }
 
 
 