(this.webpackJsonpsniff=this.webpackJsonpsniff||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(12),a=n.n(s),c=n(9),o=n(15),i=n.n(o),l=n(14),d=n(25),u=n(2),p=n(3),j=n(5),f=n(4),m=n(6),h={getUsers:function(){var e=this;return fetch("https://sniff-api.herokuapp.com/api/v1/users").then((function(t){return e.checkResponse(t),t.json()})).catch((function(e){return console.error(e),e.message}))},getSingleUser:function(e){var t=this;return fetch("https://sniff-api.herokuapp.com/api/v1/users/".concat(e)).then((function(e){return t.checkResponse(e),e.json()})).catch((function(e){return console.error(e),e.message}))},getAppointments:function(e){var t=this;return fetch("https://sniff-api.herokuapp.com/api/v1/appointments/".concat(e)).then((function(e){return t.checkResponse(e),e.json()})).catch((function(e){return console.error(e),e.message}))},getParks:function(){var e=this;return fetch("https://sniff-api.herokuapp.com/api/v1/parks").then((function(t){return e.checkResponse(t),t.json()})).catch((function(e){return console.error(e),e.message}))},postAppointment:function(e){var t=this;return fetch("https://sniff-api.herokuapp.com/api/v1/appointments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return t.checkResponse(e),e.json()})).catch((function(e){return console.error(e),e.message}))},deleteAppointment:function(e){var t=this;return fetch("https://sniff-api.herokuapp.com/api/v1/appointments/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return t.checkResponse(e),e.json()})).catch((function(e){return console.error(e),e.message}))},checkResponse:function(e){if(!e.ok)throw 422===e.status||403===e.status?new Error("Sorry, we can't find an account with these credentials. Please try again."):404===e.status?new Error("The page you are looking for doesn't exist"):e.status>=500?new Error("We're having issues on our end. Please try again later."):new Error("Please check your network connection")}},b=n(1),O=function(){return Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsx)(c.c,{exact:!0,to:"/",className:"navbar__tab",activeClassName:"active",children:"home"}),Object(b.jsx)(c.c,{exact:!0,to:"/findfriends",className:"navbar__tab",activeClassName:"active",children:"find friends"})]})},g=function(e){var t=e.profilePic;return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsxs)("article",{className:"header__user-photo-username",children:[Object(b.jsx)("img",{src:t,className:"header__user-photo",alt:"user photo"}),Object(b.jsx)("h3",{className:"header__username",children:"Bruce"})]}),Object(b.jsxs)("article",{className:"header__logo-tagline",children:[Object(b.jsx)("div",{className:"header__logo",children:Object(b.jsx)("h1",{className:"title",children:"sn\xefff."})}),Object(b.jsx)("h3",{className:"header__tagline",children:"(wag. fetch. play.)"})]}),Object(b.jsx)(O,{})]})},x=function(e){var t=e.id,n=e.owner_name,r=e.dog_name,s=e.profile_pic,a=e.dog_breed;return Object(b.jsx)(c.b,{to:"/profile/".concat(t),children:Object(b.jsxs)("article",{className:"profile-card",children:[Object(b.jsx)("img",{className:"profile-card__image",src:s,alt:"profile picture"}),Object(b.jsxs)("h3",{className:"profile-card__card-details",children:[r," the ",a," & ",n]})]})})},y=function(e){var t=e.users.map((function(e){return Object(b.jsx)(x,Object(l.a)({},e),e.id)}));return Object(b.jsx)("section",{className:"gallery",children:t})},v=n(16),_=n(21),w=n(17),N=(n(42),function(e){var t=e.panTo,n=Object(_.a)({requestOptions:{location:{lat:function(){return 39.74846723935253},lng:function(){return-105.04736793135767}},radius:2e3}}),r=n.ready,s=n.value,a=n.suggestions,c=a.status,o=a.data,i=n.setValue,l=n.clearSuggestions;return Object(b.jsxs)(w.a,{onSelect:function(e){i(e,!1),l(),Object(_.b)({address:e}).then((function(e){return Object(_.c)(e[0]).then((function(e){var n=e.lat,r=e.lng;return t({lat:n,lng:r},14)}))})).catch((function(e){return console.log(e.message)}))},children:[Object(b.jsx)(w.b,{className:"search",value:s,onChange:function(e){i(e.target.value)},disabled:!r,placeholder:"enter a landmark or address"}),Object(b.jsx)(w.e,{children:Object(b.jsx)(w.c,{children:"OK"===c&&o.map((function(e){var t=e.place_id,n=e.description;return Object(b.jsx)(w.d,{value:n},t)}))})})]})}),k=n(10),U=n(20),C=n.n(U),S=Object(r.createContext)(),A=function(e){var t=e.children,n=Object(r.useState)(C()().format("YYYY-MM-DD")),s=Object(k.a)(n,2),a=s[0],c=s[1],o=Object(r.useState)(null),i=Object(k.a)(o,2),l=i[0],d=i[1],u=Object(r.useState)(""),p=Object(k.a)(u,2),j=p[0],f=p[1],m=Object(r.useState)([]),O=Object(k.a)(m,2),g=O[0],x=O[1],y={date:a,setDate:c,selected:l,setSelected:d,location:j,setLocation:f,parks:g,setParks:x};return Object(r.useEffect)((function(){h.getParks().then((function(e){return x(e)}))}),[]),Object(b.jsx)(S.Provider,{value:y,children:t})},I=n.p+"static/media/target.dfe8753c.png",P=function(e){var t=e.panTo,n=e.center,s=Object(r.useContext)(S).setSelected;return Object(b.jsxs)("article",{className:"locate-container",children:[Object(b.jsx)("button",{className:"locate__show-my-location-btn",onClick:function(){navigator.geolocation.getCurrentPosition((function(e){t({lat:e.coords.latitude,lng:e.coords.longitude},14)}),(function(){return console.log("failed to locate user")})),s(null)},children:Object(b.jsx)("img",{src:I,alt:"show my location"})}),Object(b.jsx)("button",{className:"locate__reset-map-btn",onClick:function(){t({lat:n.lat,lng:n.lng},12),s(null)},children:"reset map"})]})},T=n.p+"static/media/dog-park.ec284a15.svg",D=function(e){var t=e.panTo,n=Object(r.useContext)(S),s=n.setSelected,a=n.setLocation,c=n.parks,o=function(e){return{lat:e.coords.lat,lng:e.coords.lng}},i=c.map((function(e){return Object(b.jsx)(v.d,{position:o(e),icon:{url:T,scaledSize:new window.google.maps.Size(30,30),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(15,15)},onClick:function(){s(e),a(e.name),t(o(e),14)}},e.id)}));return Object(b.jsx)(b.Fragment,{children:i})},E={width:"28rem",height:"28rem",borderRadius:"10px"},M={lat:39.74121768558487,lng:-104.9915066575683},L={styles:[{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:"#e0efef"}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{visibility:"on"},{hue:"#1900ff"},{color:"#c0e8e8"}]},{featureType:"road",elementType:"geometry",stylers:[{lightness:100},{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{visibility:"on"},{lightness:700}]},{featureType:"water",elementType:"all",stylers:[{color:"#7dcdcd"}]}],disableDefaultUI:!0,zoomControl:!0},R=["places"],Y=function(){var e=Object(r.useContext)(S),t=e.selected,n=e.setSelected,s=Object(r.useRef)(),a=Object(r.useCallback)((function(e){s.current=e}),[]),c=Object(r.useCallback)((function(e,t){var n=e.lat,r=e.lng;s.current.panTo({lat:n,lng:r}),s.current.setZoom(t)}));return Object(b.jsxs)(v.c,{googleMapsApiKey:"AIzaSyCOwqWZQDbUMMCFOsyYUKtLmxll4AIM-6g",libraries:R,children:[Object(b.jsxs)("article",{className:"search-locate-container",children:[Object(b.jsx)(N,{panTo:c}),Object(b.jsx)(P,{panTo:c,center:M})]}),Object(b.jsxs)(v.a,{mapContainerStyle:E,center:M,zoom:12,options:L,onLoad:a,children:[Object(b.jsx)(D,{panTo:c}),t?Object(b.jsx)(v.b,{className:"info-window",position:{lat:t.coords.lat,lng:t.coords.lng},onCloseClick:function(){n(null)},children:Object(b.jsx)("p",{className:"info-window__park-name-display",children:t.name})}):null]})]})},q=function(e){var t=e.currentUserId,n=e.selectedUserId,s=e.updateProfile,a=e.updateCurrentUser,c=Object(r.useContext)(S),o=c.date,i=c.setDate,l=c.setSelected,d=c.location,u=c.setLocation,p=c.parks,j=function(e){var t=e.target,n=t.name,r=t.value;"date"===n&&i(r),"location"===n&&(u(r),f(e))},f=function(e){var t=p.find((function(t){return t.name===e.target.value}));l(t)},m=function(){i(""),l(null),u("")},O=p.map((function(e){return Object(b.jsx)("option",{value:e.name,children:e.name})}));return Object(b.jsxs)("form",{className:"playdate-form",onSubmit:function(e){e.preventDefault();var r={ownerIds:[t,n],dogPark:d,date:o};h.postAppointment(r).then((function(){a(),s()})),m()},children:[Object(b.jsx)("input",{className:"playdate-form__date",type:"date",name:"date",value:o,required:!0,onChange:j}),Object(b.jsxs)("select",{className:"playdate-form__dropdown",name:"location",value:d,onChange:j,required:!0,children:[Object(b.jsx)("option",{value:"",disabled:!0,selected:!0,hidden:!0,children:"choose a park"}),O]}),Object(b.jsx)("button",{className:"playdate-form__set-playdate-btn",children:"set playdate"})]})},F=function(e){var t=e.currentUserId,n=e.selectedUserId,r=e.updateProfile,s=e.updateCurrentUser;return Object(b.jsx)(A,{children:Object(b.jsxs)("section",{className:"playdate-form-map-container",children:[Object(b.jsx)(Y,{}),Object(b.jsx)(q,{currentUserId:t,selectedUserId:n,updateProfile:r,updateCurrentUser:s})]})})},z=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={selectedUser:{id:"",owner_name:"",dog_name:"",profile_pic:"",dog_breed:"",bio:""},appointments:[],existingAppointment:null,status:"loading",error:""},e.componentDidMount=function(){h.getSingleUser(+e.props.selectedUserId).then((function(t){e.setState({selectedUser:t}),e.updateProfile()})).catch((function(t){return e.setState({error:t.message})}))},e.componentDidUpdate=function(){e.props.currentUserId&&!e.state.existingAppointment&&e.findExistingAppointment()},e.updateProfile=function(){var t=e.props,n=t.selectedUserId;t.currentUserId;h.getAppointments(+n).then((function(t){return e.setState({appointments:t,status:"success"})}))},e.findExistingAppointment=function(){var t=e.state.appointments.sort((function(e,t){return new Date(t.date)-new Date(e.date)})).find((function(t){return t.ownersId===e.props.currentUserId}));return t?e.setState({existingAppointment:t}):null},e}return Object(p.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.currentUserId,r=t.selectedUserId,s=t.updateCurrentUser,a=t.deleteAppointment,o=this.state.selectedUser,i=o.owner_name,l=o.dog_name,d=o.profile_pic,u=o.bio,p=this.state,j=(p.appointments,p.existingAppointment),f=p.status,m=p.error;return Object(b.jsxs)(b.Fragment,{children:["loading"===f&&Object(b.jsx)("h1",{className:"message",children:"Loading"}),"error"===f&&Object(b.jsx)("h1",{className:"message",children:m}),n&&"success"===f&&Object(b.jsxs)("section",{className:"profile-container",children:[Object(b.jsxs)("article",{className:"profile",children:[Object(b.jsx)("img",{className:"profile__pic",src:d}),Object(b.jsxs)("p",{className:"profile__text",children:["owner's name: ",i]}),Object(b.jsxs)("p",{className:"profile__text",children:["dog's name: ",l]}),Object(b.jsxs)("p",{className:"profile__text",children:["bio: ",u]}),Object(b.jsx)(c.b,{to:"/findfriends",children:Object(b.jsx)("button",{className:"find-friends-btn",children:"find more friends"})})]}),j&&new Date<new Date(j.date)?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"playdate-reminder",children:[Object(b.jsxs)("h2",{className:"playdate-reminder__message",children:["You have a playdate scheduled on ",j.date," at ",j.dogPark,"."]}),Object(b.jsx)("button",{className:"playdate-reminder__cancel-btn",onClick:function(){a(j.id),e.updateProfile(),e.findExistingAppointment()},children:"cancel"})]})}):Object(b.jsx)(F,{currentUserId:n,selectedUserId:r,updateProfile:this.updateProfile,updateCurrentUser:s})]})]})}}]),n}(r.Component),J=z,K=function(e){var t=e.id,n=e.dogPark,r=e.date,s=e.ownersId,a=e.ownerName,o=e.dogName,i=e.profilePic,l=e.deleteAppointment;return r=C()(r).format("ddd MMM D, YYYY"),Object(b.jsx)("article",{className:"playdate",style:{backgroundImage:"url(".concat(i,")")},children:Object(b.jsxs)("div",{className:"playdate__text-overlay",children:[Object(b.jsxs)("p",{children:["on ",Object(b.jsx)("span",{children:r})]}),Object(b.jsxs)("p",{children:["at ",Object(b.jsx)("span",{children:n})]}),Object(b.jsxs)("p",{children:["with",Object(b.jsxs)(c.b,{to:"/profile/".concat(s),children:[" "+a," and ",o]})]}),Object(b.jsx)("button",{className:"playdate__cancel-btn",onClick:function(){return l(t)},children:"cancel"})]})})},B=function(e){var t=e.appointments,n=(e.users,e.deleteAppointment),r=t.sort((function(e,t){return new Date(t.date)-new Date(e.date)})).map((function(e){return Object(b.jsx)(K,Object(l.a)(Object(l.a)({},e),{},{deleteAppointment:n}),e.id)}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("section",{}),Object(b.jsx)("h2",{className:"my-playdates",children:"my playdates"}),Object(b.jsxs)("section",{className:"playdates-container",children:[Object(b.jsx)("button",{id:"slideLeft",type:"button",onClick:function(){return document.querySelector(".playdates-container__playdates").scrollLeft-=309},children:"\u02c2"}),Object(b.jsx)("div",{className:"playdates-container__playdates",children:r}),Object(b.jsx)("button",{id:"slideRight",type:"button",onClick:function(){return document.querySelector(".playdates-container__playdates").scrollLeft+=309},children:"\u02c3"})]})]})},W=function(e){Object(j.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={currentUser:{},appointments:[],users:[],status:"loading",error:""},e.updateCurrentUser=Object(d.a)(i.a.mark((function t(){var n,r,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.getSingleUser(2);case 2:return n=t.sent,t.next=5,h.getUsers();case 5:return r=t.sent,t.next=8,h.getAppointments(n.id);case 8:s=t.sent,e.setState({currentUser:Object(l.a)({},n),users:r,appointments:s.sort((function(e,t){return new Date(t.date)-new Date(e.date)})),status:"success"});case 10:case"end":return t.stop()}}),t)}))),e.deleteAppointment=function(t){h.deleteAppointment(t).then((function(){e.updateCurrentUser()}))},e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){this.updateCurrentUser()}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentUser,r=t.appointments,s=t.users.filter((function(e){return e.id!==n.id}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{profilePic:n.profile_pic}),Object(b.jsxs)("main",{children:[Object(b.jsx)(m.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(B,{appointments:r,users:s,deleteAppointment:e.deleteAppointment})}}),Object(b.jsx)(m.a,{exact:!0,path:"/findfriends",render:function(){return Object(b.jsx)(y,{users:s})}}),Object(b.jsx)(m.a,{path:"/profile/:userId",render:function(t){var r=t.match;return Object(b.jsx)(J,{currentUserId:n.id,selectedUserId:+r.params.userId,updateCurrentUser:e.updateCurrentUser,deleteAppointment:e.deleteAppointment})}})]})]})}}]),n}(r.Component),Z=W;n(43);a.a.render(Object(b.jsx)(c.a,{children:Object(b.jsx)(Z,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.a53ecb54.chunk.js.map