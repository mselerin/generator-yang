import {Routes, RouterModule} from "@angular/router";
<% if (component) {%>import {<%=titleName%>Component} from './<%=kebabName%>.component';<% } %>


let routes: Routes = [
   <% if (component) {%>{
   path: '<%=kebabName%>',
      component: <%=titleName%>Component
}<% } %>
];

export const <%=titleName%>Routes = RouterModule.forChild(routes);
