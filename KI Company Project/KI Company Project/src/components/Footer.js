import React from 'react';
import './Footer.css';

export default function Footer(props) {
  return (
    <>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
                The Engineering solution set up of Karishma Industries is a first step for the vision of 
                Mr. Kalpesh Bhayade. The operations of set up of machines and equipments are 
                running in the Vasai premises and supplying job works to local market. The idea of 
                such set up has come out to ride a growth spurt, having discovered the low capital 
                investment with low risk in terms of marketing and sales. Our technical expertise in the 
                engineering field gave us a push to start this new venture. Bolstered by appearances in 
                standard manufacturing processes, we are developing a channel to sell directly to 
                corporations. 
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Products</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Milling</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">Lathe</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Surface Grinder</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Cylindrical Grinder</a></li>
              <li><a href="http://scanfcode.com/category/android/">Drilling</a></li>
              {/* <li><a href="http://scanfcode.com/category/templates/">Templates</a></li> */}
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">About Us</a></li>
              <li><a href="/">Why US?</a></li>
              <li><a href="/">Our Team</a></li>
              <li><a href="/">Success Stories</a></li>
              {/* <li><a href="/">Sitemap</a></li> */}
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2017 All Rights Reserved by &nbsp;
         <a href="#">Karishma Industries</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              {/* <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li> */}
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </>
  )
}
