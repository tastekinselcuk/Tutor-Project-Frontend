<template>
    <Navbar class="navbar" />
    <NavbarTutor class="navbarTutor" />
<div class="app">
          <!-- Begin Page Content -->
          <div class="container">

              <!-- Page Heading -->
              <div class="d-sm-flex align-items-center justify-content-between mb-4">
                  <h1 class="h3 mb-0 text-gray-800">Öğretmen Arayüzü</h1>
                  <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                          class="fas fa-download fa-sm text-white-50"></i> Rapor Oluştur</a>
              </div>

              <!-- Content Row -->
              <div class="row">

                  <!-- Earnings (Monthly) Card Example -->
                  <div class="col-xl-3 col-md-6 mb-4">
                      <div class="card border-left-primary shadow h-100 py-2">
                          <div class="card-body">
                              <div class="row no-gutters align-items-center">
                                  <div class="col mr-2">
                                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                          Kazanç (Aylık)</div>
                                      <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                  </div>
                                  <div class="col-auto">
                                      <ion-icon class="dashboardIcons" name="calendar-outline"></ion-icon>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!-- Earnings (Monthly) Card Example -->
                  <div class="col-xl-3 col-md-6 mb-4">
                      <div class="card border-left-success shadow h-100 py-2">
                          <div class="card-body">
                              <div class="row no-gutters align-items-center">
                                  <div class="col mr-2">
                                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                          Kazanç (Yıllık)</div>
                                      <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                  </div>
                                  <div class="col-auto">
                                    <ion-icon class="dashboardIcons" name="cash-outline"></ion-icon>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <!-- Earnings (Monthly) Card Example -->
                  <div class="col-xl-3 col-md-6 mb-4">
                      <div class="card border-left-info shadow h-100 py-2">
                          <div class="card-body">
                              <div class="row no-gutters align-items-center">
                                  <div class="col mr-2">
                                      <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Görevler
                                      </div>
                                      <div class="row no-gutters align-items-center">
                                          <div class="col-auto">
                                              <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                          </div>
                                          <div class="col">
                                              <div class="progress progress-sm mr-2">
                                                  <div class="progress-bar bg-info" role="progressbar"
                                                      style="width: 50%" aria-valuenow="50" aria-valuemin="0"
                                                      aria-valuemax="100"></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-auto">
                                    <ion-icon class="dashboardIcons" name="receipt-outline"></ion-icon>
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
                                          Bekleyen İstekler</div>
                                      <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                  </div>
                                  <div class="col-auto">
                                    <ion-icon class="dashboardIcons" name="chatbubbles-outline"></ion-icon>
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
      <thead class="thead-light">
        <tr>
          <th><h1>Öğrenci</h1></th>
          <th><h1>Ders</h1></th>
          <th><h1>Derse Devamlılık (%)</h1></th>
          <th><h1>Giriş Tarihi</h1></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Ali Veli</td>
          <td>Matematik</td>
          <td>
            <div class="progress-container">
              <div class="progress-bar" style="width: 95%;"></div>
              <span class="progress-value">95%</span>
            </div>
          </td>
          <td>2024-01-15</td>
        </tr>
        <tr>
          <td>Ayşe Yılmaz</td>
          <td>Fizik</td>
          <td>
            <div class="progress-container">
              <div class="progress-bar" style="width: 88%;"></div>
              <span class="progress-value">88%</span>
            </div>
          </td>
          <td>2024-01-18</td>
        </tr>
        <tr>
          <td>Mehmet Çelik</td>
          <td>Kimya</td>
          <td>
            <div class="progress-container">
              <div class="progress-bar" style="width: 92%;"></div>
              <span class="progress-value">92%</span>
            </div>
          </td>
          <td>2024-01-20</td>
        </tr>
        <tr>
          <td>Elif Kaya</td>
          <td>Biyoloji</td>
          <td>
            <div class="progress-container">
              <div class="progress-bar" style="width: 97%;"></div>
              <span class="progress-value">97%</span>
            </div>
          </td>
          <td>2024-01-22</td>
        </tr>
        <tr>
          <td>Burak Sarı</td>
          <td>Tarih</td>
          <td>
            <div class="progress-container">
              <div class="progress-bar" style="width: 85%;"></div>
              <span class="progress-value">85%</span>
            </div>
          </td>
          <td>2024-01-25</td>
        </tr>
        <tr>
          <td>Zeynep Aksoy</td>
          <td>Coğrafya</td>
          <td>
            <div class="progress-container">
              <div class="progress-bar" style="width: 90%;"></div>
              <span class="progress-value">90%</span>
            </div>
          </td>
          <td>2024-01-27</td>
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

              <!-- Content Row -->
              <div class="row">

                  <!-- Content Column -->
                  <div class="col-lg-6 mb-4">

                      <!-- Project Card Example -->
                      <div class="card shadow mb-4">
                          <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">Projeler</h6>
                          </div>
                          <div class="card-body">
                              <h4 class="small font-weight-bold">Server Migration <span
                                      class="float-right">20%</span></h4>
                              <div class="progress mb-4">
                                  <div class="progress-bar bg-danger" role="progressbar" style="width: 20%"
                                      aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <h4 class="small font-weight-bold">Sales Tracking <span
                                      class="float-right">40%</span></h4>
                              <div class="progress mb-4">
                                  <div class="progress-bar bg-warning" role="progressbar" style="width: 40%"
                                      aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <h4 class="small font-weight-bold">Customer Database <span
                                      class="float-right">60%</span></h4>
                              <div class="progress mb-4">
                                  <div class="progress-bar" role="progressbar" style="width: 60%"
                                      aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <h4 class="small font-weight-bold">Payout Details <span
                                      class="float-right">80%</span></h4>
                              <div class="progress mb-4">
                                  <div class="progress-bar bg-info" role="progressbar" style="width: 80%"
                                      aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                              <h4 class="small font-weight-bold">Account Setup <span
                                      class="float-right">Complete!</span></h4>
                              <div class="progress">
                                  <div class="progress-bar bg-success" role="progressbar" style="width: 100%"
                                      aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                          </div>
                      </div>

                      <!-- Color System -->
                      <div class="row">
                          <div class="col-lg-6 mb-4">
                              <div class="card bg-primary text-white shadow">
                                  <div class="card-body">
                                      Primary
                                      <div class="text-white-50 small">#4e73df</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6 mb-4">
                              <div class="card bg-success text-white shadow">
                                  <div class="card-body">
                                      Success
                                      <div class="text-white-50 small">#1cc88a</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6 mb-4">
                              <div class="card bg-info text-white shadow">
                                  <div class="card-body">
                                      Info
                                      <div class="text-white-50 small">#36b9cc</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6 mb-4">
                              <div class="card bg-warning text-white shadow">
                                  <div class="card-body">
                                      Warning
                                      <div class="text-white-50 small">#f6c23e</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6 mb-4">
                              <div class="card bg-danger text-white shadow">
                                  <div class="card-body">
                                      Danger
                                      <div class="text-white-50 small">#e74a3b</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6 mb-4">
                              <div class="card bg-secondary text-white shadow">
                                  <div class="card-body">
                                      Secondary
                                      <div class="text-white-50 small">#858796</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6 mb-4">
                              <div class="card bg-light text-black shadow">
                                  <div class="card-body">
                                      Light
                                      <div class="text-black-50 small">#f8f9fc</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-lg-6 mb-4">
                              <div class="card bg-dark text-white shadow">
                                  <div class="card-body">
                                      Dark
                                      <div class="text-white-50 small">#5a5c69</div>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>

                  <div class="col-lg-6 mb-4">

                      <!-- Illustrations -->
                      <div class="card shadow mb-4">
                          <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">Açıklamalar</h6>
                          </div>
                          <div class="card-body">
                              <div class="text-center">
                                  <img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;"
                                      src="img/undraw_posting_photo.svg" alt="...">
                              </div>
                              <p>Add some quality, svg illustrations to your project courtesy of <a
                                      target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a
                                  constantly updated collection of beautiful svg images that you can use
                                  completely free and without attribution!</p>
                              <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on
                                  unDraw &rarr;</a>
                          </div>
                      </div>

                      <!-- Approach -->
                      <div class="card shadow mb-4">
                          <div class="card-header py-3">
                              <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
                          </div>
                          <div class="card-body">
                              <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                  CSS bloat and poor page performance. Custom CSS classes are used to create
                                  custom components and custom utility classes.</p>
                              <p class="mb-0">Before working with this theme, you should become familiar with the
                                  Bootstrap framework, especially the utility classes.</p>
                          </div>
                      </div>

                  </div>
              </div>
          </div>
          <!-- /.container -->
</div>
                
</template>

<script>
import Navbar from "@/components/NavBar.vue";
import NavbarTutor from "@/components/NavBarTutor.vue";
import { onMounted } from "vue";
import Chart from "chart.js/auto";

export default {
  components: {
    Navbar,
    NavbarTutor
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
};
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