<template>
  <section id="team" class="hero is-medium" style="background-color: whitesmoke">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-spaced">The Team</h1>

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
            id: 'mmorainville',
            name: 'Mathieu Morainville',
            avatar: 'https://avatars1.githubusercontent.com/u/1155743?v=4&s=460',
            image: '/images/team/superman.png',
            description: '<em>Vueman</em>',
            skills: ['Vue.js', 'JavaScript', 'Design', 'Node.js'],
            link: 'https://github.com/mmorainville'
          },
          {
            id: 'sylver-john',
            name: 'Sylver-John Imhoff',
            avatar: 'https://avatars1.githubusercontent.com/u/6161547?v=4&s=460',
            image: '/images/team/batman.jpg',
            description: '<em>Golang lover</em>',
            skills: ['Golang', 'Vue.js', 'JavaScript'],
            link: 'https://github.com/sylver-john'
          },
          {
            id: 'Outpox',
            name: 'Guillaume Migeon',
            avatar: 'https://avatars2.githubusercontent.com/u/3439246?v=4&s=460',
            image: '/images/team/flash.jpg',
            description: '<em>Extension maker</em>',
            skills: ['Vue.js', 'JavaScript', 'Node.js'],
            link: ''
          }
        ]
      }
    },
    mounted () {
      this.persons.sort(() => { return 0.5 - Math.random() })
    }
  }
</script>
