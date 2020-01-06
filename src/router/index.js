import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页
import Home from "../views/pages/home/Home.vue"
// 学校概况
import SchIntroduction from "../views/pages/schoolProfile/SchIntroduction.vue"
import ClassroomSetup from "../views/pages/schoolProfile/ClassroomSetup.vue"
// 招生就业
import StudentBrochure from "../views/pages/enrollmentEmployment/StudentBrochure.vue"
import EmploymentSecurity from "../views/pages/enrollmentEmployment/EmploymentSecurity.vue"
// 学院风采
import AcademyStyle from "../views/pages/academyStyle/AcademyStyle.vue"
// 新闻公告
import NewsBulletin from "../views/pages/newsBulletin/NewsBulletin.vue"
// 联系我们
import ContactUs from "../views/pages/contactUs/ContactUs.vue"

Vue.use(VueRouter)

const routes = [
  {
	  path: "/",
	  redirect: "/home"
  },
  {
	  path: "/home",
	  component: Home
  },
  {
	  path: "/schIntroduction",
	  component: SchIntroduction
  },
  {
	  path: "/classroomSetup",
	  component: ClassroomSetup
  },
  {
	  path: "/studentBrochure",
	  component: StudentBrochure
  },
  {
	  path: "/employmentSecurity",
	  component: EmploymentSecurity
  },
  {
	  path: "/academyStyle",
	  component: AcademyStyle
  },
  {
	  path: "/newsBulletin",
	  component: NewsBulletin
  },
  {
	  path: "/ContactUs",
	  component: ContactUs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
