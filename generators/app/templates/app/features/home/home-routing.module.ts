import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "app/features/home/home.component";


let routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }
];

export const HomeRoutes = RouterModule.forChild(routes);
