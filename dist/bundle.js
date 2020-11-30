(()=>{"use strict";var t,e=function(){return(e=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},n=function(){function t(t,e,n,s){var i=this;this.id=t,this.subject=e,this.students=n,this.teacher=s,this.teacher.subjects.push(this.subject),this.students.forEach((function(t){t.courses.push(i),console.log(i),console.log(t)}))}return t.prototype.removeStudent=function(t){this.students=this.students.filter((function(e){return e.id!==t}))},t.prototype.getStudent=function(t){var e=this.students.find((function(e){return e.id===t}));return e&&e},t.prototype.updateStudent=function(t){if(!this.getStudent(t.id))throw new Error("no user found with id "+t.id);this.students=this.students.map((function(n){return n.id===t.id?e(e({},n),{firstName:t.firstName?t.firstName:n.firstName,lastName:t.lastName?t.lastName:n.lastName}):n}))},t.prototype.addStudent=function(t){this.students.push(t),t.courses.push(this)},t}(),s=function(t,e,n){this.id=t,this.firstName=e,this.lastName=n},i=(t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)},function(e,n){function s(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}),r=function(t){function e(e,n,s,i){var r=t.call(this,e,n,s)||this;return r.subjects=i,r}return i(e,t),e}(s),o=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function s(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),u=function(t){function e(e,n,s,i){var r=t.call(this,e,n,s)||this;return r.courses=i,r}return o(e,t),e}(s),a=function(){function t(t,e,n){this.students=t,this.courses=e,this.teachers=n,this.main=this.getElement("#root"),this.wrapper=this.createElement("div","wrapper"),this.title=this.createElement("h1","main-title"),this.title.textContent="WesCoast",this.showDataButton=this.createElement("button","show-data-btn"),this.showDataButton.textContent="show data",this.coursesList=this.createElement("ul","courses-list"),this.studentList=this.createElement("ul","students-list"),this.teachersList=this.createElement("ul","teachers-list"),this.coursesList.classList.add("hide"),this.teachersList.classList.add("hide"),this.studentList.classList.add("hide"),this.wrapper.append(this.title,this.showDataButton,this.coursesList,this.studentList,this.teachersList),this.main.append(this.wrapper)}return t.prototype.createElement=function(t,e){void 0===e&&(e="");var n=document.createElement(t);return e&&n.classList.add(e),n},t.prototype.getElement=function(t){return document.querySelector(t)},t.prototype.renderStudents=function(){return this.students.map((function(t){return'\n        <li class="student">'+t.firstName+"-"+t.lastName+"</li>\n        <p>"+t.firstName+" currently study:</p>\n        "+t.courses.map((function(t){return"<li>"+t.subject+"</li>"})).join("")+"\n      "})).join("")},t.prototype.renderTeachers=function(){return this.teachers.map((function(t){return'\n        <li class="teacher">'+t.firstName+"-"+t.lastName+"</li>\n        <p>"+t.firstName+" main subjects:</p>\n        "+t.subjects.map((function(t){return'<li class="subject">'+t+"</li> "})).join("")+"\n      "})).join("")},t.prototype.renderCourses=function(){return this.courses.map((function(t){return"\n        <p>Students that study "+t.subject+"</p>\n        "+t.students.map((function(t){return"<li>"+t.firstName+"- "+t.lastName+" </li>"})).join("")+"\n      "})).join("")},t.prototype.render=function(){var t,e=this;this.studentList.innerHTML='\n      <li class="title"> <strong> Student List </strong> </li>\n      '+this.renderStudents()+"\n    ",this.teachersList.innerHTML='\n    <li class="title"> <strong>Teachers List</strong> </li>\n      '+this.renderTeachers()+"\n    ",this.coursesList.innerHTML='\n    <li class="title course-title"> <button>Courses List</button> </li>\n    ',this.showDataButton.addEventListener("click",(function(){e.studentList.classList.toggle("show"),e.coursesList.classList.toggle("show"),e.teachersList.classList.toggle("show")})),null===(t=this.coursesList.firstElementChild)||void 0===t||t.addEventListener("click",(function(){var t=e.getElement(".modal");t.classList.add("show-modal"),t.innerHTML='\n        <ul class="modal-body">\n          '+e.renderCourses()+'\n          <button id="close-modal">X</button>          \n        </ul>\n      ';var n=e.getElement("#close-modal");null==n||n.addEventListener("click",(function(){t.classList.remove("show-modal")}))}))},t}();let c=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let s=63&n[t];e+=s<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s<63?"_":"-"}return e};(function(){var t=new u(c(),"Mike","Szymkowiak",[]),e=new u(c(),"Jon","Smith",[]),s=new u(c(),"Clara","Sten",[]),i=new u(c(),"Kim","Kallstrom",[]),o=new u(c(),"Stina","Turner",[]),l=new r(c(),"Boris","Einstein",[]),d=new r(c(),"Linda","Smith",[]),h=new r(c(),"Mia","Jonson",[]),p=new n(c(),"math",[],l),f=new n(c(),"english",[],d),m=new n(c(),"swedish",[],h),w=new n(c(),"history",[],l);p.addStudent(t),p.addStudent(e),f.addStudent(s),f.addStudent(o),w.addStudent(t),w.addStudent(o),m.addStudent(i),m.addStudent(o);var y=[t,e,s,i,o],L=[l,d,h],S=[p,f,m,w];return{init:function(){new a(y,S,L).render()}}})().init()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9zY2hvb2wvZGF0YS9Db3Vyc2UudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvc2Nob29sL2RhdGEvUGVyc29uLnRzIiwid2VicGFjazovL3NjaG9vbC1kYXRhLy4vc3JjL3NjaG9vbC9kYXRhL1RlYWNoZXIudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvc2Nob29sL2RhdGEvU3R1ZGVudC50cyIsIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9zY2hvb2wvdmlldy9WaWV3LnRzIiwid2VicGFjazovL3NjaG9vbC1kYXRhLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5wcm9kLmpzIiwid2VicGFjazovL3NjaG9vbC1kYXRhLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImlkIiwic3ViamVjdCIsInN0dWRlbnRzIiwidGVhY2hlciIsInRoaXMiLCJzdWJqZWN0cyIsInB1c2giLCJmb3JFYWNoIiwic3R1ZGVudCIsImNvdXJzZXMiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlU3R1ZGVudCIsInN0dWRlbnRJRCIsImZpbHRlciIsImdldFN0dWRlbnQiLCJmaW5kIiwidXBkYXRlU3R1ZGVudCIsImlucHV0IiwiRXJyb3IiLCJtYXAiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFkZFN0dWRlbnQiLCJQZXJzb24iLCJ0ZWFjaGVycyIsIm1haW4iLCJnZXRFbGVtZW50Iiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsInRleHRDb250ZW50Iiwic2hvd0RhdGFCdXR0b24iLCJjb3Vyc2VzTGlzdCIsInN0dWRlbnRMaXN0IiwidGVhY2hlcnNMaXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwidGFnIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImRvY3VtZW50Iiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyU3R1ZGVudHMiLCJjb3Vyc2UiLCJqb2luIiwicmVuZGVyVGVhY2hlcnMiLCJyZW5kZXJDb3Vyc2VzIiwicmVuZGVyIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImZpcnN0RWxlbWVudENoaWxkIiwibW9kYWwiLCJjbG9zZUJ0biIsInJlbW92ZSIsIm5hbm9pZCIsInNpemUiLCJieXRlcyIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJieXRlIiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsIm1pa2UiLCJTdHVkZW50Iiwiam9uIiwiY2xhcmEiLCJraW0iLCJzdGluYSIsImJvcmlzIiwiVGVhY2hlciIsImxpbmRhIiwibWlhIiwibWF0aCIsIkNvdXJzZSIsImVuZ2xpc2giLCJzd2VkaXNoIiwiaGlzdG9yeSIsImluaXQiLCJWaWV3IiwiY29udHJvbGxlciJdLCJtYXBwaW5ncyI6IndPQUtBLGFBS0UsV0FBWUEsRUFBWUMsRUFBa0JDLEVBQXFCQyxHQUEvRCxXQUNFQyxLQUFLSixHQUFLQSxFQUNWSSxLQUFLSCxRQUFVQSxFQUNmRyxLQUFLRixTQUFXQSxFQUNoQkUsS0FBS0QsUUFBVUEsRUFFZkMsS0FBS0QsUUFBUUUsU0FBU0MsS0FBS0YsS0FBS0gsU0FDaENHLEtBQUtGLFNBQVNLLFNBQVEsU0FBQUMsR0FDcEJBLEVBQVFDLFFBQVFILEtBQUssR0FDckJJLFFBQVFDLElBQUksR0FDWkQsUUFBUUMsSUFBSUgsTUErQmxCLE9BM0JFLFlBQUFJLGNBQUEsU0FBY0MsR0FDWlQsS0FBS0YsU0FBV0UsS0FBS0YsU0FBU1ksUUFBTyxTQUFBTixHQUFXLE9BQUFBLEVBQVFSLEtBQU9hLE1BRWpFLFlBQUFFLFdBQUEsU0FBV0YsR0FDVCxJQUFNTCxFQUFVSixLQUFLRixTQUFTYyxNQUFLLFNBQUFSLEdBQVcsT0FBQUEsRUFBUVIsS0FBT2EsS0FDN0QsT0FBT0wsR0FBV0EsR0FHcEIsWUFBQVMsY0FBQSxTQUFjQyxHQUVaLElBRHdCZCxLQUFLVyxXQUFXRyxFQUFNbEIsSUFFNUMsTUFBTSxJ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LFdBQ0QsSUFBSUMsRUFBS2pGLEVBQVVPLEVBQVNnQixHQUNwQ3lCLFlBT05rQyxHQUFhRixRIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIlxuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gXCIuL1RlYWNoZXJcIlxuaW1wb3J0IHsgU3R1ZGVudCB9IGZyb20gXCIuL1N0dWRlbnRcIlxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCIuL1R5cGVzXCJcblxuZXhwb3J0IGNsYXNzIENvdXJzZSB7XG4gIGlkOiBzdHJpbmdcbiAgc3ViamVjdDogU3ViamVjdFxuICBzdHVkZW50czogU3R1ZGVudFtdXG4gIHRlYWNoZXI6IFRlYWNoZXJcbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgc3ViamVjdDogU3ViamVjdCwgc3R1ZGVudHM6IFN0dWRlbnRbXSwgdGVhY2hlcjogVGVhY2hlcikge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuc3ViamVjdCA9IHN1YmplY3RcbiAgICB0aGlzLnN0dWRlbnRzID0gc3R1ZGVudHNcbiAgICB0aGlzLnRlYWNoZXIgPSB0ZWFjaGVyXG5cbiAgICB0aGlzLnRlYWNoZXIuc3ViamVjdHMucHVzaCh0aGlzLnN1YmplY3QpXG4gICAgdGhpcy5zdHVkZW50cy5mb3JFYWNoKHN0dWRlbnQgPT4ge1xuICAgICAgc3R1ZGVudC5jb3Vyc2VzLnB1c2godGhpcylcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgICBjb25zb2xlLmxvZyhzdHVkZW50KVxuICAgIH0pXG4gIH1cblxuICByZW1vdmVTdHVkZW50KHN0dWRlbnRJRDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdHVkZW50cyA9IHRoaXMuc3R1ZGVudHMuZmlsdGVyKHN0dWRlbnQgPT4gc3R1ZGVudC5pZCAhPT0gc3R1ZGVudElEKVxuICB9XG4gIGdldFN0dWRlbnQoc3R1ZGVudElEOiBzdHJpbmcpOiBTdHVkZW50IHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBzdHVkZW50ID0gdGhpcy5zdHVkZW50cy5maW5kKHN0dWRlbnQgPT4gc3R1ZGVudC5pZCA9PT0gc3R1ZGVudElEKVxuICAgIHJldHVybiBzdHVkZW50ICYmIHN0dWRlbnRcbiAgfVxuXG4gIHVwZGF0ZVN0dWRlbnQoaW5wdXQ6IFN0dWRlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBzdHVkZW50VG9VcGRhdGUgPSB0aGlzLmdldFN0dWRlbnQoaW5wdXQuaWQpXG4gICAgaWYgKCFzdHVkZW50VG9VcGRhdGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgbm8gdXNlciBmb3VuZCB3aXRoIGlkICR7aW5wdXQuaWR9YClcbiAgICB9XG4gICAgdGhpcy5zdHVkZW50cyA9IHRoaXMuc3R1ZGVudHMubWFwKHN0dWRlbnQgPT5cbiAgICAgIHN0dWRlbnQuaWQgPT09IGlucHV0LmlkXG4gICAgICAgID8ge1xuICAgICAgICAgICAgLi4uc3R1ZGVudCxcbiAgICAgICAgICAgIGZpcnN0TmFtZTogaW5wdXQuZmlyc3ROYW1lID8gaW5wdXQuZmlyc3ROYW1lIDogc3R1ZGVudC5maXJzdE5hbWUsXG4gICAgICAgICAgICBsYXN0TmFtZTogaW5wdXQubGFzdE5hbWUgPyBpbnB1dC5sYXN0TmFtZSA6IHN0dWRlbnQubGFzdE5hbWUsXG4gICAgICAgICAgfVxuICAgICAgICA6IHN0dWRlbnRcbiAgICApXG4gIH1cbiAgYWRkU3R1ZGVudChzdHVkZW50OiBTdHVkZW50KSB7XG4gICAgdGhpcy5zdHVkZW50cy5wdXNoKHN0dWRlbnQpXG4gICAgc3R1ZGVudC5jb3Vyc2VzLnB1c2godGhpcylcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFBlcnNvbiB7XG4gIGlkOiBzdHJpbmdcbiAgZmlyc3ROYW1lOiBzdHJpbmdcbiAgbGFzdE5hbWU6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pZCA9IGlkXG4gICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWVcbiAgICB0aGlzLmxhc3ROYW1lID0gbGFzdE5hbWVcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4vUGVyc29uXCJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9UeXBlc1wiXG5cbmV4cG9ydCBjbGFzcyBUZWFjaGVyIGV4dGVuZHMgUGVyc29uIHtcbiAgc3ViamVjdHM6IFN1YmplY3RbXVxuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBzdWJqZWN0czogU3ViamVjdFtdKSB7XG4gICAgc3VwZXIoaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUpXG4gICAgdGhpcy5zdWJqZWN0cyA9IHN1YmplY3RzXG4gIH1cbn1cbiIsImltcG9ydCB7IENvdXJzZSB9IGZyb20gXCIuL0NvdXJzZVwiXG5pbXBvcnQgeyBQZXJzb24gfSBmcm9tIFwiLi9QZXJzb25cIlxuXG5leHBvcnQgY2xhc3MgU3R1ZGVudCBleHRlbmRzIFBlcnNvbiB7XG4gIGNvdXJzZXM6IENvdXJzZVtdXG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcsIGNvdXJzZXM6IENvdXJzZVtdKSB7XG4gICAgc3VwZXIoaWQsIGZpcnN0TmFtZSwgbGFzdE5hbWUpXG4gICAgdGhpcy5jb3Vyc2VzID0gY291cnNlc1xuICB9XG59XG4iLCJpbXBvcnQgeyBTdHVkZW50IH0gZnJvbSBcIi4uL2RhdGEvU3R1ZGVudFwiXG5pbXBvcnQgeyBDb3Vyc2UgfSBmcm9tIFwiLi4vZGF0YS9Db3Vyc2VcIlxuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gXCIuLi9kYXRhL1RlYWNoZXJcIlxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gXCIuLi9kYXRhL1R5cGVzXCJcblxuZXhwb3J0IGNsYXNzIFZpZXcge1xuICBtYWluOiBIVE1MRGl2RWxlbWVudFxuICB3cmFwcGVyOiBIVE1MRGl2RWxlbWVudFxuICB0aXRsZTogSFRNTEhlYWRFbGVtZW50XG5cbiAgc2hvd0RhdGFCdXR0b246IEhUTUxCdXR0b25FbGVtZW50XG4gIHN0dWRlbnRzOiBTdHVkZW50W11cbiAgY291cnNlczogQ291cnNlW11cbiAgdGVhY2hlcnM6IFRlYWNoZXJbXVxuICBzdHVkZW50TGlzdDogSFRNTFVMaXN0RWxlbWVudFxuICB0ZWFjaGVyc0xpc3Q6IEhUTUxVTGlzdEVsZW1lbnRcbiAgY291cnNlc0xpc3Q6IEhUTUxVTGlzdEVsZW1lbnRcblxuICBjb25zdHJ1Y3RvcihzdHVkZW50czogU3R1ZGVudFtdLCBjb3Vyc2VzOiBDb3Vyc2VbXSwgdGVhY2hlcnM6IFRlYWNoZXJbXSkge1xuICAgIHRoaXMuc3R1ZGVudHMgPSBzdHVkZW50c1xuICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZXNcbiAgICB0aGlzLnRlYWNoZXJzID0gdGVhY2hlcnNcblxuICAgIHRoaXMubWFpbiA9IHRoaXMuZ2V0RWxlbWVudChcIiNyb290XCIpIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgdGhpcy53cmFwcGVyID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwid3JhcHBlclwiKSBhcyBIVE1MRGl2RWxlbWVudFxuXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuY3JlYXRlRWxlbWVudChcImgxXCIsIFwibWFpbi10aXRsZVwiKSBhcyBIVE1MSGVhZEVsZW1lbnRcbiAgICB0aGlzLnRpdGxlLnRleHRDb250ZW50ID0gXCJXZXNDb2FzdFwiXG5cbiAgICB0aGlzLnNob3dEYXRhQnV0dG9uID0gdGhpcy5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFwic2hvdy1kYXRhLWJ0blwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudFxuICAgIHRoaXMuc2hvd0RhdGFCdXR0b24udGV4dENvbnRlbnQgPSBcInNob3cgZGF0YVwiXG5cbiAgICB0aGlzLmNvdXJzZXNMaXN0ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwidWxcIiwgXCJjb3Vyc2VzLWxpc3RcIikgYXMgSFRNTFVMaXN0RWxlbWVudFxuICAgIHRoaXMuc3R1ZGVudExpc3QgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCBcInN0dWRlbnRzLWxpc3RcIikgYXMgSFRNTFVMaXN0RWxlbWVudFxuICAgIHRoaXMudGVhY2hlcnNMaXN0ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwidWxcIiwgXCJ0ZWFjaGVycy1saXN0XCIpIGFzIEhUTUxVTGlzdEVsZW1lbnRcbiAgICB0aGlzLmNvdXJzZXNMaXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgdGhpcy50ZWFjaGVyc0xpc3QuY2xhc3NMaXN0LmFkZChcImhpZGVcIilcbiAgICB0aGlzLnN0dWRlbnRMaXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG5cbiAgICB0aGlzLndyYXBwZXIuYXBwZW5kKFxuICAgICAgdGhpcy50aXRsZSxcbiAgICAgIHRoaXMuc2hvd0RhdGFCdXR0b24sXG4gICAgICB0aGlzLmNvdXJzZXNMaXN0LFxuICAgICAgdGhpcy5zdHVkZW50TGlzdCxcbiAgICAgIHRoaXMudGVhY2hlcnNMaXN0XG4gICAgKVxuXG4gICAgdGhpcy5tYWluLmFwcGVuZCh0aGlzLndyYXBwZXIpXG4gIH1cblxuICBjcmVhdGVFbGVtZW50KHRhZzogc3RyaW5nLCBjbGFzc05hbWU6IHN0cmluZyA9IFwiXCIpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG4gICAgaWYgKGNsYXNzTmFtZSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBnZXRFbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcilcblxuICAgIHJldHVybiBlbGVtZW50XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclN0dWRlbnRzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3R1ZGVudHNcbiAgICAgIC5tYXAoXG4gICAgICAgIHN0dWRlbnQgPT5cbiAgICAgICAgICBgXG4gICAgICAgIDxsaSBjbGFzcz1cInN0dWRlbnRcIj4ke3N0dWRlbnQuZmlyc3ROYW1lfS0ke3N0dWRlbnQubGFzdE5hbWV9PC9saT5cbiAgICAgICAgPHA+JHtzdHVkZW50LmZpcnN0TmFtZX0gY3VycmVudGx5IHN0dWR5OjwvcD5cbiAgICAgICAgJHtzdHVkZW50LmNvdXJzZXMubWFwKChjb3Vyc2U6IENvdXJzZSkgPT4gYDxsaT4ke2NvdXJzZS5zdWJqZWN0fTwvbGk+YCkuam9pbihcIlwiKX1cbiAgICAgIGBcbiAgICAgIClcbiAgICAgIC5qb2luKFwiXCIpXG4gIH1cbiAgcHJpdmF0ZSByZW5kZXJUZWFjaGVycygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnRlYWNoZXJzXG4gICAgICAubWFwKFxuICAgICAgICB0ZWFjaGVyID0+XG4gICAgICAgICAgYFxuICAgICAgICA8bGkgY2xhc3M9XCJ0ZWFjaGVyXCI+JHt0ZWFjaGVyLmZpcnN0TmFtZX0tJHt0ZWFjaGVyLmxhc3ROYW1lfTwvbGk+XG4gICAgICAgIDxwPiR7dGVhY2hlci5maXJzdE5hbWV9IG1haW4gc3ViamVjdHM6PC9wPlxuICAgICAgICAke3RlYWNoZXIuc3ViamVjdHNcbiAgICAgICAgICAubWFwKChzdWJqZWN0OiBTdWJqZWN0KSA9PiBgPGxpIGNsYXNzPVwic3ViamVjdFwiPiR7c3ViamVjdH08L2xpPiBgKVxuICAgICAgICAgIC5qb2luKFwiXCIpfVxuICAgICAgYFxuICAgICAgKVxuICAgICAgLmpvaW4oXCJcIilcbiAgfVxuICBwcml2YXRlIHJlbmRlckNvdXJzZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb3Vyc2VzXG4gICAgICAubWFwKFxuICAgICAgICBjb3Vyc2UgPT5cbiAgICAgICAgICBgXG4gICAgICAgIDxwPlN0dWRlbnRzIHRoYXQgc3R1ZHkgJHtjb3Vyc2Uuc3ViamVjdH08L3A+XG4gICAgICAgICR7Y291cnNlLnN0dWRlbnRzXG4gICAgICAgICAgLm1hcCgoc3R1ZGVudDogU3R1ZGVudCkgPT4gYDxsaT4ke3N0dWRlbnQuZmlyc3ROYW1lfS0gJHtzdHVkZW50Lmxhc3ROYW1lfSA8L2xpPmApXG4gICAgICAgICAgLmpvaW4oXCJcIil9XG4gICAgICBgXG4gICAgICApXG4gICAgICAuam9pbihcIlwiKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuc3R1ZGVudExpc3QuaW5uZXJIVE1MID0gYFxuICAgICAgPGxpIGNsYXNzPVwidGl0bGVcIj4gPHN0cm9uZz4gU3R1ZGVudCBMaXN0IDwvc3Ryb25nPiA8L2xpPlxuICAgICAgJHt0aGlzLnJlbmRlclN0dWRlbnRzKCl9XG4gICAgYFxuXG4gICAgdGhpcy50ZWFjaGVyc0xpc3QuaW5uZXJIVE1MID0gYFxuICAgIDxsaSBjbGFzcz1cInRpdGxlXCI+IDxzdHJvbmc+VGVhY2hlcnMgTGlzdDwvc3Ryb25nPiA8L2xpPlxuICAgICAgJHt0aGlzLnJlbmRlclRlYWNoZXJzKCl9XG4gICAgYFxuICAgIHRoaXMuY291cnNlc0xpc3QuaW5uZXJIVE1MID0gYFxuICAgIDxsaSBjbGFzcz1cInRpdGxlIGNvdXJzZS10aXRsZVwiPiA8YnV0dG9uPkNvdXJzZXMgTGlzdDwvYnV0dG9uPiA8L2xpPlxuICAgIGBcbiAgICB0aGlzLnNob3dEYXRhQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnN0dWRlbnRMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpXG4gICAgICB0aGlzLmNvdXJzZXNMaXN0LmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpXG4gICAgICB0aGlzLnRlYWNoZXJzTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKVxuICAgIH0pXG5cbiAgICB0aGlzLmNvdXJzZXNMaXN0LmZpcnN0RWxlbWVudENoaWxkPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSB0aGlzLmdldEVsZW1lbnQoXCIubW9kYWxcIikgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJzaG93LW1vZGFsXCIpXG5cbiAgICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICAgICAgPHVsIGNsYXNzPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICR7dGhpcy5yZW5kZXJDb3Vyc2VzKCl9XG4gICAgICAgICAgPGJ1dHRvbiBpZD1cImNsb3NlLW1vZGFsXCI+WDwvYnV0dG9uPiAgICAgICAgICBcbiAgICAgICAgPC91bD5cbiAgICAgIGBcblxuICAgICAgY29uc3QgY2xvc2VCdG4gPSB0aGlzLmdldEVsZW1lbnQoXCIjY2xvc2UtbW9kYWxcIilcbiAgICAgIGNsb3NlQnRuPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvdy1tb2RhbFwiKVxuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG4iLCIvLyBUaGlzIGZpbGUgcmVwbGFjZXMgYGluZGV4LmpzYCBpbiBidW5kbGVycyBsaWtlIHdlYnBhY2sgb3IgUm9sbHVwLFxuLy8gYWNjb3JkaW5nIHRvIGBicm93c2VyYCBjb25maWcgaW4gYHBhY2thZ2UuanNvbmAuXG5cbmltcG9ydCB7IHVybEFscGhhYmV0IH0gZnJvbSAnLi91cmwtYWxwaGFiZXQvaW5kZXguanMnXG5cbmlmIChmYWxzZSkge1xuICAvLyBBbGwgYnVuZGxlcnMgd2lsbCByZW1vdmUgdGhpcyBibG9jayBpbiB0aGUgcHJvZHVjdGlvbiBidW5kbGUuXG4gIGlmIChcbiAgICB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnICYmXG4gICAgdHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCdcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1JlYWN0IE5hdGl2ZSBkb2VzIG5vdCBoYXZlIGEgYnVpbHQtaW4gc2VjdXJlIHJhbmRvbSBnZW5lcmF0b3IuICcgK1xuICAgICAgICAnSWYgeW91IGRvbuKAmXQgbmVlZCB1bnByZWRpY3RhYmxlIElEcyB1c2UgYG5hbm9pZC9ub24tc2VjdXJlYC4gJyArXG4gICAgICAgICdGb3Igc2VjdXJlIElEcywgaW1wb3J0IGByZWFjdC1uYXRpdmUtZ2V0LXJhbmRvbS12YWx1ZXNgICcgK1xuICAgICAgICAnYmVmb3JlIE5hbm8gSUQuIElmIHlvdSB1c2UgRXhwbywgaW5zdGFsbCBgZXhwby1yYW5kb21gICcgK1xuICAgICAgICAnYW5kIHVzZSBgbmFub2lkL2FzeW5jYC4nXG4gICAgKVxuICB9XG4gIGlmICh0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ0ltcG9ydCBmaWxlIHdpdGggYGlmICghd2luZG93LmNyeXB0bykgd2luZG93LmNyeXB0byA9IHdpbmRvdy5tc0NyeXB0b2AnICtcbiAgICAgICAgJyBiZWZvcmUgaW1wb3J0aW5nIE5hbm8gSUQgdG8gZml4IElFIDExIHN1cHBvcnQnXG4gICAgKVxuICB9XG4gIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJykge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdZb3VyIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBzZWN1cmUgcmFuZG9tIGdlbmVyYXRvci4gJyArXG4gICAgICAgICdJZiB5b3UgZG9u4oCZdCBuZWVkIHVucHJlZGljdGFibGUgSURzLCB5b3UgY2FuIHVzZSBuYW5vaWQvbm9uLXNlY3VyZS4nXG4gICAgKVxuICB9XG59XG5cbmxldCByYW5kb20gPSBieXRlcyA9PiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KGJ5dGVzKSlcblxubGV0IGN1c3RvbVJhbmRvbSA9IChhbHBoYWJldCwgc2l6ZSwgZ2V0UmFuZG9tKSA9PiB7XG4gIC8vIEZpcnN0LCBhIGJpdG1hc2sgaXMgbmVjZXNzYXJ5IHRvIGdlbmVyYXRlIHRoZSBJRC4gVGhlIGJpdG1hc2sgbWFrZXMgYnl0ZXNcbiAgLy8gdmFsdWVzIGNsb3NlciB0byB0aGUgYWxwaGFiZXQgc2l6ZS4gVGhlIGJpdG1hc2sgY2FsY3VsYXRlcyB0aGUgY2xvc2VzdFxuICAvLyBgMl4zMSAtIDFgIG51bWJlciwgd2hpY2ggZXhjZWVkcyB0aGUgYWxwaGFiZXQgc2l6ZS5cbiAgLy8gRm9yIGV4YW1wbGUsIHRoZSBiaXRtYXNrIGZvciB0aGUgYWxwaGFiZXQgc2l6ZSAzMCBpcyAzMSAoMDAwMTExMTEpLlxuICAvLyBgTWF0aC5jbHozMmAgaXMgbm90IHVzZWQsIGJlY2F1c2UgaXQgaXMgbm90IGF2YWlsYWJsZSBpbiBicm93c2Vycy5cbiAgbGV0IG1hc2sgPSAoMiA8PCAoTWF0aC5sb2coYWxwaGFiZXQubGVuZ3RoIC0gMSkgLyBNYXRoLkxOMikpIC0gMVxuICAvLyBUaG91Z2gsIHRoZSBiaXRtYXNrIHNvbHV0aW9uIGlzIG5vdCBwZXJmZWN0IHNpbmNlIHRoZSBieXRlcyBleGNlZWRpbmdcbiAgLy8gdGhlIGFscGhhYmV0IHNpemUgYXJlIHJlZnVzZWQuIFRoZXJlZm9yZSwgdG8gcmVsaWFibHkgZ2VuZXJhdGUgdGhlIElELFxuICAvLyB0aGUgcmFuZG9tIGJ5dGVzIHJlZHVuZGFuY3kgaGFzIHRvIGJlIHNhdGlzZmllZC5cblxuICAvLyBOb3RlOiBldmVyeSBoYXJkd2FyZSByYW5kb20gZ2VuZXJhdG9yIGNhbGwgaXMgcGVyZm9ybWFuY2UgZXhwZW5zaXZlLFxuICAvLyBiZWNhdXNlIHRoZSBzeXN0ZW0gY2FsbCBmb3IgZW50cm9weSBjb2xsZWN0aW9uIHRha2VzIGEgbG90IG9mIHRpbWUuXG4gIC8vIFNvLCB0byBhdm9pZCBhZGRpdGlvbmFsIHN5c3RlbSBjYWxscywgZXh0cmEgYnl0ZXMgYXJlIHJlcXVlc3RlZCBpbiBhZHZhbmNlLlxuXG4gIC8vIE5leHQsIGEgc3RlcCBkZXRlcm1pbmVzIGhvdyBtYW55IHJhbmRvbSBieXRlcyB0byBnZW5lcmF0ZS5cbiAgLy8gVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgZ2V0cyBkZWNpZGVkIHVwb24gdGhlIElEIHNpemUsIG1hc2ssXG4gIC8vIGFscGhhYmV0IHNpemUsIGFuZCBtYWdpYyBudW1iZXIgMS42ICh1c2luZyAxLjYgcGVha3MgYXQgcGVyZm9ybWFuY2VcbiAgLy8gYWNjb3JkaW5nIHRvIGJlbmNobWFya3MpLlxuXG4gIC8vIGAtfmYgPT4gTWF0aC5jZWlsKGYpYCBpZiBmIGlzIGEgZmxvYXRcbiAgLy8gYC1+aSA9PiBpICsgMWAgaWYgaSBpcyBhbiBpbnRlZ2VyXG4gIGxldCBzdGVwID0gLX4oKDEuNiAqIG1hc2sgKiBzaXplKSAvIGFscGhhYmV0Lmxlbmd0aClcblxuICByZXR1cm4gKCkgPT4ge1xuICAgIGxldCBpZCA9ICcnXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGxldCBieXRlcyA9IGdldFJhbmRvbShzdGVwKVxuICAgICAgLy8gQSBjb21wYWN0IGFsdGVybmF0aXZlIGZvciBgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGVwOyBpKyspYC5cbiAgICAgIGxldCBqID0gc3RlcFxuICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAvLyBBZGRpbmcgYHx8ICcnYCByZWZ1c2VzIGEgcmFuZG9tIGJ5dGUgdGhhdCBleGNlZWRzIHRoZSBhbHBoYWJldCBzaXplLlxuICAgICAgICBpZCArPSBhbHBoYWJldFtieXRlc1tqXSAmIG1hc2tdIHx8ICcnXG4gICAgICAgIC8vIGBpZC5sZW5ndGggKyAxID09PSBzaXplYCBpcyBhIG1vcmUgY29tcGFjdCBvcHRpb24uXG4gICAgICAgIGlmIChpZC5sZW5ndGggPT09ICtzaXplKSByZXR1cm4gaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubGV0IGN1c3RvbUFscGhhYmV0ID0gKGFscGhhYmV0LCBzaXplKSA9PiBjdXN0b21SYW5kb20oYWxwaGFiZXQsIHNpemUsIHJhbmRvbSlcblxubGV0IG5hbm9pZCA9IChzaXplID0gMjEpID0+IHtcbiAgbGV0IGlkID0gJydcbiAgbGV0IGJ5dGVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheShzaXplKSlcblxuICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKHZhciBpID0gMDsgaSA8IHN0ZXA7IGkrKylgLlxuICB3aGlsZSAoc2l6ZS0tKSB7XG4gICAgLy8gSXQgaXMgaW5jb3JyZWN0IHRvIHVzZSBieXRlcyBleGNlZWRpbmcgdGhlIGFscGhhYmV0IHNpemUuXG4gICAgLy8gVGhlIGZvbGxvd2luZyBtYXNrIHJlZHVjZXMgdGhlIHJhbmRvbSBieXRlIGluIHRoZSAwLTI1NSB2YWx1ZVxuICAgIC8vIHJhbmdlIHRvIHRoZSAwLTYzIHZhbHVlIHJhbmdlLiBUaGVyZWZvcmUsIGFkZGluZyBoYWNrcywgc3VjaFxuICAgIC8vIGFzIGVtcHR5IHN0cmluZyBmYWxsYmFjayBvciBtYWdpYyBudW1iZXJzLCBpcyB1bm5lY2Nlc3NhcnkgYmVjYXVzZVxuICAgIC8vIHRoZSBiaXRtYXNrIHRyaW1zIGJ5dGVzIGRvd24gdG8gdGhlIGFscGhhYmV0IHNpemUuXG4gICAgbGV0IGJ5dGUgPSBieXRlc1tzaXplXSAmIDYzXG4gICAgaWYgKGJ5dGUgPCAzNikge1xuICAgICAgLy8gYDAtOWEtemBcbiAgICAgIGlkICs9IGJ5dGUudG9TdHJpbmcoMzYpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjIpIHtcbiAgICAgIC8vIGBBLVpgXG4gICAgICBpZCArPSAoYnl0ZSAtIDI2KS50b1N0cmluZygzNikudG9VcHBlckNhc2UoKVxuICAgIH0gZWxzZSBpZiAoYnl0ZSA8IDYzKSB7XG4gICAgICBpZCArPSAnXydcbiAgICB9IGVsc2Uge1xuICAgICAgaWQgKz0gJy0nXG4gICAgfVxuICB9XG4gIHJldHVybiBpZFxufVxuXG5leHBvcnQgeyBuYW5vaWQsIGN1c3RvbUFscGhhYmV0LCBjdXN0b21SYW5kb20sIHVybEFscGhhYmV0LCByYW5kb20gfVxuIiwiaW1wb3J0IHsgQ291cnNlIH0gZnJvbSBcIi4vc2Nob29sL2RhdGEvQ291cnNlXCJcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tIFwiLi9zY2hvb2wvZGF0YS9UZWFjaGVyXCJcbmltcG9ydCB7IFN0dWRlbnQgfSBmcm9tIFwiLi9zY2hvb2wvZGF0YS9TdHVkZW50XCJcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwiLi9zY2hvb2wvdmlldy9WaWV3XCJcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIlxuOygoKSA9PiB7XG4gIGZ1bmN0aW9uIGNvbnRyb2xsZXIoKSB7XG4gICAgY29uc3QgbWlrZSA9IG5ldyBTdHVkZW50KG5hbm9pZCgpLCBcIk1pa2VcIiwgXCJTenlta293aWFrXCIsIFtdKVxuICAgIGNvbnN0IGpvbiA9IG5ldyBTdHVkZW50KG5hbm9pZCgpLCBcIkpvblwiLCBcIlNtaXRoXCIsIFtdKVxuICAgIGNvbnN0IGNsYXJhID0gbmV3IFN0dWRlbnQobmFub2lkKCksIFwiQ2xhcmFcIiwgXCJTdGVuXCIsIFtdKVxuICAgIGNvbnN0IGtpbSA9IG5ldyBTdHVkZW50KG5hbm9pZCgpLCBcIktpbVwiLCBcIkthbGxzdHJvbVwiLCBbXSlcbiAgICBjb25zdCBzdGluYSA9IG5ldyBTdHVkZW50KG5hbm9pZCgpLCBcIlN0aW5hXCIsIFwiVHVybmVyXCIsIFtdKVxuXG4gICAgY29uc3QgYm9yaXMgPSBuZXcgVGVhY2hlcihuYW5vaWQoKSwgXCJCb3Jpc1wiLCBcIkVpbnN0ZWluXCIsIFtdKVxuICAgIGNvbnN0IGxpbmRhID0gbmV3IFRlYWNoZXIobmFub2lkKCksIFwiTGluZGFcIiwgXCJTbWl0aFwiLCBbXSlcbiAgICBjb25zdCBtaWEgPSBuZXcgVGVhY2hlcihuYW5vaWQoKSwgXCJNaWFcIiwgXCJKb25zb25cIiwgW10pXG5cbiAgICBjb25zdCBtYXRoID0gbmV3IENvdXJzZShuYW5vaWQoKSwgXCJtYXRoXCIsIFtdLCBib3JpcylcbiAgICBjb25zdCBlbmdsaXNoID0gbmV3IENvdXJzZShuYW5vaWQoKSwgXCJlbmdsaXNoXCIsIFtdLCBsaW5kYSlcbiAgICBjb25zdCBzd2VkaXNoID0gbmV3IENvdXJzZShuYW5vaWQoKSwgXCJzd2VkaXNoXCIsIFtdLCBtaWEpXG4gICAgY29uc3QgaGlzdG9yeSA9IG5ldyBDb3Vyc2UobmFub2lkKCksIFwiaGlzdG9yeVwiLCBbXSwgYm9yaXMpXG5cbiAgICBtYXRoLmFkZFN0dWRlbnQobWlrZSlcbiAgICBtYXRoLmFkZFN0dWRlbnQoam9uKVxuICAgIGVuZ2xpc2guYWRkU3R1ZGVudChjbGFyYSlcbiAgICBlbmdsaXNoLmFkZFN0dWRlbnQoc3RpbmEpXG4gICAgaGlzdG9yeS5hZGRTdHVkZW50KG1pa2UpXG4gICAgaGlzdG9yeS5hZGRTdHVkZW50KHN0aW5hKVxuICAgIHN3ZWRpc2guYWRkU3R1ZGVudChraW0pXG4gICAgc3dlZGlzaC5hZGRTdHVkZW50KHN0aW5hKVxuXG4gICAgY29uc3Qgc3R1ZGVudHMgPSBbbWlrZSwgam9uLCBjbGFyYSwga2ltLCBzdGluYV1cbiAgICBjb25zdCB0ZWFjaGVycyA9IFtib3JpcywgbGluZGEsIG1pYV1cbiAgICBjb25zdCBjb3Vyc2VzID0gW21hdGgsIGVuZ2xpc2gsIHN3ZWRpc2gsIGhpc3RvcnldXG5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgdiA9IG5ldyBWaWV3KHN0dWRlbnRzLCBjb3Vyc2VzLCB0ZWFjaGVycylcbiAgICAgIHYucmVuZGVyKClcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaW5pdCxcbiAgICB9XG4gIH1cbiAgY29udHJvbGxlcigpLmluaXQoKVxufSkoKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==