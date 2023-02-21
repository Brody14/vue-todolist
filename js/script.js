console.log('VRSTY')

const { createApp } = Vue

  createApp({
    data() {
      return {
        tasks: [
          {
            text: 'Togliere la muffa in bagno',
            done: true,
          },
          {
            text: 'Lavare i denti a chiwawa',
            done: false,
          },
          {
            text: 'Finire il bilancio 2022',
            done: false,
          },
        ]
      }
    }
  }).mount('#app')
