import React from 'react';
import "./bootstrap.css"


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


class Home extends React.Component {
  
 
  render() {
   
    return (
     
        <div className="maincontainer">
         
         
          <div class="container">
        
                <div class="row">
                    <div class="col-12 pb-5">
                      
                        <section class="row">
                           
                            <div class="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
                                <div id="featured" class="carousel slide carousel" data-ride="carousel">
                                    
                                    <ol class="boot-carousel-indicators top-indicator">
                                        <li data-target="#featured" data-slide-to="0" class="active"></li>
                                        <li data-target="#featured" data-slide-to="1"></li>
                                        <li data-target="#featured" data-slide-to="2"></li>
                                        <li data-target="#featured" data-slide-to="3"></li>
                                    </ol>
                                    
                                    
                                    <div class="boot-carousel-inner">
                                        
                                        <div class="carousel-item active">
                                            <div class="card border-0 rounded-0 text-light boot-overflow zoom">
                                                <div class="position-relative">
                                                   
                                                    <div class="ratio_left-cover-1 image-wrapper">
                                                        <a href="#">
                                                            <img class="img-fluid w-100"
                                                                src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png"
                                                                alt="Bootstrap news template" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 boot-bg-shadow">
                                                      
                                                        <a href="#">
                                                            <h2 class="h3 post-title text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                                        </a>
                                                       
                                                        <div class="news-meta">
                                                            <span class="news-author">by <a class="text-white font-weight-bold" href="#">Jennifer</a></span>
                                                            <span class="news-date">Oct 22, 2019</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                       
                                        <div class="carousel-item">
                                            <div class="card border-0 rounded-0 text-light boot-overflow zoom">
                                                <div class="position-relative">
                                                   
                                                    <div class="ratio_left-cover-1 image-wrapper">
                                                        <a href="#">
                                                            <img class="img-fluid w-100"
                                                                src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png"
                                                                alt="Bootstrap news theme" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 boot-bg-shadow">
                                                       
                                                        <a href="#">
                                                            <h2 class="h3 post-title text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                                        </a>
                                                       
                                                        <div class="news-meta">
                                                            <span class="news-author">by <a class="text-white font-weight-bold" href="#">Jassa</a></span>
                                                            <span class="news-date">Oct 22, 2019</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                      
                                        <div class="carousel-item">
                                            <div class="card border-0 rounded-0 text-light boot-overflow zoom">
                                                <div class="position-relative">
                                                   
                                                    <div class="ratio_left-cover-1 image-wrapper">
                                                        <a href="#">
                                                            <img class="img-fluid w-100"
                                                                src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png"
                                                                alt="Bootstrap blog template" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 boot-bg-shadow">
                                                    
                                                        <a href="#">
                                                            <h2 class="h3 post-title text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                                        </a>
                                                     
                                                        <div class="news-meta">
                                                            <span class="news-author">by <a class="text-white font-weight-bold" href="#">Jassa</a></span>
                                                            <span class="news-date">Oct 22, 2019</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                       
                                        <div class="carousel-item">
                                            <div class="card border-0 rounded-0 text-light overflow zoom">
                                                <div class="position-relative">
                                                   
                                                    <div class="ratio_left-cover-1 image-wrapper">
                                                        <a href="#">
                                                            <img class="img-fluid w-100"
                                                                src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png"
                                                                alt="Bootstrap portal template" />
                                                        </a>
                                                    </div>
                                                    <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                       
                                                        <a href="#">
                                                            <h2 class="h3 post-title text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                                        </a>
                                                       
                                                        <div class="news-meta">
                                                            <span class="news-author">by <a class="text-white font-weight-bold" href="#">Jassa</a></span>
                                                            <span class="news-date">Oct 22, 2019</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      
                                    </div>
                                   
                                </div>
                                
                              
                                <a class="carousel-control-prev" href="#featured" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#featured" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                           
                            <div class="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
                                <div class="row">
                                   
                                    <div class="col-6 pb-1 pt-0 pr-1">
                                        <div class="card border-0 rounded-0 text-white overflow zoom">
                                            <div class="position-relative">
                                                
                                                <div class="ratio_right-cover-2 image-wrapper">
                                                    <a href="#">
                                                        <img class="img-fluid"
                                                            src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png"
                                                            alt="simple blog template bootstrap" />
                                                    </a>
                                                </div>
                                                <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                 
                                                    <a class="p-1 badge badge-primary rounded-0" href="#">Lifestyle</a>

                                                   
                                                    <a href="#">
                                                        <h2 class="h5 text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                  
                                    <div class="col-6 pb-1 pl-1 pt-0">
                                        <div class="card border-0 rounded-0 text-white overflow zoom">
                                            <div class="position-relative">
                                               
                                                <div class="ratio_right-cover-2 image-wrapper">
                                                    <a href="#">
                                                        <img class="img-fluid"
                                                            src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png"
                                                            alt="bootstrap templates for blog" />
                                                    </a>
                                                </div>
                                                <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                   
                                                    <a class="p-1 badge badge-primary rounded-0" href="#">Motocross</a>
                                                    
                                                    <a href="#">
                                                        <h2 class="h5 text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                    <div class="col-6 pb-1 pr-1 pt-1">
                                        <div class="card border-0 rounded-0 text-white overflow zoom">
                                            <div class="position-relative">
                                               
                                                <div class="ratio_right-cover-2 image-wrapper">
                                                    <a href="#">
                                                        <img class="img-fluid"
                                                            src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png"
                                                            alt="bootstrap blog wordpress theme" />
                                                    </a>
                                                </div>
                                                <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                  
                                                    <a class="p-1 badge badge-primary rounded-0" href="#">Fitness</a>
                                                   
                                                    <a href="#">
                                                        <h2 class="h5 text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                   
                                    <div class="col-6 pb-1 pl-1 pt-1">
                                        <div class="card border-0 rounded-0 text-white overflow zoom">
                                            <div class="position-relative">
                                                
                                                <div class="ratio_right-cover-2 image-wrapper">
                                                    <a href="#">
                                                        <img class="img-fluid"
                                                            src="https://therichpost.com/wp-content/uploads/2021/03/Reactjs-Bootstrap-4-News-Magazine-Carousel.png"
                                                            alt="blog website templates bootstrap" />
                                                    </a>
                                                </div>
                                                <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
                                                   
                                                    <a class="p-1 badge badge-primary rounded-0" href="#">Adventure</a>
                                                   
                                                    <a href="#">
                                                        <h2 class="h5 text-white my-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                          
                        </section>
                       
                    </div>
                </div>
               </div>
                
          </div> 
             
       
     
      
)
};
}

export default Home;