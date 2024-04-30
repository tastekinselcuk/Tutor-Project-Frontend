import { createRouter, createWebHistory } from 'vue-router'
import store from "../store";

const routes = [
  //Main
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Student/StudentDashboardView.vue')
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
  //Tutor
  {
    path: '/tutorDashboard',
    name: 'TutorDashboard',
    component: () => import('../views/Tutor/TutorDashboardView.vue')
  },
  {
    path: '/tutorCourses',
    name: 'TutorCourses',
    component: () => import('../views/Tutor/TutorCoursesView.vue')
  },
  {
    path: '/tutorStudent',
    name: 'TutorStudent',
    component: () => import('../views/Tutor/TutorStudentView.vue')
  },
  {
    path: '/tutorAssignment',
    name: 'TutorAssignment',
    component: () => import('../views/Tutor/TutorAssignmentView.vue')
  },
  {
    path: '/tutorSchedule',
    name: 'TutorSchedule',
    component: () => import('../views/Tutor/TutorScheduleView.vue')
  },
  {
    path: '/tutorLive',
    name: 'TutorLive',
    component: () => import('../views/Tutor/TutorLiveLessonView.vue')
  },
  {
    path: '/tutorTransaction',
    name: 'TutorTransaction',
    component: () => import('../views/Tutor/TutorTransactionVıew.vue')
  },
  {
    path: '/tutorMessage',
    name: 'TutorMessage',
    component: () => import('../views/Tutor/TutorMessageView.vue')
  },
  {
    path: '/tutorSettings',
    name: 'TutorSettings',
    component: () => import('../views/Tutor/TutorSettingsView.vue')
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
