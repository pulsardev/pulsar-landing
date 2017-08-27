<template>
  <section id="contact" class="section is-medium" style="background-color: rgba(0, 0, 0, 0.7)">
    <div class="container">
      <h1 class="title is-spaced has-text-centered has-text-grey-lighter">Contact Us</h1>

      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Name">
        </div>
      </div>

      <div class="field">
        <label class="label" for="email">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input v-validate="'required|email'" class="input" :class="{ 'is-danger': errors.has('email') }" name="email" type="text" placeholder="Email">
          <span class="icon is-small is-left has-text-grey"><i class="fa fa-envelope"></i></span>
          <span v-show="errors.has('email')" class="icon is-small is-right has-text-grey"><i class="fa fa-warning"></i></span>
        </div>
        <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Message"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-primary">Submit</button>
        </div>
        <div class="control">
          <button class="button is-light">Cancel</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    $validates: true,
    name: 'contact'
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
