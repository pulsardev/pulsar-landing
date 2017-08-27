<template>
  <section id="contact" class="section is-medium" style="background-color: rgba(0, 0, 0, 0.7)">
    <div class="container">
      <h1 class="title is-spaced has-text-centered has-text-grey-lighter">Contact Us</h1>

      <form action="https://formspree.io/pulsar.dev.team@gmail.com" method="POST">
        <div class="field">
          <label class="label" for="name">Name</label>
          <div class="control">
            <input v-validate="'required'" v-model="name" class="input" :class="{ 'is-danger': errors.has('name') }" id="name" name="name" type="text" placeholder="Name" required>
          </div>
          <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
        </div>

        <div class="field">
          <label class="label" for="email">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input v-validate="'required|email'" v-model="email" class="input" :class="{ 'is-danger': errors.has('_replyto') }" id="email" name="_replyto" type="text" placeholder="Email" required>
            <span class="icon is-small is-left has-text-grey"><i class="fa fa-envelope"></i></span>
            <span v-show="errors.has('_replyto')" class="icon is-small is-right has-text-grey"><i class="fa fa-warning"></i></span>
          </div>
          <span v-show="errors.has('_replyto')" class="help is-danger">{{ errors.first('_replyto') }}</span>
        </div>

        <div class="field">
          <label class="label" for="message">Message</label>
          <div class="control">
            <textarea v-validate="'required'" v-model="message" class="textarea" :class="{ 'is-danger': errors.has('message') }" id="message" name="message" placeholder="Message" required></textarea>
          </div>
          <span v-show="errors.has('message')" class="help is-danger">{{ errors.first('message') }}</span>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <input type="submit" class="button is-primary" value="Submit">
          </div>
          <div class="control">
            <button class="button is-light" @click="cancel">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
  export default {
    $validates: true,
    name: 'contact',
    data () {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      cancel () {
        this.name = ''
        this.email = ''
        this.message = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .input, .textarea {
    background-color: #363636;
    color: #dbdbdb;
  }

  .input:not(.is-danger), .textarea:not(.is-danger) {
    border: none;
  }

  .label {
    color: #b5b5b5;
  }
</style>
