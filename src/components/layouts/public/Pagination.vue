<template>
    <div class="wrap-pagination">
        <div class="topbar-filter">
            <label>Reviews per page:</label>
            <select @change="onChange">
                <option value="3" selected>3 Reviews</option>
                <option value="5">5 Reviews</option>
            </select>
            <div class="pagination2">
                <span class="link-pagination" v-if="showPreviousLink()" @click="updatePage(currentPage - 1)"><i  class="ion-arrow-left-b"></i></span>
                <span> {{ currentPage + 1 }} of {{ totalPage() }}:</span>
                <span class="link-pagination" v-if="showNextLink()" @click="updatePage(currentPage + 1)"><i  class="ion-arrow-right-b"></i></span>
                
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'pagination',
        props: ['data', 'currentPage', 'pageSize'],
        methods: {
            updatePage(pageNumber) {
                this.$emit('page:update', pageNumber);
            },
            onChange(event) {
                console.log(event.target.value);
                this.$emit('pageSize:update', event.target.value)
                this.$emit('page:update', 0);
            },
            totalPage() {
                return Math.ceil(this.data.length / this.pageSize);
            },
            showPreviousLink() {
                return this.currentPage == 0 ? false : true;
            },
            showNextLink() {
                return this.currentPage == (this.totalPage() - 1) ? false : true;
            }
        }
    }
</script>

<style>
.pagination2 span {
    cursor: context-menu;
}
.topbar-filter .pagination2 a.link-pagination {
    cursor: context-menu;
}
.pagination2 i {
    font-size: 18px;
}
</style>

