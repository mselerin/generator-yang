import {NgModule} from '@angular/core';
import {SharedModule} from "app/shared/shared.module";
import {<%=titleName%>Component} from './<%=kebabName%>.component';
import {<%=titleName%>Routes} from './<%=kebabName%>-routing.module';


@NgModule({
   imports: [
      SharedModule,
      <%=titleName%>Routes
   ],
   declarations: [ <%=titleName%>Component ]
})
export class <%=titleName%>Module {}
