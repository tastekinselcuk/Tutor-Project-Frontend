// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import store from "../store";

const routes = [
  // Main
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    name: "register",
    path: "/register",
    component: () => import("../views/RegisterView.vue")
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/findTutor',
    name: 'FindTutor',
    component: () => import('../views/TutorFindView.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  // Tutor
  {
    path: '/tutorDashboard',
    name: 'TutorDashboard',
    component: () => import('../views/Tutor/TutorDashboardView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tutorCourses',
    name: 'TutorCourses',
    component: () => import('../views/Tutor/TutorCoursesView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tutorStudent',
    name: 'TutorStudent',
    component: () => import('../views/Tutor/TutorStudentView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tutorAssignment',
    name: 'TutorAssignment',
    component: () => import('../views/Tutor/TutorAssignmentView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tutorSchedule',
    name: 'TutorSchedule',
    component: () => import('../views/Tutor/TutorScheduleView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tutorLive',
    name: 'TutorLive',
    component: () => import('../views/Tutor/TutorLiveLessonView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tutorTransaction',
    name: 'TutorTransaction',
    component: () => import('../views/Tutor/TutorTransactionVıew.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tutorMessage',
    name: 'TutorMessage',
    component: () => import('../views/Tutor/TutorMessageView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/tutorSettings',
    name: 'TutorSettings',
    component: () => import('../views/Tutor/TutorSettingsView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  // Student
  {
    path: '/studentDashboard',
    name: 'StudentDashboard',
    component: () => import('../views/Student/StudentDashboardView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/studentSchedule',
    name: 'StudentSchedule',
    component: () => import('../views/Student/StudentScheduleView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/studentMessage',
    name: 'StudentMessage',
    component: () => import('../views/Student/StudentMessageView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/studentCourses',
    name: 'StudentCourses',
    component: () => import('../views/Student/StudentCoursesView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/studentAssignment',
    name: 'StudentAssignment',
    component: () => import('../views/Student/StudentAssignmentView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/studentTransaction',
    name: 'StudentTransaction',
    component: () => import('../views/Student/StudentTransactionView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/studentSettings',
    name: 'StudentSettings',
    component: () => import('../views/Student/StudentSettingsView.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['home', 'Login', 'register', 'Contact', 'FindTutor', 'About'];
  const authRequired = !publicPages.includes(to.name);
  const _isAuthenticated = store.getters._isAuthenticated;

  // Eğer kullanıcı giriş yapmışsa ve login sayfasına gitmeye çalışıyorsa ana sayfaya yönlendir
  if (to.name === 'Login' && _isAuthenticated) {
    return next({ name: 'home' });
  }

  // Eğer yetki gerektiren bir sayfaya erişmeye çalışıyorsa ve giriş yapmamışsa giriş sayfasına yönlendir
  if (authRequired && !_isAuthenticated) {
    alert('Bu sayfaya erişmek için giriş yapmalısınız.');
    return next({ name: 'Login' });
  }

  next();
});

export default router;
