import { createRouter, createWebHistory } from 'vue-router'
import store from "../store";

const routes = [
  //Main
  {
    path: '/',
    name: 'home',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("../views/RegisterView.vue")
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/DashboardView.vue')
  },

  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfileView.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/SettingsView.vue')
  },
  {
    path: '/assignment',
    name: 'Assignment',
    component: () => import('../views/AssignmentView.vue')
  },
  //Teacher
  {
    path: '/teacherDashboard',
    name: 'TeacherDashboard',
    component: () => import('../views/Teacher/TeacherDashboardView.vue')
  },
  {
    path: '/teacherCourses',
    name: 'TeacherCourses',
    component: () => import('../views/Teacher/TeacherCoursesView.vue')
  },
  {
    path: '/teacherStudent',
    name: 'TeacherStudent',
    component: () => import('../views/Teacher/TeacherStudentView.vue')
  },
  {
    path: '/teacherAssignment',
    name: 'TeacherAssignment',
    component: () => import('../views/Teacher/TeacherAssignmentView.vue')
  },
  {
    path: '/teacherSchedule',
    name: 'TeacherSchedule',
    component: () => import('../views/Teacher/TeacherScheduleView.vue')
  },
  {
    path: '/teacherLive',
    name: 'TeacherLive',
    component: () => import('../views/Teacher/TeacherLiveView.vue')
  },
  {
    path: '/teacherTransaction',
    name: 'TeacherTransaction',
    component: () => import('../views/Teacher/TeacherTransactionVıew.vue')
  },
  {
    path: '/teacherMessage',
    name: 'TeacherMessage',
    component: () => import('../views/Teacher/TeacherMessageView.vue')
  },
  {
    path: '/teacherSettings',
    name: 'TeacherSettings',
    component: () => import('../views/Teacher/TeacherSettingsView.vue')
  },
  //Student
  {
    path: '/studentDashboard',
    name: 'StudentDashboard',
    component: () => import('../views/Student/StudentDashboardView.vue')
  },
  {
    path: '/studentSchedule',
    name: 'StudentSchedule',
    component: () => import('../views/Student/StudentScheduleView.vue')
  },
  {
    path: '/studentMessage',
    name: 'StudentMessage',
    component: () => import('../views/Student/StudentMessageView.vue')
  },
  {
    path: '/studentCourses',
    name: 'StudentCourses',
    component: () => import('../views/Student/StudentCoursesView.vue')
  },
  {
    path: '/studentAssignment',
    name: 'StudentAssignment',
    component: () => import('../views/Student/StudentAssignmentView.vue')
  },
  {
    path: '/studentTransaction',
    name: 'StudentTransaction',
    component: () => import('../views/Student/StudentTransactionView.vue')
  },
  {
    path: '/studentSettings',
    name: 'StudentSettings',
    component: () => import('../views/Student/StudentSettingsView.vue')
  },
/***********************************************************************/

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, _, next) => {
  const authRequiredRoutes = ["HomePage"];
  const authNotRequiredRoutes = ["LoginPage", "RegisterPage"];
  const _isAuthenticated = store.getters._isAuthenticated;

  if (authNotRequiredRoutes.indexOf(to.name) > -1 && _isAuthenticated) next(false);

  if (authRequiredRoutes.indexOf(to.name) > -1) {
    if (_isAuthenticated) next();
    else next({ name: "LoginPage" });
  } else {
    next();
  }
});

export default router
