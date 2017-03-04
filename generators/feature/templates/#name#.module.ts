import {NgModule} from '@angular/core';
import {SharedModule} from "app/shared/shared.module";
import {<%=titleName%>Component} from './<%=kebabName%>.component';
import {<%=titleName%>Routes} from './<%=kebabName%>-routing.module';
/* yang-add-component-import - Yang will add components imports here */

@NgModule({
   imports: [
      SharedModule,
      <%=titleName%>Routes
   ],
   declarations: [
      /* yang-add-component-declaration - Yang will add components declarations here */
      <%=titleName%>Component
   ]
})
export class <%=titleName%>Module {}
