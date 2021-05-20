export default function SomeMoreShoes(){
    return(
     <>
     <div className="mid_slider_w3lsagile">
     <div className="col-md-3 mid_slider_text">
            <h5>Some More Shoes</h5>
          </div>
          <div className="col-md-9 mid_slider_info">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              {/* Indicators */}
              <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to={0} className />
                <li data-target="#myCarousel" data-slide-to={1} className="active" />
                <li data-target="#myCarousel" data-slide-to={2} className />
                <li data-target="#myCarousel" data-slide-to={3} className />
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="item">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g1.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g2.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g3.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g4.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                  </div>
                </div>
                <div className="item active">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g5.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g6.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g2.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g1.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g1.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g2.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g3.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g4.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="row">
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g1.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g2.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g3.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3 slidering">
                      <div className="thumbnail"><img src="assets/images/g4.jpg" alt="Image" style={{maxWidth: '100%'}} /></div>
                    </div>
                  </div>
                </div>
              </div>
              <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className="fa fa-chevron-left" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className="fa fa-chevron-right" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
              {/* The Modal */}
            </div>
          </div>
          <div className="clearfix"> </div>
     </div>
     
          </>   
    )
}