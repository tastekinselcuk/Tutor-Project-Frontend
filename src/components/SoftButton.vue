<template>
  <div  class="soft-btn">
    <div class="soft-btn__switch"></div>
  </div>
</template>


<script>
export default {
  methods: {
    toggle() {
      this.$el.classList.toggle('active');
      document.querySelector('.left').classList.toggle('on');
      document.querySelector('.right').classList.toggle('on');
      document.querySelector('.soft-btn').classList.toggle('on');
      document.querySelector('.soft-btn__switch').classList.toggle('on');
    }
  },
  mounted() {
    this.$el.addEventListener('click', this.toggle);
  },
  beforeUnmount() {
    this.$el.removeEventListener('click', this.toggle);
  }
};
</script>


<style>
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');


.left.on {
  background: #29272a;
  transition: all 0.5s ease;
}

.right.on {
    background-color: #774069;
    transition: all 0.5s ease;
}

.soft-btn {
  color: #828f9c;
  font-weight: bold;
  border: 0;
  width: 70px;
  height: 35px;
  border-radius: 50px;
  background-color:#E0E5EC;
  margin: 20px 0px;
  transition: all 0.3s;
  cursor: pointer;
  outline: 0;
  padding: 5px;
  display: flex;
  align-items: center;
}
.soft-btn.on {
  color: #828f9c;
  font-weight: bold;
  border: 0;
  width: 70px;
  height: 35px;
  border-radius: 50px;
  background-color:#29272a;
  margin: 20px 0px;
  transition: all 0.3s;
  cursor: pointer;
  outline: 0;
  padding: 5px;
}

.soft-btn__switch {
  position: absolute;
  height: 20px;
  width: 20px;
  left: 10px;
  background: black;
  border-radius: 50px;
  background-color:#6fdcbf;
  transition: left 0.3s;
}
.soft-btn__switch.on {
  position: absolute;
  height: 20px;
  width: 20px;
  right: 0;
  background: black;
  border-radius: 50px;
  background-color:#774069;
  transition: left 0.3s;
}

.soft-btn.active .soft-btn__switch{
   left: 40px;
}
 </style>
