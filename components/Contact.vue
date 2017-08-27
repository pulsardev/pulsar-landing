<template>
  <section id="contact" class="section is-medium" style="background-color: rgba(0, 0, 0, 0.7)">
    <div class="container">
      <h1 class="title is-spaced has-text-centered has-text-grey-lighter">Contact Us</h1>

      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input is-danger" type="text" placeholder="Email input">
          <span class="icon is-small is-left has-text-grey"><i class="fa fa-envelope"></i></span>
          <span class="icon is-small is-right has-text-grey"><i class="fa fa-warning"></i></span>
        </div>
        <p class="help is-danger">This email is invalid</p>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea" placeholder="Textarea"></textarea>
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
