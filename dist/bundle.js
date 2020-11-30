(()=>{"use strict";var t,e=function(){return(e=Object.assign||function(t){for(var e,n=1,s=arguments.length;n<s;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},n=function(){function t(t,e,n,s){var i=this;this.id=t,this.subject=e,this.students=n,this.teacher=s,this.teacher.subjects.push(this.subject),this.students.forEach((function(t){t.courses.push(i),console.log(i),console.log(t)}))}return t.prototype.removeStudent=function(t){this.students=this.students.filter((function(e){return e.id!==t}))},t.prototype.getStudent=function(t){var e=this.students.find((function(e){return e.id===t}));return e&&e},t.prototype.updateStudent=function(t){if(!this.getStudent(t.id))throw new Error("no user found with id "+t.id);this.students=this.students.map((function(n){return n.id===t.id?e(e({},n),{firstName:t.firstName?t.firstName:n.firstName,lastName:t.lastName?t.lastName:n.lastName}):n}))},t.prototype.addStudent=function(t){this.students.push(t),t.courses.push(this)},t}(),s=function(t,e,n){this.id=t,this.firstName=e,this.lastName=n},i=(t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)},function(e,n){function s(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}),r=function(t){function e(e,n,s,i){var r=t.call(this,e,n,s)||this;return r.subjects=i,r}return i(e,t),e}(s),o=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function s(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(s.prototype=n.prototype,new s)}}(),u=function(t){function e(e,n,s,i){var r=t.call(this,e,n,s)||this;return r.courses=i,r}return o(e,t),e}(s),a=function(){function t(t,e,n){this.students=t,this.courses=e,this.teachers=n,this.main=this.getElement("#root"),this.wrapper=this.createElement("div","wrapper"),this.title=this.createElement("h1","main-title"),this.title.textContent="WesCoast",this.showDataButton=this.createElement("button","show-data-btn"),this.showDataButton.textContent="show data",this.coursesList=this.createElement("ul","courses-list"),this.studentList=this.createElement("ul","students-list"),this.teachersList=this.createElement("ul","teachers-list"),this.coursesList.classList.add("hide"),this.teachersList.classList.add("hide"),this.studentList.classList.add("hide"),this.wrapper.append(this.title,this.showDataButton,this.coursesList,this.studentList,this.teachersList),this.main.append(this.wrapper)}return t.prototype.createElement=function(t,e){void 0===e&&(e="");var n=document.createElement(t);return e&&n.classList.add(e),n},t.prototype.getElement=function(t){return document.querySelector(t)},t.prototype.renderStudents=function(){return this.students.map((function(t){return'\n        <li class="student">'+t.firstName+"-"+t.lastName+"</li>\n        <p>"+t.firstName+" currently study:</p>\n        "+t.courses.map((function(t){return"<li>"+t.subject+"</li>"})).join("")+"\n      "})).join("")},t.prototype.renderTeachers=function(){return this.teachers.map((function(t){return'\n        <li class="teacher">'+t.firstName+"-"+t.lastName+"</li>\n        <p>"+t.firstName+" main subjects:</p>\n        "+t.subjects.map((function(t){return'<li class="subject">'+t+"</li> "})).join("")+"\n      "})).join("")},t.prototype.renderCourses=function(){return this.courses.map((function(t){return"\n        <p>Students that study "+t.subject+"</p>\n        "+t.students.map((function(t){return"<li>"+t.firstName+"- "+t.lastName+" </li>"})).join("")+"\n      "})).join("")},t.prototype.render=function(){var t,e=this;this.studentList.innerHTML='\n      <li class="title"> <strong> Student List </strong> </li>\n      '+this.renderStudents()+"\n    ",this.teachersList.innerHTML='\n    <li class="title"> <strong>Teachers List</strong> </li>\n      '+this.renderTeachers()+"\n    ",this.coursesList.innerHTML='\n    <li class="title course-title"> <strong>Courses List</strong> </li>\n    ',this.showDataButton.addEventListener("click",(function(){e.studentList.classList.toggle("show"),e.coursesList.classList.toggle("show"),e.teachersList.classList.toggle("show")})),null===(t=this.coursesList.firstElementChild)||void 0===t||t.addEventListener("click",(function(){var t=e.getElement(".modal");t.classList.add("show-modal"),t.innerHTML='\n        <ul class="modal-body">\n          '+e.renderCourses()+'\n          <button id="close-modal">X</button>          \n        </ul>\n      ';var n=e.getElement("#close-modal");null==n||n.addEventListener("click",(function(){t.classList.remove("show-modal")}))})),document.querySelectorAll(".course").forEach((function(t){t.addEventListener("click",(function(t){console.log("course")}))}))},t}();let c=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;){let s=63&n[t];e+=s<36?s.toString(36):s<62?(s-26).toString(36).toUpperCase():s<63?"_":"-"}return e};(function(){var t=new u(c(),"Mike","Szymkowiak",[]),e=new u(c(),"Jon","Smith",[]),s=new u(c(),"Clara","Sten",[]),i=new u(c(),"Kim","Kallstrom",[]),o=new u(c(),"Stina","Turner",[]),l=new r(c(),"Boris","Einstein",[]),d=new r(c(),"Linda","Smith",[]),h=new r(c(),"Mia","Jonson",[]),p=new n(c(),"math",[],l),f=new n(c(),"english",[],d),m=new n(c(),"swedish",[],h),w=new n(c(),"history",[],l);p.addStudent(t),p.addStudent(e),f.addStudent(s),f.addStudent(o),w.addStudent(t),w.addStudent(o),m.addStudent(i),m.addStudent(o);var y=[t,e,s,i,o],L=[l,d,h],g=[p,f,m,w];return{init:function(){new a(y,g,L).render()}}})().init()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9zY2hvb2wvZGF0YS9Db3Vyc2UudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvc2Nob29sL2RhdGEvUGVyc29uLnRzIiwid2VicGFjazovL3NjaG9vbC1kYXRhLy4vc3JjL3NjaG9vbC9kYXRhL1RlYWNoZXIudHMiLCJ3ZWJwYWNrOi8vc2Nob29sLWRhdGEvLi9zcmMvc2Nob29sL2RhdGEvU3R1ZGVudC50cyIsIndlYnBhY2s6Ly9zY2hvb2wtZGF0YS8uL3NyYy9zY2hvb2wvdmlldy9WaWV3LnRzIiwid2VicGFjazovL3NjaG9vbC1kYXRhLy4vbm9kZV9tb2R1bGVzL25hbm9pZC9pbmRleC5wcm9kLmpzIiwid2VicGFjazovL3NjaG9vbC1kYXRhLy4vc3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbImlkIiwic3ViamVjdCIsInN0dWRlbnRzIiwidGVhY2hlciIsInRoaXMiLCJzdWJqZWN0cyIsInB1c2giLCJmb3JFYWNoIiwic3R1ZGVudCIsImNvdXJzZXMiLCJjb25zb2xlIiwibG9nIiwicmVtb3ZlU3R1ZGVudCIsInN0dWRlbnRJRCIsImZpbHRlciIsImdldFN0dWRlbnQiLCJmaW5kIiwidXBkYXRlU3R1ZGVudCIsImlucHV0IiwiRXJyb3IiLCJtYXAiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImFkZFN0dWRlbnQiLCJQZXJzb24iLCJ0ZWFjaGVycyIsIm1haW4iLCJnZXRFbGVtZW50Iiwid3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZSIsInRleHRDb250ZW50Iiwic2hvd0RhdGFCdXR0b24iLCJjb3Vyc2VzTGlzdCIsInN0dWRlbnRMaXN0IiwidGVhY2hlcnNMaXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwidGFnIiwiY2xhc3NOYW1lIiwiZWxlbWVudCIsImRvY3VtZW50Iiwic2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yIiwicmVuZGVyU3R1ZGVudHMiLCJjb3Vyc2UiLCJqb2luIiwicmVuZGVyVGVhY2hlcnMiLCJyZW5kZXJDb3Vyc2VzIiwicmVuZGVyIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImZpcnN0RWxlbWVudENoaWxkIiwibW9kYWwiLCJjbG9zZUJ0biIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlIiwibmFub2lkIiwic2l6ZSIsImJ5dGVzIiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsImJ5dGUiLCJ0b1N0cmluZyIsInRvVXBwZXJDYXNlIiwibWlrZSIsIlN0dWRlbnQiLCJqb24iLCJjbGFyYSIsImtpbSIsInN0aW5hIiwiYm9yaXMiLCJUZWFjaGVyIiwibGluZGEiLCJtaWEiLCJtYXRoIiwiQ291cnNlIiwiZW5nbGlzaCIsInN3ZWRpc2giLCJoaXN0b3J5IiwiaW5pdCIsIlZpZXciLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoid09BS0EsYUFLRSxXQUFZQSxFQUFZQyxFQUFrQkMsRUFBcUJDLEdBQS9ELFdBQ0VDLEtBQUtKLEdBQUtBLEVBQ1ZJLEtBQUtILFFBQVVBLEVBQ2ZHLEtBQUtGLFNBQVdBLEVBQ2hCRSxLQUFLRCxRQUFVQSxFQUVmQyxLQUFLRCxRQUFRRSxTQUFTQyxLQUFLRixLQUFLSCxTQUNoQ0csS0FBS0YsU0FBU0ssU0FBUSxTQUFBQyxHQUNwQkEsRUFBUUMsUUFBUUgsS0FBSyxHQUNyQkksUUFBUUMsSUFBSSxHQUNaRCxRQUFRQyxJQUFJSCxNQStCbEIsT0EzQkUsWUFBQUksY0FBQSxTQUFjQyxHQUNaVCxLQUFLRixTQUFXRSxLQUFLRixTQUFTWSxRQUFPLFNBQUFOLEdBQVcsT0FBQUEsRUFBUVIsS0FBT2EsTUFFakUsWUFBQUUsV0FBQSxTQUFXRixHQUNULElBQU1MLEVBQVVKLEtBQUtGLFNBQVNjLE1BQUssU0FBQVIsR0FBVyxPQUFBQSxFQUFRUixLQUFPYSxLQUM3RCxPQUFPTCxHQUFXQSxHQUdwQixZQUFBUyxjQUFBLFNBQWNDLEdBRVosSUFEd0JkLEtBQUtXLFdB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RUFBTUUsRUFBS0MsRUFBT0MsRUFBS0MsR0FDbkNqRCxFQUFXLENBQUNrRCxFQUFPRSxFQUFPQyxHQUMxQnJFLEVBQVUsQ0FBQ3NFLEVBQU1FLEVBQVNDLEVBQVNDLEdBT3pDLE1BQU8sQ0FDTEMsS0FOVyxXQUNELElBQUlDLEVBQUtuRixFQUFVTyxFQUFTZ0IsR0FDcEN5QixZQU9Ob0MsR0FBYUYsUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwibmFub2lkXCJcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tIFwiLi9UZWFjaGVyXCJcbmltcG9ydCB7IFN0dWRlbnQgfSBmcm9tIFwiLi9TdHVkZW50XCJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi9UeXBlc1wiXG5cbmV4cG9ydCBjbGFzcyBDb3Vyc2Uge1xuICBpZDogc3RyaW5nXG4gIHN1YmplY3Q6IFN1YmplY3RcbiAgc3R1ZGVudHM6IFN0dWRlbnRbXVxuICB0ZWFjaGVyOiBUZWFjaGVyXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHN1YmplY3Q6IFN1YmplY3QsIHN0dWRlbnRzOiBTdHVkZW50W10sIHRlYWNoZXI6IFRlYWNoZXIpIHtcbiAgICB0aGlzLmlkID0gaWRcbiAgICB0aGlzLnN1YmplY3QgPSBzdWJqZWN0XG4gICAgdGhpcy5zdHVkZW50cyA9IHN0dWRlbnRzXG4gICAgdGhpcy50ZWFjaGVyID0gdGVhY2hlclxuXG4gICAgdGhpcy50ZWFjaGVyLnN1YmplY3RzLnB1c2godGhpcy5zdWJqZWN0KVxuICAgIHRoaXMuc3R1ZGVudHMuZm9yRWFjaChzdHVkZW50ID0+IHtcbiAgICAgIHN0dWRlbnQuY291cnNlcy5wdXNoKHRoaXMpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgICAgY29uc29sZS5sb2coc3R1ZGVudClcbiAgICB9KVxuICB9XG5cbiAgcmVtb3ZlU3R1ZGVudChzdHVkZW50SUQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3R1ZGVudHMgPSB0aGlzLnN0dWRlbnRzLmZpbHRlcihzdHVkZW50ID0+IHN0dWRlbnQuaWQgIT09IHN0dWRlbnRJRClcbiAgfVxuICBnZXRTdHVkZW50KHN0dWRlbnRJRDogc3RyaW5nKTogU3R1ZGVudCB8IHVuZGVmaW5lZCB7XG4gICAgY29uc3Qgc3R1ZGVudCA9IHRoaXMuc3R1ZGVudHMuZmluZChzdHVkZW50ID0+IHN0dWRlbnQuaWQgPT09IHN0dWRlbnRJRClcbiAgICByZXR1cm4gc3R1ZGVudCAmJiBzdHVkZW50XG4gIH1cblxuICB1cGRhdGVTdHVkZW50KGlucHV0OiBTdHVkZW50KTogdm9pZCB7XG4gICAgY29uc3Qgc3R1ZGVudFRvVXBkYXRlID0gdGhpcy5nZXRTdHVkZW50KGlucHV0LmlkKVxuICAgIGlmICghc3R1ZGVudFRvVXBkYXRlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYG5vIHVzZXIgZm91bmQgd2l0aCBpZCAke2lucHV0LmlkfWApXG4gICAgfVxuICAgIHRoaXMuc3R1ZGVudHMgPSB0aGlzLnN0dWRlbnRzLm1hcChzdHVkZW50ID0+XG4gICAgICBzdHVkZW50LmlkID09PSBpbnB1dC5pZFxuICAgICAgICA/IHtcbiAgICAgICAgICAgIC4uLnN0dWRlbnQsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IGlucHV0LmZpcnN0TmFtZSA/IGlucHV0LmZpcnN0TmFtZSA6IHN0dWRlbnQuZmlyc3ROYW1lLFxuICAgICAgICAgICAgbGFzdE5hbWU6IGlucHV0Lmxhc3ROYW1lID8gaW5wdXQubGFzdE5hbWUgOiBzdHVkZW50Lmxhc3ROYW1lLFxuICAgICAgICAgIH1cbiAgICAgICAgOiBzdHVkZW50XG4gICAgKVxuICB9XG4gIGFkZFN0dWRlbnQoc3R1ZGVudDogU3R1ZGVudCkge1xuICAgIHRoaXMuc3R1ZGVudHMucHVzaChzdHVkZW50KVxuICAgIHN0dWRlbnQuY291cnNlcy5wdXNoKHRoaXMpXG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBQZXJzb24ge1xuICBpZDogc3RyaW5nXG4gIGZpcnN0TmFtZTogc3RyaW5nXG4gIGxhc3ROYW1lOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZykge1xuICAgIHRoaXMuaWQgPSBpZFxuICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lXG4gICAgdGhpcy5sYXN0TmFtZSA9IGxhc3ROYW1lXG4gIH1cbn1cbiIsImltcG9ydCB7IFBlcnNvbiB9IGZyb20gXCIuL1BlcnNvblwiXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSBcIi4vVHlwZXNcIlxuXG5leHBvcnQgY2xhc3MgVGVhY2hlciBleHRlbmRzIFBlcnNvbiB7XG4gIHN1YmplY3RzOiBTdWJqZWN0W11cblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCBmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZywgc3ViamVjdHM6IFN1YmplY3RbXSkge1xuICAgIHN1cGVyKGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lKVxuICAgIHRoaXMuc3ViamVjdHMgPSBzdWJqZWN0c1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb3Vyc2UgfSBmcm9tIFwiLi9Db3Vyc2VcIlxuaW1wb3J0IHsgUGVyc29uIH0gZnJvbSBcIi4vUGVyc29uXCJcblxuZXhwb3J0IGNsYXNzIFN0dWRlbnQgZXh0ZW5kcyBQZXJzb24ge1xuICBjb3Vyc2VzOiBDb3Vyc2VbXVxuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIGZpcnN0TmFtZTogc3RyaW5nLCBsYXN0TmFtZTogc3RyaW5nLCBjb3Vyc2VzOiBDb3Vyc2VbXSkge1xuICAgIHN1cGVyKGlkLCBmaXJzdE5hbWUsIGxhc3ROYW1lKVxuICAgIHRoaXMuY291cnNlcyA9IGNvdXJzZXNcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3R1ZGVudCB9IGZyb20gXCIuLi9kYXRhL1N0dWRlbnRcIlxuaW1wb3J0IHsgQ291cnNlIH0gZnJvbSBcIi4uL2RhdGEvQ291cnNlXCJcbmltcG9ydCB7IFRlYWNoZXIgfSBmcm9tIFwiLi4vZGF0YS9UZWFjaGVyXCJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tIFwiLi4vZGF0YS9UeXBlc1wiXG5cbmV4cG9ydCBjbGFzcyBWaWV3IHtcbiAgbWFpbjogSFRNTERpdkVsZW1lbnRcbiAgd3JhcHBlcjogSFRNTERpdkVsZW1lbnRcbiAgdGl0bGU6IEhUTUxIZWFkRWxlbWVudFxuXG4gIHNob3dEYXRhQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudFxuICBzdHVkZW50czogU3R1ZGVudFtdXG4gIGNvdXJzZXM6IENvdXJzZVtdXG4gIHRlYWNoZXJzOiBUZWFjaGVyW11cbiAgc3R1ZGVudExpc3Q6IEhUTUxVTGlzdEVsZW1lbnRcbiAgdGVhY2hlcnNMaXN0OiBIVE1MVUxpc3RFbGVtZW50XG4gIGNvdXJzZXNMaXN0OiBIVE1MVUxpc3RFbGVtZW50XG5cbiAgY29uc3RydWN0b3Ioc3R1ZGVudHM6IFN0dWRlbnRbXSwgY291cnNlczogQ291cnNlW10sIHRlYWNoZXJzOiBUZWFjaGVyW10pIHtcbiAgICB0aGlzLnN0dWRlbnRzID0gc3R1ZGVudHNcbiAgICB0aGlzLmNvdXJzZXMgPSBjb3Vyc2VzXG4gICAgdGhpcy50ZWFjaGVycyA9IHRlYWNoZXJzXG5cbiAgICB0aGlzLm1haW4gPSB0aGlzLmdldEVsZW1lbnQoXCIjcm9vdFwiKSBhcyBIVE1MRGl2RWxlbWVudFxuICAgIHRoaXMud3JhcHBlciA9IHRoaXMuY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIndyYXBwZXJcIikgYXMgSFRNTERpdkVsZW1lbnRcblxuICAgIHRoaXMudGl0bGUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBcIm1haW4tdGl0bGVcIikgYXMgSFRNTEhlYWRFbGVtZW50XG4gICAgdGhpcy50aXRsZS50ZXh0Q29udGVudCA9IFwiV2VzQ29hc3RcIlxuXG4gICAgdGhpcy5zaG93RGF0YUJ1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBcInNob3ctZGF0YS1idG5cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnRcbiAgICB0aGlzLnNob3dEYXRhQnV0dG9uLnRleHRDb250ZW50ID0gXCJzaG93IGRhdGFcIlxuXG4gICAgdGhpcy5jb3Vyc2VzTGlzdCA9IHRoaXMuY3JlYXRlRWxlbWVudChcInVsXCIsIFwiY291cnNlcy1saXN0XCIpIGFzIEhUTUxVTGlzdEVsZW1lbnRcbiAgICB0aGlzLnN0dWRlbnRMaXN0ID0gdGhpcy5jcmVhdGVFbGVtZW50KFwidWxcIiwgXCJzdHVkZW50cy1saXN0XCIpIGFzIEhUTUxVTGlzdEVsZW1lbnRcbiAgICB0aGlzLnRlYWNoZXJzTGlzdCA9IHRoaXMuY3JlYXRlRWxlbWVudChcInVsXCIsIFwidGVhY2hlcnMtbGlzdFwiKSBhcyBIVE1MVUxpc3RFbGVtZW50XG4gICAgdGhpcy5jb3Vyc2VzTGlzdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuICAgIHRoaXMudGVhY2hlcnNMaXN0LmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpXG4gICAgdGhpcy5zdHVkZW50TGlzdC5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKVxuXG4gICAgdGhpcy53cmFwcGVyLmFwcGVuZChcbiAgICAgIHRoaXMudGl0bGUsXG4gICAgICB0aGlzLnNob3dEYXRhQnV0dG9uLFxuICAgICAgdGhpcy5jb3Vyc2VzTGlzdCxcbiAgICAgIHRoaXMuc3R1ZGVudExpc3QsXG4gICAgICB0aGlzLnRlYWNoZXJzTGlzdFxuICAgIClcblxuICAgIHRoaXMubWFpbi5hcHBlbmQodGhpcy53cmFwcGVyKVxuICB9XG5cbiAgY3JlYXRlRWxlbWVudCh0YWc6IHN0cmluZywgY2xhc3NOYW1lOiBzdHJpbmcgPSBcIlwiKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKVxuICAgIGlmIChjbGFzc05hbWUpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgZ2V0RWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG5cbiAgICByZXR1cm4gZWxlbWVudFxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTdHVkZW50cygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnN0dWRlbnRzXG4gICAgICAubWFwKFxuICAgICAgICBzdHVkZW50ID0+XG4gICAgICAgICAgYFxuICAgICAgICA8bGkgY2xhc3M9XCJzdHVkZW50XCI+JHtzdHVkZW50LmZpcnN0TmFtZX0tJHtzdHVkZW50Lmxhc3ROYW1lfTwvbGk+XG4gICAgICAgIDxwPiR7c3R1ZGVudC5maXJzdE5hbWV9IGN1cnJlbnRseSBzdHVkeTo8L3A+XG4gICAgICAgICR7c3R1ZGVudC5jb3Vyc2VzLm1hcCgoY291cnNlOiBDb3Vyc2UpID0+IGA8bGk+JHtjb3Vyc2Uuc3ViamVjdH08L2xpPmApLmpvaW4oXCJcIil9XG4gICAgICBgXG4gICAgICApXG4gICAgICAuam9pbihcIlwiKVxuICB9XG4gIHByaXZhdGUgcmVuZGVyVGVhY2hlcnMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50ZWFjaGVyc1xuICAgICAgLm1hcChcbiAgICAgICAgdGVhY2hlciA9PlxuICAgICAgICAgIGBcbiAgICAgICAgPGxpIGNsYXNzPVwidGVhY2hlclwiPiR7dGVhY2hlci5maXJzdE5hbWV9LSR7dGVhY2hlci5sYXN0TmFtZX08L2xpPlxuICAgICAgICA8cD4ke3RlYWNoZXIuZmlyc3ROYW1lfSBtYWluIHN1YmplY3RzOjwvcD5cbiAgICAgICAgJHt0ZWFjaGVyLnN1YmplY3RzXG4gICAgICAgICAgLm1hcCgoc3ViamVjdDogU3ViamVjdCkgPT4gYDxsaSBjbGFzcz1cInN1YmplY3RcIj4ke3N1YmplY3R9PC9saT4gYClcbiAgICAgICAgICAuam9pbihcIlwiKX1cbiAgICAgIGBcbiAgICAgIClcbiAgICAgIC5qb2luKFwiXCIpXG4gIH1cbiAgcHJpdmF0ZSByZW5kZXJDb3Vyc2VzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY291cnNlc1xuICAgICAgLm1hcChcbiAgICAgICAgY291cnNlID0+XG4gICAgICAgICAgYFxuICAgICAgICA8cD5TdHVkZW50cyB0aGF0IHN0dWR5ICR7Y291cnNlLnN1YmplY3R9PC9wPlxuICAgICAgICAke2NvdXJzZS5zdHVkZW50c1xuICAgICAgICAgIC5tYXAoKHN0dWRlbnQ6IFN0dWRlbnQpID0+IGA8bGk+JHtzdHVkZW50LmZpcnN0TmFtZX0tICR7c3R1ZGVudC5sYXN0TmFtZX0gPC9saT5gKVxuICAgICAgICAgIC5qb2luKFwiXCIpfVxuICAgICAgYFxuICAgICAgKVxuICAgICAgLmpvaW4oXCJcIilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnN0dWRlbnRMaXN0LmlubmVySFRNTCA9IGBcbiAgICAgIDxsaSBjbGFzcz1cInRpdGxlXCI+IDxzdHJvbmc+IFN0dWRlbnQgTGlzdCA8L3N0cm9uZz4gPC9saT5cbiAgICAgICR7dGhpcy5yZW5kZXJTdHVkZW50cygpfVxuICAgIGBcblxuICAgIHRoaXMudGVhY2hlcnNMaXN0LmlubmVySFRNTCA9IGBcbiAgICA8bGkgY2xhc3M9XCJ0aXRsZVwiPiA8c3Ryb25nPlRlYWNoZXJzIExpc3Q8L3N0cm9uZz4gPC9saT5cbiAgICAgICR7dGhpcy5yZW5kZXJUZWFjaGVycygpfVxuICAgIGBcbiAgICB0aGlzLmNvdXJzZXNMaXN0LmlubmVySFRNTCA9IGBcbiAgICA8bGkgY2xhc3M9XCJ0aXRsZSBjb3Vyc2UtdGl0bGVcIj4gPHN0cm9uZz5Db3Vyc2VzIExpc3Q8L3N0cm9uZz4gPC9saT5cbiAgICBgXG4gICAgdGhpcy5zaG93RGF0YUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgdGhpcy5zdHVkZW50TGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKVxuICAgICAgdGhpcy5jb3Vyc2VzTGlzdC5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKVxuICAgICAgdGhpcy50ZWFjaGVyc0xpc3QuY2xhc3NMaXN0LnRvZ2dsZShcInNob3dcIilcbiAgICB9KVxuXG4gICAgdGhpcy5jb3Vyc2VzTGlzdC5maXJzdEVsZW1lbnRDaGlsZD8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gdGhpcy5nZXRFbGVtZW50KFwiLm1vZGFsXCIpIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwic2hvdy1tb2RhbFwiKVxuXG4gICAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDx1bCBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAke3RoaXMucmVuZGVyQ291cnNlcygpfVxuICAgICAgICAgIDxidXR0b24gaWQ9XCJjbG9zZS1tb2RhbFwiPlg8L2J1dHRvbj4gICAgICAgICAgXG4gICAgICAgIDwvdWw+XG4gICAgICBgXG5cbiAgICAgIGNvbnN0IGNsb3NlQnRuID0gdGhpcy5nZXRFbGVtZW50KFwiI2Nsb3NlLW1vZGFsXCIpXG4gICAgICBjbG9zZUJ0bj8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInNob3ctbW9kYWxcIilcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY291cnNlXCIpLmZvckVhY2goY291cnNlID0+IHtcbiAgICAgIGNvdXJzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY291cnNlXCIpXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbiIsIi8vIFRoaXMgZmlsZSByZXBsYWNlcyBgaW5kZXguanNgIGluIGJ1bmRsZXJzIGxpa2Ugd2VicGFjayBvciBSb2xsdXAsXG4vLyBhY2NvcmRpbmcgdG8gYGJyb3dzZXJgIGNvbmZpZyBpbiBgcGFja2FnZS5qc29uYC5cblxuaW1wb3J0IHsgdXJsQWxwaGFiZXQgfSBmcm9tICcuL3VybC1hbHBoYWJldC9pbmRleC5qcydcblxuaWYgKGZhbHNlKSB7XG4gIC8vIEFsbCBidW5kbGVycyB3aWxsIHJlbW92ZSB0aGlzIGJsb2NrIGluIHRoZSBwcm9kdWN0aW9uIGJ1bmRsZS5cbiAgaWYgKFxuICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgJiZcbiAgICB0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJ1xuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnUmVhY3QgTmF0aXZlIGRvZXMgbm90IGhhdmUgYSBidWlsdC1pbiBzZWN1cmUgcmFuZG9tIGdlbmVyYXRvci4gJyArXG4gICAgICAgICdJZiB5b3UgZG9u4oCZdCBuZWVkIHVucHJlZGljdGFibGUgSURzIHVzZSBgbmFub2lkL25vbi1zZWN1cmVgLiAnICtcbiAgICAgICAgJ0ZvciBzZWN1cmUgSURzLCBpbXBvcnQgYHJlYWN0LW5hdGl2ZS1nZXQtcmFuZG9tLXZhbHVlc2AgJyArXG4gICAgICAgICdiZWZvcmUgTmFubyBJRC4gSWYgeW91IHVzZSBFeHBvLCBpbnN0YWxsIGBleHBvLXJhbmRvbWAgJyArXG4gICAgICAgICdhbmQgdXNlIGBuYW5vaWQvYXN5bmNgLidcbiAgICApXG4gIH1cbiAgaWYgKHR5cGVvZiBtc0NyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNyeXB0byA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAnSW1wb3J0IGZpbGUgd2l0aCBgaWYgKCF3aW5kb3cuY3J5cHRvKSB3aW5kb3cuY3J5cHRvID0gd2luZG93Lm1zQ3J5cHRvYCcgK1xuICAgICAgICAnIGJlZm9yZSBpbXBvcnRpbmcgTmFubyBJRCB0byBmaXggSUUgMTEgc3VwcG9ydCdcbiAgICApXG4gIH1cbiAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgJ1lvdXIgYnJvd3NlciBkb2VzIG5vdCBoYXZlIHNlY3VyZSByYW5kb20gZ2VuZXJhdG9yLiAnICtcbiAgICAgICAgJ0lmIHlvdSBkb27igJl0IG5lZWQgdW5wcmVkaWN0YWJsZSBJRHMsIHlvdSBjYW4gdXNlIG5hbm9pZC9ub24tc2VjdXJlLidcbiAgICApXG4gIH1cbn1cblxubGV0IHJhbmRvbSA9IGJ5dGVzID0+IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoYnl0ZXMpKVxuXG5sZXQgY3VzdG9tUmFuZG9tID0gKGFscGhhYmV0LCBzaXplLCBnZXRSYW5kb20pID0+IHtcbiAgLy8gRmlyc3QsIGEgYml0bWFzayBpcyBuZWNlc3NhcnkgdG8gZ2VuZXJhdGUgdGhlIElELiBUaGUgYml0bWFzayBtYWtlcyBieXRlc1xuICAvLyB2YWx1ZXMgY2xvc2VyIHRvIHRoZSBhbHBoYWJldCBzaXplLiBUaGUgYml0bWFzayBjYWxjdWxhdGVzIHRoZSBjbG9zZXN0XG4gIC8vIGAyXjMxIC0gMWAgbnVtYmVyLCB3aGljaCBleGNlZWRzIHRoZSBhbHBoYWJldCBzaXplLlxuICAvLyBGb3IgZXhhbXBsZSwgdGhlIGJpdG1hc2sgZm9yIHRoZSBhbHBoYWJldCBzaXplIDMwIGlzIDMxICgwMDAxMTExMSkuXG4gIC8vIGBNYXRoLmNsejMyYCBpcyBub3QgdXNlZCwgYmVjYXVzZSBpdCBpcyBub3QgYXZhaWxhYmxlIGluIGJyb3dzZXJzLlxuICBsZXQgbWFzayA9ICgyIDw8IChNYXRoLmxvZyhhbHBoYWJldC5sZW5ndGggLSAxKSAvIE1hdGguTE4yKSkgLSAxXG4gIC8vIFRob3VnaCwgdGhlIGJpdG1hc2sgc29sdXRpb24gaXMgbm90IHBlcmZlY3Qgc2luY2UgdGhlIGJ5dGVzIGV4Y2VlZGluZ1xuICAvLyB0aGUgYWxwaGFiZXQgc2l6ZSBhcmUgcmVmdXNlZC4gVGhlcmVmb3JlLCB0byByZWxpYWJseSBnZW5lcmF0ZSB0aGUgSUQsXG4gIC8vIHRoZSByYW5kb20gYnl0ZXMgcmVkdW5kYW5jeSBoYXMgdG8gYmUgc2F0aXNmaWVkLlxuXG4gIC8vIE5vdGU6IGV2ZXJ5IGhhcmR3YXJlIHJhbmRvbSBnZW5lcmF0b3IgY2FsbCBpcyBwZXJmb3JtYW5jZSBleHBlbnNpdmUsXG4gIC8vIGJlY2F1c2UgdGhlIHN5c3RlbSBjYWxsIGZvciBlbnRyb3B5IGNvbGxlY3Rpb24gdGFrZXMgYSBsb3Qgb2YgdGltZS5cbiAgLy8gU28sIHRvIGF2b2lkIGFkZGl0aW9uYWwgc3lzdGVtIGNhbGxzLCBleHRyYSBieXRlcyBhcmUgcmVxdWVzdGVkIGluIGFkdmFuY2UuXG5cbiAgLy8gTmV4dCwgYSBzdGVwIGRldGVybWluZXMgaG93IG1hbnkgcmFuZG9tIGJ5dGVzIHRvIGdlbmVyYXRlLlxuICAvLyBUaGUgbnVtYmVyIG9mIHJhbmRvbSBieXRlcyBnZXRzIGRlY2lkZWQgdXBvbiB0aGUgSUQgc2l6ZSwgbWFzayxcbiAgLy8gYWxwaGFiZXQgc2l6ZSwgYW5kIG1hZ2ljIG51bWJlciAxLjYgKHVzaW5nIDEuNiBwZWFrcyBhdCBwZXJmb3JtYW5jZVxuICAvLyBhY2NvcmRpbmcgdG8gYmVuY2htYXJrcykuXG5cbiAgLy8gYC1+ZiA9PiBNYXRoLmNlaWwoZilgIGlmIGYgaXMgYSBmbG9hdFxuICAvLyBgLX5pID0+IGkgKyAxYCBpZiBpIGlzIGFuIGludGVnZXJcbiAgbGV0IHN0ZXAgPSAtfigoMS42ICogbWFzayAqIHNpemUpIC8gYWxwaGFiZXQubGVuZ3RoKVxuXG4gIHJldHVybiAoKSA9PiB7XG4gICAgbGV0IGlkID0gJydcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbGV0IGJ5dGVzID0gZ2V0UmFuZG9tKHN0ZXApXG4gICAgICAvLyBBIGNvbXBhY3QgYWx0ZXJuYXRpdmUgZm9yIGBmb3IgKHZhciBpID0gMDsgaSA8IHN0ZXA7IGkrKylgLlxuICAgICAgbGV0IGogPSBzdGVwXG4gICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgIC8vIEFkZGluZyBgfHwgJydgIHJlZnVzZXMgYSByYW5kb20gYnl0ZSB0aGF0IGV4Y2VlZHMgdGhlIGFscGhhYmV0IHNpemUuXG4gICAgICAgIGlkICs9IGFscGhhYmV0W2J5dGVzW2pdICYgbWFza10gfHwgJydcbiAgICAgICAgLy8gYGlkLmxlbmd0aCArIDEgPT09IHNpemVgIGlzIGEgbW9yZSBjb21wYWN0IG9wdGlvbi5cbiAgICAgICAgaWYgKGlkLmxlbmd0aCA9PT0gK3NpemUpIHJldHVybiBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5sZXQgY3VzdG9tQWxwaGFiZXQgPSAoYWxwaGFiZXQsIHNpemUpID0+IGN1c3RvbVJhbmRvbShhbHBoYWJldCwgc2l6ZSwgcmFuZG9tKVxuXG5sZXQgbmFub2lkID0gKHNpemUgPSAyMSkgPT4ge1xuICBsZXQgaWQgPSAnJ1xuICBsZXQgYnl0ZXMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKVxuXG4gIC8vIEEgY29tcGFjdCBhbHRlcm5hdGl2ZSBmb3IgYGZvciAodmFyIGkgPSAwOyBpIDwgc3RlcDsgaSsrKWAuXG4gIHdoaWxlIChzaXplLS0pIHtcbiAgICAvLyBJdCBpcyBpbmNvcnJlY3QgdG8gdXNlIGJ5dGVzIGV4Y2VlZGluZyB0aGUgYWxwaGFiZXQgc2l6ZS5cbiAgICAvLyBUaGUgZm9sbG93aW5nIG1hc2sgcmVkdWNlcyB0aGUgcmFuZG9tIGJ5dGUgaW4gdGhlIDAtMjU1IHZhbHVlXG4gICAgLy8gcmFuZ2UgdG8gdGhlIDAtNjMgdmFsdWUgcmFuZ2UuIFRoZXJlZm9yZSwgYWRkaW5nIGhhY2tzLCBzdWNoXG4gICAgLy8gYXMgZW1wdHkgc3RyaW5nIGZhbGxiYWNrIG9yIG1hZ2ljIG51bWJlcnMsIGlzIHVubmVjY2Vzc2FyeSBiZWNhdXNlXG4gICAgLy8gdGhlIGJpdG1hc2sgdHJpbXMgYnl0ZXMgZG93biB0byB0aGUgYWxwaGFiZXQgc2l6ZS5cbiAgICBsZXQgYnl0ZSA9IGJ5dGVzW3NpemVdICYgNjNcbiAgICBpZiAoYnl0ZSA8IDM2KSB7XG4gICAgICAvLyBgMC05YS16YFxuICAgICAgaWQgKz0gYnl0ZS50b1N0cmluZygzNilcbiAgICB9IGVsc2UgaWYgKGJ5dGUgPCA2Mikge1xuICAgICAgLy8gYEEtWmBcbiAgICAgIGlkICs9IChieXRlIC0gMjYpLnRvU3RyaW5nKDM2KS50b1VwcGVyQ2FzZSgpXG4gICAgfSBlbHNlIGlmIChieXRlIDwgNjMpIHtcbiAgICAgIGlkICs9ICdfJ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZCArPSAnLSdcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGlkXG59XG5cbmV4cG9ydCB7IG5hbm9pZCwgY3VzdG9tQWxwaGFiZXQsIGN1c3RvbVJhbmRvbSwgdXJsQWxwaGFiZXQsIHJhbmRvbSB9XG4iLCJpbXBvcnQgeyBDb3Vyc2UgfSBmcm9tIFwiLi9zY2hvb2wvZGF0YS9Db3Vyc2VcIlxuaW1wb3J0IHsgVGVhY2hlciB9IGZyb20gXCIuL3NjaG9vbC9kYXRhL1RlYWNoZXJcIlxuaW1wb3J0IHsgU3R1ZGVudCB9IGZyb20gXCIuL3NjaG9vbC9kYXRhL1N0dWRlbnRcIlxuaW1wb3J0IHsgVmlldyB9IGZyb20gXCIuL3NjaG9vbC92aWV3L1ZpZXdcIlxuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSBcIm5hbm9pZFwiXG47KCgpID0+IHtcbiAgZnVuY3Rpb24gY29udHJvbGxlcigpIHtcbiAgICBjb25zdCBtaWtlID0gbmV3IFN0dWRlbnQobmFub2lkKCksIFwiTWlrZVwiLCBcIlN6eW1rb3dpYWtcIiwgW10pXG4gICAgY29uc3Qgam9uID0gbmV3IFN0dWRlbnQobmFub2lkKCksIFwiSm9uXCIsIFwiU21pdGhcIiwgW10pXG4gICAgY29uc3QgY2xhcmEgPSBuZXcgU3R1ZGVudChuYW5vaWQoKSwgXCJDbGFyYVwiLCBcIlN0ZW5cIiwgW10pXG4gICAgY29uc3Qga2ltID0gbmV3IFN0dWRlbnQobmFub2lkKCksIFwiS2ltXCIsIFwiS2FsbHN0cm9tXCIsIFtdKVxuICAgIGNvbnN0IHN0aW5hID0gbmV3IFN0dWRlbnQobmFub2lkKCksIFwiU3RpbmFcIiwgXCJUdXJuZXJcIiwgW10pXG5cbiAgICBjb25zdCBib3JpcyA9IG5ldyBUZWFjaGVyKG5hbm9pZCgpLCBcIkJvcmlzXCIsIFwiRWluc3RlaW5cIiwgW10pXG4gICAgY29uc3QgbGluZGEgPSBuZXcgVGVhY2hlcihuYW5vaWQoKSwgXCJMaW5kYVwiLCBcIlNtaXRoXCIsIFtdKVxuICAgIGNvbnN0IG1pYSA9IG5ldyBUZWFjaGVyKG5hbm9pZCgpLCBcIk1pYVwiLCBcIkpvbnNvblwiLCBbXSlcblxuICAgIGNvbnN0IG1hdGggPSBuZXcgQ291cnNlKG5hbm9pZCgpLCBcIm1hdGhcIiwgW10sIGJvcmlzKVxuICAgIGNvbnN0IGVuZ2xpc2ggPSBuZXcgQ291cnNlKG5hbm9pZCgpLCBcImVuZ2xpc2hcIiwgW10sIGxpbmRhKVxuICAgIGNvbnN0IHN3ZWRpc2ggPSBuZXcgQ291cnNlKG5hbm9pZCgpLCBcInN3ZWRpc2hcIiwgW10sIG1pYSlcbiAgICBjb25zdCBoaXN0b3J5ID0gbmV3IENvdXJzZShuYW5vaWQoKSwgXCJoaXN0b3J5XCIsIFtdLCBib3JpcylcblxuICAgIG1hdGguYWRkU3R1ZGVudChtaWtlKVxuICAgIG1hdGguYWRkU3R1ZGVudChqb24pXG4gICAgZW5nbGlzaC5hZGRTdHVkZW50KGNsYXJhKVxuICAgIGVuZ2xpc2guYWRkU3R1ZGVudChzdGluYSlcbiAgICBoaXN0b3J5LmFkZFN0dWRlbnQobWlrZSlcbiAgICBoaXN0b3J5LmFkZFN0dWRlbnQoc3RpbmEpXG4gICAgc3dlZGlzaC5hZGRTdHVkZW50KGtpbSlcbiAgICBzd2VkaXNoLmFkZFN0dWRlbnQoc3RpbmEpXG5cbiAgICBjb25zdCBzdHVkZW50cyA9IFttaWtlLCBqb24sIGNsYXJhLCBraW0sIHN0aW5hXVxuICAgIGNvbnN0IHRlYWNoZXJzID0gW2JvcmlzLCBsaW5kYSwgbWlhXVxuICAgIGNvbnN0IGNvdXJzZXMgPSBbbWF0aCwgZW5nbGlzaCwgc3dlZGlzaCwgaGlzdG9yeV1cblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICBjb25zdCB2ID0gbmV3IFZpZXcoc3R1ZGVudHMsIGNvdXJzZXMsIHRlYWNoZXJzKVxuICAgICAgdi5yZW5kZXIoKVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBpbml0LFxuICAgIH1cbiAgfVxuICBjb250cm9sbGVyKCkuaW5pdCgpXG59KSgpXG4iXSwic291cmNlUm9vdCI6IiJ9