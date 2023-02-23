import NotFound from "../fts/NotFound";
import Welcome from "../fts/welcome";
type RoutesObj = [
  {
    path: string,
    component: any,
    name: string,
    id: string,
    privateroute: boolean
  }
]
let PublicRoutes: RoutesObj = [
  {
    path: "/",
    component: Welcome,
    name: "welcome",
    id: "welcome",
    privateroute: false
  }
];

export default PublicRoutes;