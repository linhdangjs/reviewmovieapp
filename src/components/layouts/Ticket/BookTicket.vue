<template>
<div class="wrap-book-ticket">
    <appHeader />
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
                            <app-seat :disabled="isDisabled(seat.status)" @click.native="targetSeat(seat.seat_id, seat.seat_name, seat.serial)" v-for="seat in currentTicketRoom.listseat.RowA"  :key="seat.seat_id" :class="{ reserved: !seat.status }">{{ seat.seat_name }}</app-seat>
                        </div>
                        <div class="row-b seat-area">
                            <app-seat :disabled="isDisabled(seat.status)" @click.native="targetSeat(seat.seat_id, seat.seat_name, seat.serial)" v-for="seat in currentTicketRoom.listseat.RowB"  :key="seat.seat_id" :class="{ reserved: !seat.status }">{{ seat.seat_name }}</app-seat>
                        </div>
                        <div class="row-c seat-area">
                            <app-seat :disabled="isDisabled(seat.status)" @click.native="targetSeat(seat.seat_id, seat.seat_name, seat.serial)" v-for="seat in currentTicketRoom.listseat.RowC"  :key="seat.seat_id" :class="{ reserved: !seat.status }">{{ seat.seat_name }}</app-seat>
                        </div>
                        <div class="row-d seat-area">
                            <app-seat :disabled="isDisabled(seat.status)" @click.native="targetSeat(seat.seat_id, seat.seat_name, seat.serial)" v-for="seat in currentTicketRoom.listseat.RowD"  :key="seat.seat_id" :class="{ reserved: !seat.status }">{{ seat.seat_name }}</app-seat>
                        </div>
                    </div>
                   
                        <div class="note">
                            <ul>
                                <li>
                                    <button class="btn-free" style="background-color:rgba(72, 72, 78, 0.5)"></button>
                                    <span>Chưa Đặt</span>
                                </li>
                                <li>
                                    <button class="btn-reserved" style="background-color:#b01010e6"></button>
                                    <span>Đã Đặt</span>
                                </li>
                                <li>
                                    <button class="btn-selected" style="background-color: #85c325e6"></button>
                                    <span>Đang Chọn</span>
                                </li>
                            </ul>
                        </div>
                        <div class="reset">
                            <button class="btn-reset" @click="resetSelected">CHỌN LẠI</button>
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
                                            <router-link tag="a" class="title-movie" :to="{name: 'MovieDetail', params: {id: this.$route.query.movie_id}}" style="width:100%;font-weight:bold; cursor:pointer">Movie: {{ currentMovie[0].name }}</router-link>
                                            <p>Rạp {{ currentTicketRoom.cine_name }}</p>
                                            <p>Suất : {{ currentTicketRoom.show_time }}'</p>
                                            <p>Giá Vé: 75.000 VNĐ/vé</p>
                                        </div>
                                    </div>
                                    <div class="col-md-12 form-it">
                                        <label class="title">Combo & Khuyến Mãi</label>
                                       <table>
                                           <tr>
                                                <th>Combo</th>
                                                <th>Đơn Giá</th>
                                                <th>Số lượng</th>
                                                <th>Tổng</th>
                                           </tr>
                                          <tr>
                                              <td>
                                                  <img src="/static/images/uploads/combo-1.jpg" alt="">
                                                  <p>iCombo 1</p>            
                                              </td>                      
                                              <td><span>60.000 VNĐ</span></td>
                                              <td><input type="number" min="0" max="20" v-model="combo_1" name="combo-1" id="combo-1"></td>   
                                              <td><span>{{ combo_1 * 60000 | formatCommas }} VNĐ</span></td>
                                          </tr>
                                         <tr>
                                              <td>
                                                  <img src="/static/images/uploads/combo-2.jpg" alt="">
                                                   <p>iCombo 2</p>
                                            </td>
                                                <td><span>80.000 VNĐ</span></td>
                                              <td><input type="number" min="0" max="20" v-model="combo_2" name="combo-2" id="combo-2"></td>   
                                              <td><span>{{ combo_2 * 80000 | formatCommas }} VNĐ</span></td>
                                          </tr>
                                          <tr>
                                              <td>* Ticket 2D</td>
                                              <td>75.000 VND</td>
                                              <td><input type="text" readonly v-model="seatSelected.length" name="count-ticket" id="count-ticket"></td>
                                              <td>{{  this.seatSelected.length * 75000 | formatCommas }} VNĐ</td>
                                          </tr>
                                       </table>
                                    </div>
                                    <div class="col-md-12 form-it">
                                        <label class="title">Vị Trí Đã Chọn: {{ seatSelected.length }}</label>
                                        <div class="seat-selected">
                                            <p v-if="seatSelected.length==0">Chưa chọn ghế!</p>
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
import Header from '@/components/layouts/public/Header.vue'
import Seat from '@/components/layouts/Ticket/Seat.vue'
import { eventBus } from '@/main.js'
    export default {
            data() {
                return {
                    seatSelected : [],
                    seatNameSelected : [],
                    seatSelectedRowA: [],
                    seatSelectedRowB: [],
                    seatSelectedRowC: [],
                    seatSelectedRowD: [],
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
                        return this.seatSelected.length * 75000 + this.combo_1 * 60000 + this.combo_2 * 80000;
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
                formatPay(value) {
                     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                },
                isDisabled(option) {
                    if(option) return false
                    else return true
                },
                targetSeat(seat_id, seat_name, serial) {
                    if(seat_name.indexOf('A') !== -1) {
                        var indexA = this.seatSelectedRowA.indexOf(serial);
                        if(indexA > -1) {
                            this.seatSelectedRowA.splice(indexA, 1);
                        } else {
                            this.seatSelectedRowA.push(serial);
                        }
                    }
                    if(seat_name.indexOf('B') !== -1) {
                        var indexB = this.seatSelectedRowB.indexOf(serial);
                        if(indexB > -1) {
                            this.seatSelectedRowB.splice(indexB, 1);
                        } else {
                            this.seatSelectedRowB.push(serial);
                        }
                    }
                    if(seat_name.indexOf('C') !== -1) {
                        var indexC = this.seatSelectedRowC.indexOf(serial);
                        if(indexC > -1) {
                            this.seatSelectedRowC.splice(indexC, 1);
                        } else {
                            this.seatSelectedRowC.push(serial);
                        }
                    }
                     if(seat_name.indexOf('D') !== -1) {
                        var indexD = this.seatSelectedRowD.indexOf(serial);
                        if(indexD > -1) {
                            this.seatSelectedRowD.splice(indexD, 1);
                        } else {
                            this.seatSelectedRowD.push(serial);
                        }
                    }
                    var index = this.seatSelected.indexOf(seat_id);
                    if(index > -1) {
                        this.seatSelected.splice(index, 1);
                    } 
                    else {
                        this.seatSelected.push(seat_id);
                    }
                    var indexName = this.seatNameSelected.indexOf(seat_name);
                    if(indexName > -1) {
                        this.seatNameSelected.splice(indexName, 1);
                    }
                    else {
                        this.seatNameSelected.push(seat_name);
                    }
                    
                },
                resetSelected() {
                    //console.log(this.currentTicketRoom.listseat.RowA)
                    this.seatSelected = [];
                    this.seatNameSelected = [];
                    this.seatSelectedRowA = [],
                    this.seatSelectedRowB = [],
                    this.seatSelectedRowC = [],
                    this.seatSelectedRowD = [],
                    eventBus.$emit("resetSelected", false);
                },
                submitBookTicket() {
                    if(this.seatSelected.length <= 0) {
                        this.$swal({
                                title: 'Bạn Chưa Chọn Ghế!',
                                text: 'Vui lòng kiểm tra lại!',
                                type: 'warning',
                                timer: 5000
                            })
                    } else {
                        var data = {
                            rowA: this.seatSelectedRowA,
                            rowB: this.seatSelectedRowB,
                            rowC: this.seatSelectedRowC,
                            rowD: this.seatSelectedRowD,                    
                            schedule_id: this.$route.query.schedule_id
                        }
                        var dataBill = {
                            user_uid: this.$store.getters.user.uid,
                            show_time: this.currentTicketRoom.show_time,
                            movie_name: this.currentMovie[0].name,
                            quantum: this.seatSelected.length,
                            totalPay: this.totalPay
                        }
                    this.$swal({
                        title: 'Bạn Muốn Thanh Toán?',
                        text: "Tổng Chi Phí Thanh Toán: " + this.formatPay(this.totalPay) + ' VNĐ',
                        type: 'question',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        cancelButtonText: 'Để Sau',
                        confirmButtonText: 'Vâng, Tôi Muốn Thanh Toán!'
                        }).then((result) => {
                        if (result.value) {
                            console.log(result.value)
                            this.$store.dispatch("submitBookTicket", data)
                            this.$store.dispatch("addBillByUserID", dataBill)
                            this.$swal({
                                title: 'Đặt Vé Thành Công!',
                                text: 'Chúc Mừng Bạn Đã Hoàn Tất Quá Trình Đặt Vé',
                                type: 'success',
                                timer: 1000
                            })
                            setTimeout(() => {
                                this.$router.go('/movie/'+ this.$route.query.movie_id);
                            }, 1000)
                        }
                        })
                    }
                   
                }
            },
            filters: {
                formatCommas(value) {
                     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            },
            components: {
                appSeat : Seat,
                appHeader: Header    
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
    .reset {
        text-align: center;
    }
    .reset button {
        background: #ff8300d6;
        border: none;
        border-radius: 5px;
        padding: 5px 10px;
        color: #eae1e1;
        cursor: pointer;
    }
    /* table combo */
    table, tr, th, td {
        color: #eae1e1;
    }
    td {
        text-align: right;
        vertical-align: middle;
        font-size: 11px;
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
    a.title-movie {
        color: #6565d2;
    }
    a.title-movie:hover {
        color: #2b0d8c;
    }
    /* custom CSS SweetAlert */
</style>