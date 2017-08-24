<template>
  <section id="team" class="section is-medium">
    <div class="container">
      <h1 class="title">Team</h1>

      <div class="columns">
        <div class="column">
          <team-person :person="persons[0]"></team-person>
        </div>
        <div class="column">
          <team-person :person="persons[1]"></team-person>
        </div>
        <div class="column">
          <team-person :person="persons[2]"></team-person>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import TeamPerson from './TeamPerson.vue'

  export default {
    name: 'team',
    components: {
      TeamPerson
    },
    data () {
      return {
        persons: [
          {
            name: 'Mathieu Morainville'
          },
          {
            name: 'Sylver-John Imhoff'
          },
          {
            name: 'Guillaume Migeon'
          }
        ]
      }
    },
    mounted () {
      this.persons.sort(() => { return 0.5 - Math.random() })
    }
  }
</script>
