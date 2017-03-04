import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
   selector: '<%=kebabName%>',
   templateUrl: './<%=kebabName%>.component.html'<% if (styles) {%>,
   styleUrls: ['./<%=kebabName%>.component.scss']<% } %>
})
export class <%=titleName%>Component implements OnInit, OnDestroy
{
   constructor() {}
   ngOnInit() {}
   ngOnDestroy() {}
}
