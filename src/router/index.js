import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import RegView from "@/views/RegView";
import FeedView from "@/views/FeedView";
import NotFoundView from "@/views/NotFoundView";
import MyProfileView from "@/views/MyProfileView";
import SettingView from "@/views/SettingView";
import MailView from "@/views/MailView";
import SelectedMessage from "@/views/SelectedMessageView";
import FriendView from "@/views/FriendView";
import GroupView from "@/views/GroupView";
import DocsView from "@/views/DocsView";
import SearchView from "@/views/SearchView";
import UserProfileView from "@/views/UserProfileView";
import GroupProfileView from "@/views/GroupProfileView";

const routes = [
  {
    path: "/",
    name: "login",
    meta: { title: "Вход " },
    component: LoginView,
  },
  {
    path: "/reg",
    name: "reg",
    meta: { title: "Регистрация" },
    component: RegView,
  },
  {
    path: "/feed",
    name: "feed",
    meta: { title: "Новости" },
    component: FeedView,
  },
  {
    path: "/myprofile",
    name: "myprofile",
    meta: { title: "Мой профиль" },
    component: MyProfileView,
  },
  {
    path: "/setting",
    name: "setting",
    meta: { title: "Настройки" },
    component: SettingView,
  },
  {
    path: "/mail",
    name: "mail",
    meta: { title: "Сообщения" },
    component: MailView,
  },
  {
    path: "/mail/:id",
    name: "SelectedMessageView",
    meta: { title: "Диалог" },
    component: SelectedMessage,
  },
  {
    path: "/friend",
    name: "friend",
    meta: { title: "Друзья" },
    component: FriendView,
  },
  {
    path: "/groups",
    name: "groups",
    meta: { title: "Группы" },
    component: GroupView,
  },
  {
    path: "/docs",
    name: "docs",
    meta: { title: "Документы" },
    component: DocsView,
  },
  {
    path: "/search",
    name: "search",
    meta: { title: "Поиск" },
    component: SearchView,
  },
  {
    path: "/user/:id",
    name: "userprofile",
    meta: { title: "Профиль пользователя" },
    component: UserProfileView,
  },
  {
    path: "/group/:id",
    name: "groupprofile",
    meta: { title: "Профиль группы" },
    component: GroupProfileView,
  },
  {
    path: "/:pathMatch(.*)*",
    meta: { title: "Не найдено" },
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
const DEFAULT_TITLE = document.title;
router.afterEach((to) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});
