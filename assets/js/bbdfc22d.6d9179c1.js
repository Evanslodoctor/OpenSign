"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[1531],{60877:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>j,contentTitle:()=>h,default:()=>x,frontMatter:()=>u,metadata:()=>f,toc:()=>b});var t=a(85893),l=a(11151),r=a(58219),i=(a(62316),a(51039)),n=a.n(i),c=(a(82723),a(9487)),p=(a(41429),a(5397)),d=a(4667),m=a(9472),o=a(85162);const u={id:"createtemplate",title:"Create template",description:"The Template Creation API allows users to create customizable templates, which serve as blueprints for generating documents with predefined structures. Upon successful template creation, the API returns a unique **templateId** that can be used to generate documents based on the specified template and **url** to edit template.",sidebar_label:"Create template",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1v20YQ/SvbOTUCJcpJeuGprhsERoPYgBT0IBvGkhyJE5O7692hZMXgfy9mKSq0rRY55NiTyPnYmXnz9lFPwHoTIFvBEhtXa8YAtwmUGApPjskayGBZoRrc6sKjFrs6v75Uuq7tLqg2oA+KrSrEiapoA9uGvum8RsXDwYnaVVRUKqDfotJB5XWLzpPhoNbWqw0a9JrJbFRpi7ZBceyIK+U8lrgmg6UK7NuCW49hpr44a1RoiwJDWLf1sVLfBlmTKK4wNuqRW2+C0qo19NCimkyG6MtyMlFcaVaFNipHmaaUYQ794KibXIvPmnhucFjQmiR4KKxNqSaT1tdypFVYEh+dM0jAujihNZclZNCjNfghAY8PLQb+w5Z7yJ6gsIbRsDw2bc3ktOd0bX0zLTVrMYeiwiY+8d4hZGDzr1gwJOC81GLCIN411TiKCuzJbCABOUwzZJCT0X4PXQJL4lOxXQJ/jklxwv/Z8unEBW0M+jDyae/1HhIgxiacyOm6BLhv5AVKd7mAEwMELfJYQsa+xWgIzprQj/x2PpefF0x+xhCh05E99f4XSMaQa+dqKuK20q+hn/lH8e7NsuRjpGmbHL3A0fr61C7wUTcuTlwxu5Cl6cHS+npW2AbGoJCpyeDdMPHd2/n87r3A0iXwfv7b68kvzVbXVMbLsLT3aH7itOi99f890rg89+Wl1ccmQmF00w8Vg6Ifng07tvdDNsiVlUvkbIgdaa4gg/TVnYpqI+RbPfXIH+ENrDdkNlPt3Mw6NIE2ptZ5ELBT7SjdnkF3KycUrSfeLwSOfuLHqXY07RsasdrRXyi0PswzjkqAZA0V6lJY0Mn72sbkw5RXDo3clIjR9gxeqzAFRSG6B0XqlVjE80X2c6USp9jfzc4G1epXPVM35sYsbBNVTzS0JnMfshszVaur9ZoK0rX6G/NAjLe/DsjtdrtXiL2JOR+JqzZXHp39Hr6JxgjrOOv48gYSYPRNuFov0G+pGC7Bv5RKY3B6ILAuIoGx0STbPZh+f5kkhKqpQBNwRLnzj9ef1LvZHJIROX6g5fTT5cWHz4sPcqrQq1/R2Ww+m4tJSNloMyp00X8ZR8Qsn8vp8S7+/7n9aZ/bw71kfOTU1ZrMSH57wVi9/AjfJlCJomQreHqS+l983XVifmjR7yFb3Saw1Z4EbHnrkuFSi8Lc416W3e9yupT6El630sepj3iXDEnnRYGOR+GvJFnE6Kh711eLJSSQH/4rNLaUHDk4npt8f5Qmu+4fPNZ7XA==",sidebar_class_name:"post api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},h=void 0,f={id:"API-docs/createtemplate",title:"Create template",description:"The Template Creation API allows users to create customizable templates, which serve as blueprints for generating documents with predefined structures. Upon successful template creation, the API returns a unique **templateId** that can be used to generate documents based on the specified template and **url** to edit template.",source:"@site/docs/API-docs/createtemplate.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/createtemplate",permalink:"/docs/API-docs/createtemplate",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"createtemplate",title:"Create template",description:"The Template Creation API allows users to create customizable templates, which serve as blueprints for generating documents with predefined structures. Upon successful template creation, the API returns a unique **templateId** that can be used to generate documents based on the specified template and **url** to edit template.",sidebar_label:"Create template",hide_title:!0,hide_table_of_contents:!0,api:"eJztVk1v20YQ/SvbOTUCJcpJeuGprhsERoPYgBT0IBvGkhyJE5O7692hZMXgfy9mKSq0rRY55NiTyPnYmXnz9lFPwHoTIFvBEhtXa8YAtwmUGApPjskayGBZoRrc6sKjFrs6v75Uuq7tLqg2oA+KrSrEiapoA9uGvum8RsXDwYnaVVRUKqDfotJB5XWLzpPhoNbWqw0a9JrJbFRpi7ZBceyIK+U8lrgmg6UK7NuCW49hpr44a1RoiwJDWLf1sVLfBlmTKK4wNuqRW2+C0qo19NCimkyG6MtyMlFcaVaFNipHmaaUYQ794KibXIvPmnhucFjQmiR4KKxNqSaT1tdypFVYEh+dM0jAujihNZclZNCjNfghAY8PLQb+w5Z7yJ6gsIbRsDw2bc3ktOd0bX0zLTVrMYeiwiY+8d4hZGDzr1gwJOC81GLCIN411TiKCuzJbCABOUwzZJCT0X4PXQJL4lOxXQJ/jklxwv/Z8unEBW0M+jDyae/1HhIgxiacyOm6BLhv5AVKd7mAEwMELfJYQsa+xWgIzprQj/x2PpefF0x+xhCh05E99f4XSMaQa+dqKuK20q+hn/lH8e7NsuRjpGmbHL3A0fr61C7wUTcuTlwxu5Cl6cHS+npW2AbGoJCpyeDdMPHd2/n87r3A0iXwfv7b68kvzVbXVMbLsLT3aH7itOi99f890rg89+Wl1ccmQmF00w8Vg6Ifng07tvdDNsiVlUvkbIgdaa4gg/TVnYpqI+RbPfXIH+ENrDdkNlPt3Mw6NIE2ptZ5ELBT7SjdnkF3KycUrSfeLwSOfuLHqXY07RsasdrRXyi0PswzjkqAZA0V6lJY0Mn72sbkw5RXDo3clIjR9gxeqzAFRSG6B0XqlVjE80X2c6USp9jfzc4G1epXPVM35sYsbBNVTzS0JnMfshszVaur9ZoK0rX6G/NAjLe/DsjtdrtXiL2JOR+JqzZXHp39Hr6JxgjrOOv48gYSYPRNuFov0G+pGC7Bv5RKY3B6ILAuIoGx0STbPZh+f5kkhKqpQBNwRLnzj9ef1LvZHJIROX6g5fTT5cWHz4sPcqrQq1/R2Ww+m4tJSNloMyp00X8ZR8Qsn8vp8S7+/7n9aZ/bw71kfOTU1ZrMSH57wVi9/AjfJlCJomQreHqS+l983XVifmjR7yFb3Saw1Z4EbHnrkuFSi8Lc416W3e9yupT6El630sepj3iXDEnnRYGOR+GvJFnE6Kh711eLJSSQH/4rNLaUHDk4npt8f5Qmu+4fPNZ7XA==",sidebar_class_name:"post api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Get document list by doctype",permalink:"/docs/API-docs/getdocumentlist"},next:{title:"Get template by ID",permalink:"/docs/API-docs/get-template"}},j={},b=[{value:"Request",id:"request",level:2}];function g(e){const s={h2:"h2",p:"p",strong:"strong",...(0,l.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h1",{className:"openapi__heading",children:(0,t.jsx)(s.p,{children:"Create template"})}),"\n",(0,t.jsx)(n(),{method:"post",path:"/createtemplate"}),"\n",(0,t.jsxs)(s.p,{children:["The Template Creation API allows users to create customizable templates, which serve as blueprints for generating documents with predefined structures. Upon successful template creation, the API returns a unique ",(0,t.jsx)(s.strong,{children:"templateId"})," that can be used to generate documents based on the specified template and ",(0,t.jsx)(s.strong,{children:"url"})," to edit template."]}),"\n",(0,t.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,t.jsx)(c.Z,{className:"openapi-tabs__mime",children:(0,t.jsx)(o.default,{label:"multipart/form-data",value:"multipart/form-data-schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,t.jsxs)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:[(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,t.jsx)(s.p,{children:"Body"})}),(0,t.jsx)("strong",{className:"openapi-schema__required",children:(0,t.jsx)(s.p,{children:"required"})})]}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(d.Z,{collapsible:!1,name:"file",required:!1,schemaName:"binary",qualifierMessage:void 0,schema:{type:"string",format:"binary"}}),(0,t.jsx)(d.Z,{collapsible:!1,name:"Title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(d.Z,{collapsible:!1,name:"Description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(d.Z,{collapsible:!1,name:"Note",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,t.jsx)(d.Z,{collapsible:!1,name:"Signers",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string"}}})]})]})})}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsxs)(r.Z,{children:[(0,t.jsxs)(o.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Template created successfully!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(o.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(o.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(d.Z,{collapsible:!1,name:"objectId",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,t.jsx)(d.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"https://exampleurl.com"}})]})]})}),(0,t.jsx)(o.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p.Z,{responseExample:'{\n  "objectId": 0,\n  "url": "https://exampleurl.com"\n}',language:"json"})})]})})})})]}),(0,t.jsxs)(o.default,{label:"405",value:"405",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Invalid API Token!"})}),(0,t.jsx)("div",{children:(0,t.jsx)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(o.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,t.jsx)(o.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,t.jsx)(d.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,t.jsx)(o.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(p.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function x(e={}){const{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}}}]);