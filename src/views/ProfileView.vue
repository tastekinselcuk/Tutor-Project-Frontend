<template>
    <div class="app">
        <Sidebar />
    <div class="main-content">
          <div class="container">
    <div class="box">
      <div class="col-md-12">
        <div class="col-md-3 pull-right form-group has-feedback">
          <input type="text" class="form-control has-feedback-left" placeholder="" v-model="search">
          <span class="fa fa-search form-control-feedback left" aria-hidden="true"></span>
          <span class="fa fa-times-circle-o clearSearch" aria-hidden="true" v-show="search" @click="search = ''"></span>
        </div>
        <div class="pull-right">
          <button type="button" class="btn btn-info" @click="undoInfo"><span class="fa fa-undo" aria-hidden="true"></span> Undo</button>
          <button type="button" class="btn btn-info" @click="redoInfo"><span class="fa fa-repeat" aria-hidden="true"></span> Redo</button>
          <button type="button" class="btn btn-info" @click="addInfo"><span class="fa fa-plus" aria-hidden="true"></span> ADD</button>
          <button type="button" class="btn btn-info" @click="deleteSelInfo"><span class="fa fa-trash-o" aria-hidden="true"></span> Delete</button>
        </div>
      </div>
      <table class="table table-striped">
        <thead>
          <th><input type="checkbox" v-model="checkAll"></th>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Birthday</th>
          <th>Phone</th>
          <th>Created Time</th>
          <th></th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="data in information" :key="data.id">
            <td><input type="checkbox" v-model="data.check" :checked="checkAll"></td>
            <td>{{ data.id }}</td>
            <td>{{ data.name }}</td>
            <td>{{ data.gender }}</td>
            <td>{{ data.birthday }}</td>
            <td>{{ data.phone }}</td>
            <td>{{ data.createdtime }}</td>
            <td>
              <span class="fa fa-edit" aria-hidden="true" @click="editInfo(data)"><ion-icon name="create-outline"></ion-icon><br><small>Edit</small></span>
            </td>
            <td>
              <span class="fa fa-trash" aria-hidden="true" @click="deleteInfo(data)"><ion-icon name="trash-outline"></ion-icon><br><small>Delete</small></span>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="col-md-4 col-md-offset-4 listInfo" v-if="listInfo">
        <div class="panel panel-info">
          <div class="panel-heading">
            <h3 class="panel-title text-center">{{ info.panelTitle || "Edit" }}</h3>
          </div>
          <div class="panel-body">
            <form name="signForm" class="form-body" @submit.prevent="submitInfo">
              <div class="form-group has-feedback">
                <input type="text" class="form-control has-feedback-left" placeholder="Name" required v-model="info.name">
                <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
              </div>
              <div class="form-group inputSpan">
                <span class="fa fa-venus-mars" aria-hidden="true"></span>
                <label class="radio-inline">
                  <input type="radio" name="gender" value="Male" required v-model="info.gender"> Male
                </label>
                <label class="radio-inline">
                  <input type="radio" name="gender" value="Female" required v-model="info.gender"> Female
                </label>
              </div>
              <div class="form-group has-feedback">
                <input type="text" class="form-control has-feedback-left" placeholder="Birthday" required v-model="info.birthday">
                <span class="fa fa-calendar form-control-feedback left" aria-hidden="true"></span>
              </div>
              <div class="form-group has-feedback">
                <input type="text" class="form-control has-feedback-left" placeholder="Phone" required v-model="info.phone">
                <span class="fa fa-phone form-control-feedback left" aria-hidden="true"></span>
              </div>
              <span class="spanID">ID: {{ info.id }}</span>
              <div class="pull-right">
                <button type="submit" class="btn btn-success">Submit</button>
                <button type="button" class="btn btn-warning" @click="cancelInfo">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
      </div>


    </div>

</template>

<script>
  import Sidebar from "@/components/SideBarTeacher.vue";

export default {

  components: {
    Sidebar
  },
  data() {
    return {
      information: [
        {
          id: 1001,
          name: 'Winnie',
          gender: 'Male',
          birthday: '1926-12-24',
          phone: '0936-XXX-XXX',
          createdtime: '2016-03-11 10:56:38',
        },
        {
          id: 1002,
          name: 'Piglet',
          gender: 'Female',
          birthday: '1938-03-28',
          phone: '0978-XXX-XXX',
          createdtime: '2016-05-26 16:17:22',
        },
        {
          id: 1003,
          name: 'Tigger',
          gender: 'Male',
          birthday: '1935-12-06',
          phone: '0956-XXX-XXX',
          createdtime: '2016-07-27 18:20:58',
        },
      ],
      info: {},
      listInfo: false,
      infoID: 1004,
      undoHistory: [],
      redoHistory: [],
      checkAll: false,
      search: '',
    };
  },
  methods: {
    addInfo() {
      this.listInfo = true;
      this.info = {
        panelTitle: 'Add Information',
        id: this.infoID,
        name: 'Rabbit',
        gender: 'Male',
        birthday: '1942-06-17',
        phone: '0986-XXX-XXX',
      };
    },
    editInfo(data) {
      this.listInfo = true;
      this.info = {
        panelTitle: 'Edit Information',
        id: data.id,
        name: data.name,
        gender: data.gender,
        birthday: data.birthday,
        phone: data.phone,
      };
    },
    submitInfo() {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1 >= 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
      const day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate();
      const hours = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours();
      const minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
      const seconds = date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds();
      const now = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

      if (this.info.panelTitle === 'Add Information') {
        this.undoHistory.push(JSON.parse(JSON.stringify(this.information)));
        this.information.push({
          id: this.info.id,
          name: this.info.name,
          gender: this.info.gender,
          birthday: this.info.birthday,
          phone: this.info.phone,
          createdtime: now,
        });
        this.listInfo = false;
        this.infoID += 1;
      } else {
        this.undoHistory.push(JSON.parse(JSON.stringify(this.information)));
        this.information.forEach((value, key) => {
          if (value.id === this.info.id) {
            value.name = this.info.name;
            value.gender = this.info.gender;
            value.birthday = this.info.birthday;
            value.phone = this.info.phone;
          }
        });
        this.listInfo = false;
      }
    },
    deleteInfo(data) {
      this.undoHistory.push(JSON.parse(JSON.stringify(this.information)));
      this.information.splice(this.information.indexOf(data), 1);
    },
    deleteSelInfo() {
      this.undoHistory.push(JSON.parse(JSON.stringify(this.information)));
      if (this.checkAll) {
        this.information = [];
        this.checkAll = false;
      } else {
        this.information = this.information.filter((value) => !value.check);
      }
    },
    cancelInfo() {
      this.info = {};
      this.listInfo = false;
    },
    undoInfo() {
      if (this.undoHistory.length) {
        this.redoHistory.push(JSON.parse(JSON.stringify(this.information)));
        this.information = JSON.parse(JSON.stringify(this.undoHistory.pop()));
      }
    },
    redoInfo() {
      if (this.redoHistory.length) {
        this.undoHistory.push(JSON.parse(JSON.stringify(this.information)));
        this.information = JSON.parse(JSON.stringify(this.redoHistory.pop()));
      }
    },
  },
};
</script>

<style>
.app {
  display: flex;
}

.sidebar {
  width: 250px; /* Sabit genişlik */
}

.main-content {
  flex: 1; /* Kullanılabilir boş alanı doldurmak için */
  padding: 2rem;
}
:root {
  --blue: #4e73df;
  --indigo: #6610f2;
  --purple: #6f42c1;
  --pink: #e83e8c;
  --red: #e74a3b;
  --orange: #fd7e14;
  --yellow: #f6c23e;
  --green: #1cc88a;
  --teal: #20c9a6;
  --cyan: #36b9cc;
  --white: #fff;
  --gray: #858796;
  --gray-dark: #5a5c69;
  --primary: #4e73df;
  --secondary: #858796;
  --success: #1cc88a;
  --info: #36b9cc;
  --warning: #f6c23e;
  --danger: #e74a3b;
  --light: #f8f9fc;
  --dark: #5a5c69;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app main {
  flex: 1 1 0;
  padding: 2rem;
}

@media (max-width: 1024px) {
  .app main {
    padding-left: 6rem;
  }
}
* {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: monospace, serif, sans-serif, "微軟正黑體";
    color: #555;
}

table, th {
    text-align: center;
}
.box {
	  margin-top: 80px;
    margin-bottom: 80px;
    padding: 25px;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
}

/* -----Input Setting----- */
.form-control-feedback {
    margin-top: 8px;
    height: 23px;
    color: #bbb;
    line-height: 24px;
    font-size: 15px;
}
.form-control.has-feedback-left {
    padding-top: 10px;
    padding-left: 45px;
}
.form-control-feedback.left {
    border-right: 1px solid #ccc;
    left: 18px;
}
.panel .form-control-feedback.left {
    border-right: 1px solid #ccc;
    left: 2px;
}
.btn span { color: #FFF; }

/* -----CRUD Setting----- */
table span.fa {
    text-align: center;
    font-size: 20px;
}
table span.fa small {
    font-size: 10px;
}
table span {
    cursor: pointer;
}
.listInfo {
    position: absolute;
    top: 100px;
}
.listInfo .panel {
    box-shadow: 1px 1px 5px #aaa;
}
.inputSpan {
    padding: 3px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.inputSpan span {
    padding: 6px 9px;
    color: #bbb;
    border-right: 1px solid #ccc;
}
.spanID {
    color: #999;
    position: absolute;
    left: 35px;
    bottom: 35px;
}
.clearSearch {
    right: 18px;
    color: #C73E3A;
    font-size: 16px;
    cursor: pointer;
    position: absolute;
    right: 28px;
    bottom: 8px;
}
</style>

