<template>
    <div class="wrap-user-reviews">    
            <ul class="breadcumb">
                <li class="active"><a href="#">Home</a></li>
                <li> <span class="ion-ios-arrow-right"></span>User</li>
                <li> <span class="ion-ios-arrow-right"></span>Bills</li>
            </ul>
         	<div class="topbar-filter">
					<p>Found <span>{{ currentUserBills.length }} bills</span> in total</p>
					<label>Sort by:</label>
					<select>
						<option value="range">-- Choose option --</option>
						<option value="saab">-- Choose option 2--</option>
					</select>
				</div>
                <div class="wrap-user-bills">
                    <table class="bill">
                        <tr>
                            <th>STT</th>
                            <th colspan="2">Thời Gian Đặt</th>
                            <th>Suất Chiếu</th>
                            <th>Tên Phim</th>
                            <th>Số Lượng</th>
                            <th>Phí Dịch Vụ</th>
                        </tr>
                        <tr v-if="currentUserBills.length >0" v-for="(bill, index) in currentUserBills" :key="index">
                            <td>{{ index + 1 }}</td>  
                            <td colspan="2">{{ bill.booked_at }}</td>
                            <td>{{ bill.show_time }}</td>
                            <td>{{ bill.movie_name }}</td>
                            <td>{{ bill.quantum }} * ticket</td>
                            <td>{{ bill.totalPay | formatCommas}} VNĐ</td>
                        </tr>
                        <tr v-if="currentUserBills.length==0">
                            <td>...</td>
                            <td colspan="2">...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                            <td>...</td>
                        </tr>
                    </table>
                </div>
				<div class="topbar-filter">
					<label>Bill per page:</label>
					<select>
						<option value="range">20 Bills</option>
						<option value="saab">10 Bills</option>
					</select>
					<div class="pagination2">
						<span>Page 1 of 1:</span>
						<a class="active" href="userrate.html#">1</a>
						<a href="userrate.html#"><i class="ion-arrow-right-b"></i></a>
					</div>
				</div>
    </div>
    
</template>

<script>
import firebase from 'firebase'

    export default {
        data() {
            return {
                // currentUser: this.$store.getters.user,
            }
        },
        beforeRouteEnter (to, from, next) {
            next(vm => {
                vm.getBillByUserID();
            });
	    },
        computed: {
            currentUser() {
                return this.$store.getters.user;
            },
            currentUserBills() {
                return this.$store.getters.getCurrentUserBill.sort((a, b) => b.booked_at - a.booked_at);
            }

        },
        watch: {
            currentUser (value) {
                console.log("watch login")
                if(value !== null && value !== undefined) {
                   this.currentUser = value;
                }
            }
        },
        methods: {
            getBillByUserID() {
                this.$store.dispatch("getBillByUserID", this.currentUser.uid)
            }
        },
        filters: {
                formatCommas(value) {
                     return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            },
    }
</script>

<style scoped>
    .noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}
li, span {
    display: inline-block;
    margin-right: 5px;
    color: #abb7c4
}
li.active a {
    color: #4280bf;
}

.wrap-user-bills {
    margin-bottom: 50px;
}

table.bill , tr, th , td {
    color: #6f980ecf;
    vertical-align: middle;
    text-align: center;
    border: 1px solid #405266;
}
th {
    text-align: center;
}
td {
    font-size: 14px;
}
</style>