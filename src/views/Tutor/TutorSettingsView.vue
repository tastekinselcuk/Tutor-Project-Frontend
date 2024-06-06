<template>
    <Navbar class="navbar" />
    <NavbarTutor class="navbarTutor" />
    <div class="app-wrapper">
        <div class="app-content pt-3 p-md-3 p-lg-4">
            <div class="container-xl">
                <h1 class="app-page-title">Ayarlar</h1>
                <hr class="mb-4">
                <div class="row g-4 settings-section">
                    <div class="col-12 col-md-4">
                        <h3 class="section-title">Genel</h3>
                        <div class="section-intro">
                            Genel Kullanıcı bilgilerinizi burada görüntüleyebilir ve değiştirebilirsiniz.
                            <router-link to="/contact">Daha fazla bilgi al</router-link>
                        </div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="app-card app-card-settings shadow-sm p-4">
                            <div class="app-card-body">
                                <form @submit.prevent="updateSettings">
                                    <!-- Profil fotoğrafı -->
                                    <div class="mb-3">
                                        <label for="profile-picture" class="form-label">Profil Fotoğrafı</label>
                                        <input type="file" class="form-control" id="profile-picture" accept="image/*" @change="previewProfilePicture" />
                                        <!-- Profil fotoğrafı önizleme -->
                                        <div class="mt-3" v-if="profilePictureUrl">
                                            <img :src="profilePictureUrl" alt="Profil Fotoğrafı Önizlemesi" class="img-fluid" style="max-width: 150px;" />
                                        </div>
                                    </div>
                                    <!-- Ad alanı -->
                                    <div class="mb-3">
                                        <label for="first-name" class="form-label">Ad</label>
                                        <input type="text" v-model="userData.firstname" class="form-control" id="first-name" required />
                                    </div>
                                    <!-- Soyad alanı -->
                                    <div class="mb-3">
                                        <label for="last-name" class="form-label">Soyad</label>
                                        <input type="text" v-model="userData.lastname" class="form-control" id="last-name" required />
                                    </div>
                                    <!-- Telefon numarası alanı -->
                                    <div class="mb-3">
                                        <label for="phone-number" class="form-label">Telefon Numarası</label>
                                        <input type="text" v-model="userData.phoneNumber" class="form-control" id="phone-number" />
                                    </div>
                                    <!-- E-posta alanı -->
                                    <div class="mb-3">
                                        <label for="email" class="form-label">Email Adresi</label>
                                        <input type="email" v-model="userData.email" class="form-control" id="email" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="birth-date" class="form-label">Doğum Günü</label>
                                        <input type="date" v-model="userData.birthDate" class="form-control" id="birth-date" />
                                    </div>
                                    <!-- Cinsiyet alanı -->
                                    <div class="form-group mb-3">
                                        <label for="gender" class="form-label">Cinsiyet</label>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="female" v-model="userData.gender" value="FEMALE" required />
                                            <label class="form-check-label" for="female">Kadın</label>
                                        </div>
                                        <div class="form-check">
                                            <input type="radio" class="form-check-input" id="male" v-model="userData.gender" value="MALE" required />
                                            <label class="form-check-label" for="male">Erkek</label>
                                        </div>
                                    </div>
                                    <!-- Değişiklikleri Kaydet butonu -->
                                    <div class="mt-3">
                                        <button type="submit" class="btn app-btn btn-bordered-hover">Değişiklikleri Kaydet</button>
                                    </div>
                                </form>
                            </div>
                            <!--//app-card-body-->
                        </div>
                        <!--//app-card-->
                    </div>
                </div>
                <!--//row-->
                <hr class="my-4">
                <div class="row g-4 settings-section">
                    <div class="col-12 col-md-4">
                        <h3 class="section-title">Veri Gizliliği</h3>
                        <div class="section-intro">Kullanıcı verileri ve güvenliği ile ilgili bilgilerinizi burada görüntüleyebilir ve değiştirebilirsiniz. </div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="app-card app-card-settings shadow-sm p-4">
                            <div class="app-card-body">
                                <form class="settings-form">
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-1" checked>
                                        <label class="form-check-label" for="settings-checkbox-1">
                                            Kullanıcı uygulama etkinlik geçmişini sakla
                                        </label>
                                    </div>
                                    <!--//form-check-->
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-2" checked>
                                        <label class="form-check-label" for="settings-checkbox-2">
                                            Kullanıcı uygulama tercihlerini sakla
                                        </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-3">
                                        <label class="form-check-label" for="settings-checkbox-3">
                                            Kullanıcı uygulama arama geçmişini sakla
                                        </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-4">
                                        <label class="form-check-label" for="settings-checkbox-4">
                                            Lorem ipsum dolor sit amet
                                        </label>
                                    </div>
                                    <div class="form-check mb-3">
                                        <input class="form-check-input" type="checkbox" value="" id="settings-checkbox-5">
                                        <label class="form-check-label" for="settings-checkbox-5">
                                            Aenean quis pharetra metus
                                        </label>
                                    </div>
                                    <div class="mt-3">
                                        <button type="submit" class="btn app-btn btn-bordered-hover">Değişiklikleri Kaydet</button>
                                    </div>
                                </form>
                            </div>
                            <!--//app-card-body-->
                        </div>
                        <!--//app-card-->
                    </div>
                </div>
                <!--//row-->
                <hr class="my-4">
                <div class="row g-4 settings-section">
                    <div class="col-12 col-md-4">
                        <h3 class="section-title">Bildirimler</h3>
                        <div class="section-intro">Bildirim ayarlarını buradan yapabilirsiniz. Bildirim seçeneklerinizi belirleyin.</div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="app-card app-card-settings shadow-sm p-4">
                            <div class="app-card-body">
                                <form class="settings-form">
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="settings-switch-1" checked>
                                        <label class="form-check-label" for="settings-switch-1">Proje bildirimleri</label>
                                    </div>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="settings-switch-2">
                                        <label class="form-check-label" for="settings-switch-2">Web tarayıcı bildirimleri</label>
                                    </div>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="settings-switch-3" checked>
                                        <label class="form-check-label" for="settings-switch-3">Mobil bildirimler</label>
                                    </div>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="settings-switch-4">
                                        <label class="form-check-label" for="settings-switch-4">E-posta bildirimleri</label>
                                    </div>
                                    <div class="form-check form-switch mb-3">
                                        <input class="form-check-input" type="checkbox" id="settings-switch-5">
                                        <label class="form-check-label" for="settings-switch-5">SMS bildirimleri</label>
                                    </div>
                                    <div class="mt-3">
                                        <button type="submit" class="btn app-btn btn-bordered-hover">Değişiklikleri Kaydet</button>
                                    </div>
                                </form>
                            </div>
                            <!--//app-card-body-->
                        </div>
                        <!--//app-card-->
                    </div>
                </div>
                <!--//row-->
                <hr class="my-4">
            </div>
            <!--//container-fluid-->
        </div>
        <!--//app-content-->
    </div>
    <!--//app-wrapper-->
</template>

<script>
import UserService from '@/services/UserService';
import Navbar from "@/components/NavBar.vue";
import NavbarTutor from "@/components/NavBarTutor.vue";

export default {
  components: {
    Navbar,
    NavbarTutor,
  },
  data() {
    return {
      userData: {
        firstname: '',
        lastname: '',
        phoneNumber: '',
        gender: '',
        birthDate: '',
        email: '' // Yeni eklendi
      },
      profilePictureUrl: '',
      profilePictureFile: null
    };
  },
  methods: {
    loadUserData() {
      const currentUser = this.$store.getters._getCurrentUser;
      this.userData.firstname = currentUser.firstname;
      this.userData.lastname = currentUser.lastname;
      this.userData.email = currentUser.email;
      this.userData.phoneNumber = currentUser.phoneNumber;
      this.userData.gender = currentUser.gender;
      this.userData.birthDate = currentUser.birthDate; // Yeni eklendi
      this.profilePictureUrl = currentUser.profilePictureUrl;
    },
    previewProfilePicture(event) {
      const file = event.target.files[0];
      if (file) {
        this.profilePictureFile = file;
        this.profilePictureUrl = URL.createObjectURL(file);
      }
    },
    updateSettings() {
      const email = this.userData.email;
      const userDto = {
        firstname: this.userData.firstname,
        lastname: this.userData.lastname,
        phoneNumber: this.userData.phoneNumber,
        gender: this.userData.gender,
        birthDate: this.userData.birthDate
      };

      UserService.updateSettings(email, userDto, this.profilePictureFile)
        .then(() => {
          // Başarı mesajı veya yönlendirme
        })
        .catch(error => {
          console.error("Ayarlar güncellenirken bir hata oluştu:", error);
        });
    },
  },
  created() {
    this.loadUserData();
  }
};
</script>

<style scoped>
/*Button*/
.btn-bordered-hover {
    border: 2px solid #ccc;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-bordered-hover:hover {
    background-color: #ccc;
}
</style>
