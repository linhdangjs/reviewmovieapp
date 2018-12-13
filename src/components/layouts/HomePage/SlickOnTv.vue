 <template>
    <div class="tvshow">
                    <div class="title-hd">
					<h2>on tv</h2>
					<a href="#" class="viewall">View all <i class="ion-ios-arrow-right"></i></a>
				    </div>
                    <div class="tabs">
                        <ul class="tab-links-2">
                            <li><a href="#tab21">#Popular</a></li>
                            <li class="active"><a href="#tab22"> #Coming soon</a></li>
                            <li><a href="#tab23">  #Top rated  </a></li>
                            <li><a href="#tab24"> #Most reviewed</a></li>                        
                        </ul>
                        <div class="tab-content">
                            <div id="tab21" class="tab">
                                <div class="row">
                          <slickTab
                            class="slick-multiItemSlider"
                            ref="slick"
                            :options="slickOptions"
                            @afterChange="handleAfterChange"
                            @beforeChange="handleBeforeChange"
                            @breakpoint="handleBreakpoint"
                            @destroy="handleDestroy"
                            @edge="handleEdge"
                            @init="handleInit"
                            @reInit="handleReInit"
                            @setPosition="handleSetPosition"
                            @swipe="handleSwipe"
                            @lazyLoaded="handleLazyLoaded"
                            @lazyLoadError="handleLazeLoadError">
                                        <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item1.jpg" alt="" width="185" height="284">
                                    </div> 
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Interstellar</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item2.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The revenant</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item3.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item4.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The walk</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item5.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Interstellar</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item6.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The revenant</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item7.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item8.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The walk</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item3.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                    </slickTab>
                                </div>
                            </div>
                            <div id="tab22" class="tab active">
                            <div class="row">
                        <slickTab
                            class="slick-multiItemSlider"
                            ref="slick"
                            :options="slickOptions"
                            @afterChange="handleAfterChange"
                            @beforeChange="handleBeforeChange"
                            @breakpoint="handleBreakpoint"
                            @destroy="handleDestroy"
                            @edge="handleEdge"
                            @init="handleInit"
                            @reInit="handleReInit"
                            @setPosition="handleSetPosition"
                            @swipe="handleSwipe"
                            @lazyLoaded="handleLazyLoaded"
                            @lazyLoadError="handleLazeLoadError">
                                        <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item1.jpg" alt="" width="185" height="284">
                                    </div> 
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Interstellar</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item2.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The revenant</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item3.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item4.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The walk</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item5.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Interstellar</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item6.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The revenant</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item7.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item8.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The walk</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item3.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                    </slickTab>
                                </div>
                            </div>
                            <div id="tab23" class="tab">
                                <div class="row">
                                                             <slickTab
                            class="slick-multiItemSlider"
                            ref="slick"
                            :options="slickOptions"
                            @afterChange="handleAfterChange"
                            @beforeChange="handleBeforeChange"
                            @breakpoint="handleBreakpoint"
                            @destroy="handleDestroy"
                            @edge="handleEdge"
                            @init="handleInit"
                            @reInit="handleReInit"
                            @setPosition="handleSetPosition"
                            @swipe="handleSwipe"
                            @lazyLoaded="handleLazyLoaded"
                            @lazyLoadError="handleLazeLoadError">
                                        <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item1.jpg" alt="" width="185" height="284">
                                    </div> 
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Interstellar</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item2.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The revenant</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item3.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item4.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The walk</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item5.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Interstellar</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item6.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The revenant</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item7.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item8.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The walk</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item3.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                    </slickTab>
                                </div>
                            </div>
                            <div id="tab24" class="tab">
                                <div class="row">
                                                         <slickTab
                            class="slick-multiItemSlider"
                            ref="slick"
                            :options="slickOptions"
                            @afterChange="handleAfterChange"
                            @beforeChange="handleBeforeChange"
                            @breakpoint="handleBreakpoint"
                            @destroy="handleDestroy"
                            @edge="handleEdge"
                            @init="handleInit"
                            @reInit="handleReInit"
                            @setPosition="handleSetPosition"
                            @swipe="handleSwipe"
                            @lazyLoaded="handleLazyLoaded"
                            @lazyLoadError="handleLazeLoadError">
                                        <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item1.jpg" alt="" width="185" height="284">
                                    </div> 
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Interstellar</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item2.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The revenant</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item3.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item4.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The walk</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item5.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Interstellar</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item6.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The revenant</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item7.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item8.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">The walk</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                            <div class="slide-it">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <img src="static/images/uploads/mv-item3.jpg" alt="" width="185" height="284">
                                    </div>
                                    <div class="hvr-inner">
                                        <a  href="#"> Read more <i class="ion-android-arrow-dropright"></i> </a>
                                    </div>
                                    <div class="title-in">
                                        <h6><a href="#">Die hard</a></h6>
                                        <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
                                    </div>
                                </div>
                            </div>
                    </slickTab>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
import SlickTab from 'vue-slick';

    export default {
        components: { SlickTab },
            data() {
                return { 
                    slickOptions: {
                        infinite: true,
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrows: false,
                        draggable:true,
                        // autoplay: true,
                        // autoplaySpeed: 2000,
                        dots: true,
                        responsive: [
                        {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                        },
                        {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                        },
                        {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                        }
                    ]
                    },
                    
                };
            },

    // All slick methods can be used too, example here
            methods: {
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                // Helpful if you have to deal with v-for to update dynamic lists
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },

            // Events listeners
            handleAfterChange(event, slick, currentSlide) {
                //console.log('handleAfterChange', event, slick, currentSlide);
            },
            handleBeforeChange(event, slick, currentSlide, nextSlide) {
                //console.log('handleBeforeChange', event, slick, currentSlide, nextSlide);
            },
            handleBreakpoint(event, slick, breakpoint) {
                //console.log('handleBreakpoint', event, slick, breakpoint);
            },
            handleDestroy(event, slick) {
                //console.log('handleDestroy', event, slick);
            },
            handleEdge(event, slick, direction) {
                //console.log('handleEdge', event, slick, direction);
            },
            handleInit(event, slick) {
                ///console.log('handleInit', event, slick);
            },
            handleReInit(event, slick) {
                //console.log('handleReInit', event, slick);
            },
            handleSetPosition(event, slick) {
                //console.log('handleSetPosition', event, slick);
            },
            handleSwipe(event, slick, direction) {
                //console.log('handleSwipe', event, slick, direction);
            },
            handleLazyLoaded(event, slick, image, imageSource) {
                //console.log('handleLazyLoaded', event, slick, image, imageSource);
            },
            handleLazeLoadError(event, slick, image, imageSource) {
                //console.log('handleLazeLoadError', event, slick, image, imageSource);
            }
        }
    }
</script>

<style >
 
</style>

 