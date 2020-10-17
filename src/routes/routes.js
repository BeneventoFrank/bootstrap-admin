
import HelloWorld from "@/pages/Dashboard/HelloWorld.vue";


const routes = [
  {
    path: "/",
    redirect: "/helloworld",
    name: "Home"
  },
  {
    path: "/",
    component: HelloWorld,
    children: [
      {
        path: "helloworld",
        name: "HelloWorld",
        components: { default: HelloWorld }
      }
    ]
  }
];

export default routes;
