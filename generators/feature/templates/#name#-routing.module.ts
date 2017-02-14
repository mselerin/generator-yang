import {Routes, RouterModule} from "@angular/router";
import {<%=titleName%>Component} from './<%=name%>.component';


let routes: Routes = [
   {
      path: '<%=name%>',
      component: <%=titleName%>Component
   }
];

export const <%=titleName%>Routes = RouterModule.forChild(routes);
