import {NgModule} from '@angular/core';
import {SharedModule} from "app/shared/shared.module";
import {<%=titleName%>Component} from './<%=name%>.component';
import {<%=titleName%>Routes} from './<%=name%>-routing.module';


@NgModule({
   imports: [
      SharedModule,
      <%=titleName%>Routes
   ],
   declarations: [ <%=titleName%>Component ]
})
export class <%=titleName%>Module {}
