<template lang="">
    <div class='header-container'>
        <nuxt-link to="/">
            <img class = "header-logo" alt="financial freedom logo" src="@/assets/logo/horizontal-logo.png">
        </nuxt-link>
        <b-navbar>
            <b-navbar-nav>
                <nuxt-link to="/homepage">
                    <b-nav-item href="/homepage">HOME</b-nav-item>
                </nuxt-link>
                    <nuxt-link to="/productandservice">
                <b-nav-item href="/productandservice">PRODUCT & SERVICE</b-nav-item>
                </nuxt-link>
                <nuxt-link to="/aboutus">
                    <b-nav-item href="/aboutus">ABOUT US</b-nav-item>
                </nuxt-link>
                <nuxt-link to="/blog">
                    <b-nav-item href="/blog">BLOG</b-nav-item>
                </nuxt-link>
                <b-nav-item-dropdown text="CONTACT" right>
                    <nuxt-link to="/career">
                        <b-dropdown-item href="/career">CAREER</b-dropdown-item>
                    </nuxt-link>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style>
    .header-container {
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
    
    .header-logo{
        height: 200px;
    }
</style>