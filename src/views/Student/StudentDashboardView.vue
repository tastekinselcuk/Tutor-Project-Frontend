<template>
  <Navbar class="navbar" />
  <NavbarStudent class="navbarStudent" />
  <div class="app">
    <!-- Begin Page Content -->
    <div class="container">

      <!-- Page Heading -->
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Öğrenci Paneli</h1>
      </div>

      <!-- Content Row -->
      <div class="row">

        <!-- Upcoming Classes Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-primary shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Yaklaşan Dersler</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">3</div>
                </div>
                <div class="col-auto">
                  <ion-icon class="dashboardIcons" name="calendar-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Attendance Status Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-success shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Katılım Durumu</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">%90</div>
                </div>
                <div class="col-auto">
                  <ion-icon class="dashboardIcons" name="checkmark-done-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tasks Completion Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-info shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tamamlanan Ödevler
                  </div>
                  <div class="row no-gutters align-items-center">
                    <div class="col-auto">
                      <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">8/10</div>
                    </div>
                    <div class="col">
                      <div class="progress progress-sm mr-2">
                        <div class="progress-bar bg-info" role="progressbar"
                          style="width: 80%" aria-valuenow="80" aria-valuemin="0"
                          aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <ion-icon class="dashboardIcons" name="book-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Pending Requests Card Example -->
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-left-warning shadow h-100 py-2">
            <div class="card-body">
              <div class="row no-gutters align-items-center">
                <div class="col mr-2">
                  <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Bekleyen Görevler</div>
                  <div class="h5 mb-0 font-weight-bold text-gray-800">2</div>
                </div>
                <div class="col-auto">
                  <ion-icon class="dashboardIcons" name="time-outline"></ion-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Row -->
      <div class="row">
        <div class="col-xl-12 col-lg-10 mb-5 mt-5">
          <table class="table table-striped table-bordered">
            <thead>
              <tr>
                <th><h1>Öğretmen</h1></th>
                <th><h1>Ders</h1></th>
                <th><h1>Sınıf</h1></th>
                <th><h1>Ders Saati</h1></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ali Yılmaz</td>
                <td>Matematik</td>
                <td>10A</td>
                <td>09:00 - 10:00</td>
              </tr>
              <tr>
                <td>Ayşe Kaya</td>
                <td>Fizik</td>
                <td>10A</td>
                <td>10:15 - 11:15</td>
              </tr>
              <tr>
                <td>Mehmet Demir</td>
                <td>Kimya</td>
                <td>10B</td>
                <td>11:30 - 12:30</td>
              </tr>
              <tr>
                <td>Fatma Çelik</td>
                <td>Biyoloji</td>
                <td>10B</td>
                <td>13:00 - 14:00</td>
              </tr>
              <tr>
                <td>Ömer Şahin</td>
                <td>Türkçe</td>
                <td>10C</td>
                <td>14:15 - 15:15</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Area Chart -->
        <div class="col-xl-8 col-lg-7">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">Yaklaşan Dersler</h6>
              <div class="dropdown no-arrow">
                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink">
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="chart-area">
                <canvas id="myAreaChart"></canvas>
              </div>
            </div>
          </div>
        </div>

        <!-- Pie Chart -->
        <div class="col-xl-4 col-lg-5">
          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div
              class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 class="m-0 font-weight-bold text-primary">Katılım Oranları</h6>
              <div class="dropdown no-arrow">
                <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink">
                  <div class="dropdown-header">Dropdown Header:</div>
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
              <div class="chart-pie pt-4 pb-2">
                <canvas id="myPieChart"></canvas>
              </div>
              <div class="mt-4 text-center small">
                <span class="mr-2">
                  <i class="fas fa-circle text-primary"></i> Derslere Katılım
                </span>
                <span class="mr-2">
                  <i class="fas fa-circle text-success"></i> Ödev Tamamlama
                </span>
                <span class="mr-2">
                  <i class="fas fa-circle text-info"></i> Sınıf İçi Etkinlikler
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- /.container-fluid -->

  </div>
  <!-- End of Main Content -->
</template>

<script>
  import Navbar from "@/components/NavBar.vue";
  import NavbarStudent from "@/components/NavBarStudent.vue";
  import { onMounted } from "vue";
  import Chart from "chart.js/auto";


export default {

  components: {
    Navbar,
    NavbarStudent
  },
    setup() {
    onMounted(() => {
      const ctxArea = document.getElementById("myAreaChart").getContext("2d");
      const ctxPie = document.getElementById("myPieChart").getContext("2d");

      new Chart(ctxArea, {
        type: "line",
        data: {
          labels: ["January", "February", "March", "April", "May", "June"],
          datasets: [{
            label: "Sessions",
            data: [0, 10, 5, 2, 20, 30, 45],
            backgroundColor: "rgba(78, 115, 223, 0.05)",
            borderColor: "rgba(78, 115, 223, 1)"
          }]
        },
        options: {
          maintainAspectRatio: false,
          scales: {
            x: { display: true, title: { display: true, text: "Month" } },
            y: { display: true, title: { display: true, text: "Value" } }
          }
        }
      });

      new Chart(ctxPie, {
        type: "doughnut",
        data: {
          labels: ["Direct", "Social", "Referral"],
          datasets: [{
            data: [55, 30, 15],
            backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"]
          }]
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true, position: "bottom" }
          }
        }
      });
    });
  }
}
</script>

<style scoped>
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row {
  margin-right: -15px;
  margin-left: -15px;
}

.col-lg-3,
.col-md-6 {
  padding-right: 15px;
  padding-left: 15px;
}

.card {
  border: none;
  border-radius: 1rem;
  transition: all 0.3s;
}

.card-body {
  padding: 1.5rem;
}

.card-header {
  border-bottom: none;
  padding: 1.25rem 1.5rem;
}

.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #858796;
}

.table th,
.table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #e3e6f0;
}

.table thead th {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #e3e6f0;
  font-size: 0.7rem; /* Önceki boyut: 1rem */
  font-weight: 600; /* Önceki: 700 */
  color: #5a5c69;
}

.h5,
.h6,
.h1,
.h2,
.h3 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.mt-5 {
  margin-top: 3rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.text-gray-800 {
  color: #5a5c69;
}

.text-xs {
  font-size: 0.75rem;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.font-weight-normal {
  font-weight: 400 !important;
}

.text-uppercase {
  text-transform: uppercase;
}

.align-items-center {
  align-items: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.mb-4 {
  margin-bottom: 1.5rem !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.no-gutters {
  margin-right: 0;
  margin-left: 0;
}

.progress-bar {
  background-color: #4e73df !important;
}

.text-primary {
  color: #4e73df !important;
}

.text-success {
  color: #1cc88a !important;
}

.text-info {
  color: #36b9cc !important;
}

.text-warning {
  color: #f6c23e !important;
}

.text-danger {
  color: #e74a3b !important;
}

.dashboardIcons {
  color: #5a5c69;
  font-size: 3rem; /* Önceki boyut: varsayılan */
}
</style>

