import {Component, OnInit} from '@angular/core';

@Component({
   selector: '<%=kebabName%>',
   templateUrl: './<%=kebabName%>.component.html'<% if (styles) {%>,
   styleUrls: ['./<%=kebabName%>.component.scss']<% } %>
})
export class <%=titleName%>Component implements OnInit
{
   constructor() {}
   ngOnInit() {}
}
