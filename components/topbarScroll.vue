<template lang="">
    <div class='topbar-container'>
        <b-navbar>
            <b-navbar-nav>
            <b-nav-item href="#">HOME</b-nav-item>
            <b-nav-item href="#">PRODUCT & SERVICE</b-nav-item>
            <b-nav-item href="#">ABOUT US</b-nav-item>
            <b-nav-item href="#">BLOG</b-nav-item>

            <b-nav-item-dropdown text="CONTACT" right>
                <b-dropdown-item href="#">CAREER</b-dropdown-item>
            </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'TopbarScroll'
}
</script>
<style>
.topbar-container{
    display: flex;
    justify-content: space-around;
    background-color: rgba(41,44,52,255);
    text-align: center;
    padding: 0 24px;
}
.navbar-light .navbar-nav .nav-link {
    color: rgba(228,196,100,255);
    font-size: 18px
}
.nav-item {
    padding: 0 8px;
}
.nav-item:hover {
    background-color: rgb(90,90,92) ;
}
.navbar-light .navbar-nav .nav-link:focus {
    color: rgba(248,211,101,255);
}
</style>