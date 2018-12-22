<template>
     <div class="onTV" style="margin-top:60px">
        <div class="title-hd">
			<h2>TV SHOW</h2>
			<router-link tag="a" to="/tvshows" class="viewall">View all <i class="ion-ios-arrow-right"></i></router-link>
		</div>
        <tabs :options="{ useUrlFragment: false }" @clicked="tabClicked" @changed="tabChanged">
        <tab name="#Now Showing">
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
                          
                            <div class="slide-it" v-for="(tvshow, index) in tvshows" :key="index">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <v-lazy-image :src="tvshow.photoUrl" width="185" height="284" />
                                        <!-- <img src="static/images/uploads/mv-item1.jpg" alt="" width="185" height="284"> -->
                                    </div> 
                                    <div class="hvr-inner">
                                        <router-link tag="a" :to="'tvshow/'+tvshow.tvshow_id">Read more <i class="ion-android-arrow-dropright"></i> </router-link>      
                                    </div>
                                    <div class="title-in">
                                        <h6><a>{{ tvshow.name }}</a></h6>
                                        <p><i class="ion-android-star"></i><span>{{ tvshow.rating }}</span> /10</p>
                                    </div>
                                </div>
                            </div>
                    </slickTab>
                </div>
        </tab>
        <!-- <tab name="#Coming Soon">
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
                          
                            <div class="slide-it" v-for="(tvshow, index) in tvshows" :key="index">
                                <div class="movie-item">
                                    <div class="mv-img">
                                        <v-lazy-image :src="tvshow.photoUrl" width="185" height="284" />
                                    </div> 
                                    <div class="hvr-inner">
                                        <router-link tag="a" :to="'tvshow/'+tvshow.tvshow_id">Read more <i class="ion-android-arrow-dropright"></i> </router-link>
                                    </div>
                                    <div class="title-in">
                                        <h6><a>{{ tvshow.name }}</a></h6>
                                        <p><i class="ion-android-star"></i><span>{{ tvshow.rating }}</span> /10</p>
                                    </div>
                                </div>
                            </div>
                    </slickTab>
                </div>
        </tab> -->
    </tabs>
           
</div>
</template>

<script>
import SlickTab from 'vue-slick';
import VLazyImage from "v-lazy-image";
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
            computed : {
                tvshows() {
                    return this.$store.getters.tvshows;
                }
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
            },
            tabClicked (selectedTab) {
            console.log('Current tab re-clicked:' + selectedTab.tab.name);
             
            },
            tabChanged (selectedTab) {

            }
        }
    }
</script>

<style>
 .tabs-component {
  margin: 2em 0;
}

.tabs-component-tabs {
  /* border: solid 1px #ddd; */
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 5px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

/* .tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
} */

.tabs-component-tab-a:hover {
  color: #919963;
}
.tabs-component-tab.is-active a {
  color: #dcf836 !important;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: transparent;
    border-radius: 3px 3px 0 0;
    margin-right: .5em;
    transform: translateY(2px);
    transition: transform .3s ease;
  }

  .tabs-component-tab.is-active {
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: .75em 1em;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 14px;
  font-family:  "Noto Sans", sans-serif;
  font-weight: bold;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color:transparent;
    /* border: solid 1px #405266; */
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    padding: 0.5em 2em;
  }
}
</style>
