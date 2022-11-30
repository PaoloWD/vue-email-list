const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      inc: 0,
      emailList: [],
      emailListTemp: [],
    };
  },

  methods: {
    fetchData() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          this.inc++;
          this.emailListTemp.push(resp.data.response);
          if (this.inc % 10 === 0) {
            this.emailList = this.emailListTemp;
          }
        });
    },

    getList() {
      for (let i = 0; i < 10; i++) {
        this.fetchData();
      }
    },
  },
}).mount("#app");
