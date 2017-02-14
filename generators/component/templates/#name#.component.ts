import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
   selector: '<%=name%>',
   templateUrl: './<%=name%>.component.html'<% if (styles) {%>,
   styleUrls: ['./<%=name%>.component.scss']<% } %>
})
export class <%=titleName%>Component implements OnInit, OnDestroy
{
   constructor() {}
   ngOnInit() {}
   ngOnDestroy() {}
}
