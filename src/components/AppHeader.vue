<template>
    <nav class="navbar navbar-info navbar-fixed-top" role="navigation">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">OpenRep.io</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Home</a></li>
                    <li><a href="#">How It Works</a></li>
                </ul>

                <ul class="nav navbar-nav navbar-right" v-if="user">
                    <li><a href="#" class="btn btn-primary">Chat!</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">{{ user.metadata.displayName }} <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li class="divider"></li>
                            <li><a href="#" @click="logout">Logout</a></li>
                        </ul>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right" v-else>
                    <li class="login"><a @click="login">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import firebase from 'firebase'

    export default {
        name: "app-header",
        computed: {
            user() {
                return this.$store.state.user;
            }
        },
        methods: {
            login() {
                let provider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithPopup(provider).then(function(result) {
                    this.$store.state.token = result.credential.accessToken;
                    this.$store.state.user = result.user;
                }).catch(function(error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    let email = error.email;
                    let credential = error.credential;
                    // ...
                });
            },
            logout() {
                firebase.auth().signOut().then(function() {
                    // Sign-out successful.
                }).catch(function(error) {
                    // An error happened.
                });
            }
        },
    }
</script>

<style scoped>
    .login {
        cursor: pointer;
    }
</style>
