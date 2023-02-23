Vue.createApp({
    data(){
      return {
        modal: false,
        tab: 'algemeen',
        id:'0001',
        companyname: '',
        crediteur:false,
        debiteur:false,
        scheepseigenaar:false,
        controleur:false,
        agent:false,
        emailadressen: [],
        telefoonnummers: [],
        adressen: [],
        digitaal:false,
        
      }
    },
    methods: {
      openModal: function () {
        this.modal = !this.modal;
      },
      closeModal: function(){
        this.modal = false;
      },
      selectTab: function (t) {
        if (t === 'facturatie') {
            if (this.debiteur===true||this.crediteur===true) {
                this.tab = t;
            }
        } else {
            this.tab = t;
        }
      },
      addMail: function () {
        this.emailadressen.push({id:this.emailadressen.length,mail:'', label:''});
      },
      removeMail: function (i) {
        const index = this.emailadressen.findIndex(item => item.id === i);
        if (index !== -1) {
            this.emailadressen.splice(index, 1);
        }
      },
      addTel: function () {
        this.telefoonnummers.push({id:this.telefoonnummers.length,mail:'', label:''});
      },
      removeTel: function (i) {
        const index = this.telefoonnummers.findIndex(item => item.id === i);
        if (index !== -1) {
            this.telefoonnummers.splice(index, 1);
        }
      },
      addAddress: function () {
        this.adressen.push({id:this.adressen.length,mail:'', label:''});
      },
      removeAddress: function (i) {
        const index = this.adressen.findIndex(item => item.id === i);
        if (index !== -1) {
            this.adressen.splice(index, 1);
        }
      }

    }
  }).mount('#app')