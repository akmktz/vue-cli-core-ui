<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <router-link :to="{ name: user ? 'home' : 'welcome' }" class="navbar-brand">
                {{ appName }}
            </router-link>

            <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggler" aria-controls="navbarToggler"
                    aria-expanded="false" aria-label="toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'testex' }" class="nav-link">TestEx</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{ name: 'testex2' }" class="nav-link">TestEx2</router-link>
                    </li>
                </ul>
                <ul></ul>
                <ul v-if="$auth.ready()" class="navbar-nav ml-auto">
                    <!--<locale-dropdown/>-->
                    <!-- Authenticated -->
                    <b-dropdown v-if="$auth.check()" variant="1" size="md" text="Large" class="m-2">
                        <template slot="button-content">
                            <img :src="user.photo_url"
                                 class="rounded-circle profile-photo mr-1">
                            {{ user.name }}
                        </template>
                        <router-link :to="{ name: 'profile' }" class="dropdown-item pl-3">
                            <v-icon name="cog"/>
                            settings
                        </router-link>
                        <b-dropdown-divider></b-dropdown-divider>
                        <a @click.prevent="logout" class="dropdown-item pl-3" href="#">
                            <v-icon name="sign-out-alt"/>
                            logout
                        </a>
                    </b-dropdown>
                    <!-- Guest -->
                    <template v-else>
                        <li class="nav-item">
                            <router-link :to="{ name: 'login' }" class="nav-link"
                                         active-class="active">
                                Login
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a v-if="$auth.check()" @click="logout"
                               class="nav-link router-link-exact-active active">Logout now</a>
                            <a v-else @click="login"
                               class="nav-link router-link-exact-active active">Login now</a>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'register' }" class="nav-link"
                                         active-class="active">
                                Register
                            </router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
</template>


<script>
export default {
  data: () => ({
    // appName: process.env.appName,
    appName: 'Vue-Cli-Core-UI',
  }),

  computed: {
    user() {
      return this.$auth.user();
    },
  },

  methods: {
    login() {
      this.$auth.login({
        params: {
          email: 'closzxzx@gmail.com',
          password: '123456',
        },
      });
    },

    logout() {
      this.$auth.logout();
    },

  },
};
</script>

<style>
    .navbar-dark .navbar-nav .nav-link.router-link-active {
        color: white;
    }
    .profile-photo {
        max-width: 25px;
        max-height: 25px;
    }
</style>
