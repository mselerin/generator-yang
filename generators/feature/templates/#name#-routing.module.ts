import {Routes, RouterModule} from "@angular/router";
import {<%=titleName%>Component} from './<%=kebabName%>.component';


let routes: Routes = [
   {
      path: '<%=kebabName%>',
      component: <%=titleName%>Component
   }
];

export const <%=titleName%>Routes = RouterModule.forChild(routes);
