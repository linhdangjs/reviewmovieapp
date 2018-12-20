<template>
<div class="wrap-book-ticket">
            <div class="hero common-hero">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="hero-ct">
                        <h1 style="text-align:center; margin-left: 0"> ĐẶT VÉ</h1>
                        <ul class="breadcumb">
                            <li class="active"><a href="moviegrid.html#">Home</a></li>
                            <li> <span class="ion-ios-arrow-right"></span> BOOK TICKET</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="page-single">
        <div class="container">
            <div class="row ipad-width">
                <div class="col-md-7 col-sm-12 col-xs-12">

                    <div class="flex-wrap-movielist">
                           <img src="/static/images/uploads/screen.png" alt="">				
                    </div>		
                    <div class="exit-door">
                         <img src="/static/images/uploads/exit-door.png" alt="">
                    </div>
                    <div class="wrap-row" style="margin-top: 100px">
                        <div class="row-a seat-area">
                            <app-seat :disabled="isDisabled(seat.status)" @click.native="targetSeat(seat.seat_id, seat.seat_name)" v-for="seat in currentTicketRoom.listseat.RowA"  :key="seat.seat_id" :class="{ reserved: !seat.status }">{{ seat.seat_name }}</app-seat>
                        </div>
                        <div class="row-b seat-area">
                            <app-seat :disabled="isDisabled(seat.status)" @click.native="targetSeat(seat.seat_id, seat.seat_name)" v-for="seat in currentTicketRoom.listseat.RowB"  :key="seat.seat_id" :class="{ reserved: !seat.status }">{{ seat.seat_name }}</app-seat>
                        </div>
                        <div class="row-c seat-area">
                            <app-seat :disabled="isDisabled(seat.status)" @click.native="targetSeat(seat.seat_id, seat.seat_name)" v-for="seat in currentTicketRoom.listseat.RowC"  :key="seat.seat_id" :class="{ reserved: !seat.status }">{{ seat.seat_name }}</app-seat>
                        </div>
                        <div class="row-d seat-area">
                            <app-seat :disabled="isDisabled(seat.status)" @click.native="targetSeat(seat.seat_id, seat.seat_name)" v-for="seat in currentTicketRoom.listseat.RowD"  :key="seat.seat_id" :class="{ reserved: !seat.status }">{{ seat.seat_name }}</app-seat>
                        </div>
                    </div>
                   
                        <div class="note">
                            <ul>
                                <li>
                                    <button class="btn-free" style="background-color:rgba(72, 72, 78, 0.5)"></button>
                                    <span>Free</span>
                                </li>
                                <li>
                                    <button class="btn-reserved" style="background-color:#b01010e6"></button>
                                    <span>Reserved</span>
                                </li>
                                <li>
                                    <button class="btn-selected" style="background-color: #85c325e6"></button>
                                    <span>Selected</span>
                                </li>
                            </ul>
                        </div>
                    <!-- <div class="topbar-filter">
                        <label>Movies per page:</label>
                        <select>
                            <option value="range">20 Movies</option>
                            <option value="saab">10 Movies</option>
                        </select>
                        
                        <div class="pagination2">
                            <span>Page 1 of 2:</span>
                            <a class="active" href="moviegrid.html#">1</a>
                            <a href="moviegrid.html#">2</a>
                            <a href="moviegrid.html#">3</a>
                            <a href="moviegrid.html#">...</a>
                            <a href="moviegrid.html#">78</a>
                            <a href="moviegrid.html#">79</a>
                            <a href="moviegrid.html#"><i class="ion-arrow-right-b"></i></a>
                        </div>
                    </div> -->
                </div>
                <div class="col-md-5 col-sm-12 col-xs-12">
                    <div class="sidebar">
                        <div class="searh-form">
                            <h4 class="sb-title">Thông Tin Thanh Toán</h4>
                            <form class="form-style-1" @submit.prevent="submitBookTicket">
                                <div class="row">
                                    <div class="col-md-12 form-it">
                                        <div class="col-md-4">
                                            <img :src="currentMovie[0].photoUrl" alt="" style="width:100%">
                                        </div>
                                        <div class="col-md-8">
                                            <p style="width:100%;font-weight:bold">Movie: {{ currentMovie[0].name }}</p>
                                            <p>Rạp {{ currentTicketRoom.cine_name }}</p>
                                            <p>Suất : {{ currentTicketRoom.show_time }}</p>
                                        </div>
                                    </div>
                                    <div class="col-md-12 form-it">
                                        <label class="title">Combo & Khuyến Mãi</label>
                                       <table>
                                           <tr>
                                                <th>Combo</th>
                                                <th>Số lượng</th>
                                                <th>Giá</th>
                                                <th>Tổng</th>
                                           </tr>
                                          <tr>
                                              <td>
                                                  <img src="/static/images/uploads/combo-1.jpg" alt="">
                                                  <p>iCombo 1</p>
                                                 
                                              </td>
                                              <td><input type="number" min="0" max="20" v-model="combo_1" name="combo-1" id="combo-1"></td>   
                                              <td><span>60.000 VNĐ</span></td>
                                              <td><span>0 VNĐ</span></td>
                                          </tr>
                                         <tr>
                                              <td>
                                                  <img src="/static/images/uploads/combo-2.jpg" alt="">
                                                   <p>iCombo 2</p>
                                            </td>
                                              <td><input type="number" min="0" max="20" v-model="combo_2" name="combo-2" id="combo-2"></td>   
                                              <td><span>80.000 VNĐ</span></td>
                                              <td><span>0 VNĐ</span></td>
                                          </tr>
                                       </table>
                                    </div>
                                    <div class="col-md-12 form-it">
                                        <label class="title">Vị Trí Đã Chọn: {{ seatSeleceted.length }}</label>
                                        <div class="seat-selected">
                                            <p v-if="seatSeleceted.length==0">Chưa chọn ghế!</p>
                                            <button class="seat" v-for="seat in seatNameSelected" :key="seat">{{ seat }}</button>
                                            <!-- <button class="seat">C5</button>
                                            <button class="seat">D1</button> -->
                                        </div>
                                    </div>
                                    <div class="col-md-12 form-it">
                                        <label class="title">Tổng Cộng :</label>
                                        <div class="total-pay" style="text-align:center">
                                            <p>{{ totalPay | formatCommas }} VNĐ</p>
                                        </div>
                                    </div>
                                    <div class="col-md-12 ">
                                        <input class="submit" type="submit" value="Thanh Toán" style="cursor:pointer">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!-- <div class="ads">
                            <img src="/static/images/uploads/ads1.png" alt="">
                        </div> -->
                        <!-- <div class="sb-facebook sb-it">
                            <h4 class="sb-title">Find us on Facebook</h4>
                            <iframe src="moviegrid.html" data-src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhaintheme%2F%3Ffref%3Dts&tabs=timeline&width=340&height=315px&small_header=true&adapt_container_width=false&hide_cover=false&show_facepile=true&appId"  height="315" style="width:100%;border:none;overflow:hidden" ></iframe>
                        </div>
                        <div class="sb-twitter sb-it">
                            <h4 class="sb-title">Tweet to us</h4>
                            <div class="slick-tw">
                                <div class="tweet item" id="599202861751410688">
                                </div>
                                <div class="tweet item" id="297462728598122498">
                                </div>
                            </div>					
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>

<script>
import Seat from '@/components/layouts/Ticket/Seat.vue'
    export default {
            data() {
                return {
                    seatSeleceted : [],
                    seatNameSelected : [],
                    combo_1: 0,
                    combo_2: 0
                }
            },
            computed: {
                currentMovie() {
				var movies = this.$store.getters.movies;
                var currentMovie = movies.filter(movie => movie.movie_id === this.$route.query.movie_id);
				return currentMovie;
                },
                currentTicketRoom() {
                    return this.$store.getters.getCurrentTicketRoom;
                },
                totalPay() {
                    if(this.combo_1 >= 0 && this.combo_2 >= 0) {
                        return this.seatSeleceted.length * 75000 + this.combo_1 * 60000 + this.combo_2 * 80000;
                    } else {
                        return 0;
                    }
                     
                }
            },
        	beforeRouteEnter (to, from, next) {
                next(vm => {
                    vm.fetchAllMovies();
                    vm.fetchCurrentTicketRoom();
		        });
            },
            methods: {
                fetchAllMovies() {
                    this.$store.dispatch("getAllMovies").then(() => {
                        // console.log(this.$store.getters.reviews)
                    })
                },
                fetchCurrentTicketRoom() {
                    this.$store.dispatch("getTicketRoomByScheduleID", this.$route.query.schedule_id)
                },
                isDisabled(option) {
                    if(option) return false
                    else return true
                },
                targetSeat(seat_id, seat_name) {
                    var index = this.seatSeleceted.indexOf(seat_id);
                    if(index > -1) {
                        this.seatSeleceted.splice(index, 1);
                    } 
                    else {
                        this.seatSeleceted.push(seat_id);
                    }
                    var indexName = this.seatNameSelected.indexOf(seat_name);
                    if(indexName > -1) {
                        this.seatNameSelected.splice(indexName, 1);
                    }
                    else {
                        this.seatNameSelected.push(seat_name);
                    }
                },
                submitBookTicket() {
                    console.log('submit success');
                }
            },
            filters: {
                formatCommas(value) {
                     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            },
            components: {
                appSeat : Seat
            }
    }
</script>

<style>
    .ticket-box {
       display: block;
    }
    .exit-door {
        text-align: right;
    }
    .exit-door img {
        width: 30px;
        height: 50px;
        position: absolute;
        top: 100px;
        right: 5px;
    }
    .seat-area {
        margin-left: 40px;
        margin-top: 40px;
        text-align: center;
    }
    .seat-area button:nth-child(3),
    .seat-area button:nth-child(7)
     {
        margin-right: 20px;
    }
    .seat-area button {
        background: rgba(72, 72, 78, 0.5);
        color: #eae1e1;
        margin-left: 5px;
        cursor: pointer;
        border: none;
        border-radius: 5px;
        width: 40px;
        height: 40px;
        text-align: center;
    }
    .seat-area button.selected {
        background: #85c325e6;
    }
    .seat-area button.reserved {
        background: #b01010e6;
        cursor: not-allowed;
    }

    .note {
        margin-top: 50px;
        margin-left: 40px;
        text-align: center;
    }
    .note ul li {
        display: inline-block;
        margin-right: 20px;
        color: #eae1e1;
       
    }
    .note ul li span {
         line-height: 30px;
    }
    .note button {
        width: 20px;
        height: 20px;
        border: none;
        border-radius: 5px;
        margin-right: 5px;
    }
    /* table combo */
    table, tr, th, td {
        color: #eae1e1;
    }
    td {
        text-align: right;
        vertical-align: middle;
        font-size: 12px;
    }
    .form-style-1 label.title {
        color: #bf104fd6;
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
    }
    .seat-selected {
        min-height: 105px;
        border: 2px solid whitesmoke;
        border-radius: 5px;
        padding: 5px;
    }
     .seat-selected p{
        font-size: 14px;
        font-weight: bold;
        text-align:center;
        color: orange;
        vertical-align: middle;
    }
    .seat-selected button{
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 5px;
        margin-right: 5px;
        margin-bottom: 5px;
        background-color: #85c325e6;
        color: #eae1e1;
    }
    .total-pay p {
        background-color: white;
        color: orangered;
        font-size: 20px;
        font-weight: bold;
        padding: 20px;   
        border-radius: 5px;
        cursor: context-menu;
    }
</style>