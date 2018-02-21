<template>
  <div class="card">
    <div class="header">
      <h4 class="title">{{$language('profile','profile_title')}}</h4>
    </div>
    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-5">
            <fg-input type="text"
                      :label="$language('profile','profile_company')"
                      :disabled="true"
                      :placeholder="$language('profile','profile_company')"
                      v-model="user.company">
            </fg-input>
          </div>
          <div class="col-md-3">

            <fg-input type="text"
                      :label="$language('profile','profile_username')"
                      :placeholder="$language('profile','profile_username')"
                      v-model="user.username">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="email"
                      :label="$language('profile','profile_email')"
                      :placeholder="$language('profile','profile_email')"
                      v-model="user.email">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      :label="$language('profile','profile_firstname')"
                      :placeholder="$language('profile','profile_firstname')"
                      v-model="user.firstName">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      :label="$language('profile','profile_lastname')"
                      :placeholder="$language('profile','profile_lastname')"
                      v-model="user.lastName">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input type="text"
                      :label="$language('profile','profile_address')"
                      :placeholder="$language('profile','profile_address')"
                      v-model="user.address">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      :label="$language('profile','profile_city')"
                      :placeholder="$language('profile','profile_city')"
                      v-model="user.city">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="text"
                      :label="$language('profile','profile_country')"
                      :placeholder="$language('profile','profile_country')"
                      v-model="user.country">
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input type="number"
                      :label="$language('profile','profile_postcode')"
                      :placeholder="$language('profile','profile_postcode')"
                      v-model="user.postalCode">
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>{{$language('profile','profile_aboutme')}}</label>
              <textarea rows="5" class="form-control border-input"
                        :placeholder="$language('profile','profile_aboutme')"
                        v-model="user.aboutMe">

              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
            {{$language('profile','profile_update')}}
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
  import Language from 'src/localize.js'
  export default {
    data () {
      return {
        user: Language('profile', 'profile_userinfo')
      }
    },
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
