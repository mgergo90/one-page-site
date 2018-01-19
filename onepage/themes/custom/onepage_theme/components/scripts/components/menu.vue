<template>
    <div class="menu" v-bind:class="{scrolled: scrolled}">
        <div class="logo"><a href="#"></a></div>
        <div class="nav" v-bind:class="{collapsed: collapsed}">
            <ul class="nav-bar">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#" class="active">Projects</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </div>
        <button type="button" class="navbar-toggle" @click="collapseMenu">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
    </div>
</template>

<script>
    import debounce from 'lodash';

    export default {
        data: function() {
            return {
                collapsed: true,
                scrolled: false
            };
        },
        methods: {
            collapseMenu: function() {
                this.collapsed = !this.collapsed;
            },
            handleScroll: function(event) {
                var doc = document.documentElement;
                var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
                this.scrolled = top > 0;
            }
        },
        created () {
            document.addEventListener('scroll', this.handleScroll);
        },
        destroyed () {
            document.removeEventListener('scroll', this.handleScroll);
        }
    };
</script>
