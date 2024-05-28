<template>
  <Navbar class="navbar" />
  <NavbarStudent class="navbarStudent" />
  <div class="container">
    <div class="left-side">
      <h1>Mükemmel öğretmeni bul.</h1>
      <p>Kişiselleştirilmiş bir öğrenme deneyimi için bize hangi dili öğrenmek istediğini söyle</p>
      <form @submit.prevent="findTeacher">
        <label for="subject">Ne öğrenmek istiyorsun?</label>
        <select id="subject" v-model="selectedSubject">
          <option value="İngilizce">İngilizce</option>
          <option value="Matematik">Matematik</option>
          <option value="Fizik">Fizik</option>
          <option value="Felsefe">Felsefe</option>
          <option value="Geometri">Geometri</option>
          <option value="Kimya">Kimya</option>
          <option value="Bilgisayar">Bilgisayar</option>
          <option value="Edebiyat">Edebiyat</option>
          <option value="Tarih">Tarih</option>
          <option value="Biyoloji">Biyoloji</option>
        </select>

        <button type="submit" class="start-button">Başla</button>
      </form>
      <a href="#" class="teacher-link">15.844 öğretmen arasından kendim seçeceğim</a>
    </div>
    <div class="right-side">
      <img src="../assets/images/casual-life-3d-lamp-books-and-objects-for-studying.png" alt="Öğretmen" class="teacher-image">
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import NavbarStudent from "@/components/NavBarStudent.vue";

export default {
  data() {
    return {
      selectedSubject: 'İngilizce'
    };
  },
  components: {
    Navbar,
    NavbarStudent
  },
  methods: {
    findTeacher() {
      // Öğretmen bulma işlemi burada gerçekleştirilecek
      console.log(`Selected Subject: ${this.selectedSubject}`);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  height: 60vh;
}

.left-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 50px;
}

.right-side {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 48px;
  margin-bottom: 20px;
}

p {
  font-size: 18px;
  margin-bottom: 40px;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

label {
  font-size: 16px;
  margin-bottom: 10px;
}

select {
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-color: light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  border-radius: 5px;
}

.start-button {
  font-size: 16px;
  padding: 10px;
  background-color: #ff4081;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.start-button:hover {
  background-color: #e03070;
}

.teacher-link {
  font-size: 14px;
  color: #000;
  margin-top: 20px;
}

.teacher-link:hover {
  text-decoration: underline;
}

.teacher-image {
  max-width: 100%;
  height: auto;
}
</style>
