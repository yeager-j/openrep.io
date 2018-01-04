<template>
    <div id="app">
        <app-header></app-header>

        <div class="container">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase'
    import AppHeader from './components/AppHeader';
    import { db } from './firebase';


    export default {
        components: {AppHeader},
        name: 'app',
        created() {
            firebase.auth().onAuthStateChanged(async fireUser => {
                if (fireUser) {
                    let metadata = await db.ref('users/' + fireUser.uid).once('value');

                    this.$store.state.user = {
                        metadata: metadata.val(),
                        fireUser
                    };
                } else {
                    this.$store.state.user = null;
                }
            });
        }
    }
</script>

<style lang="scss">
    @import "assets/scss/openrep";

    #app > .container {
        margin-top: 100px;
    }
</style>
