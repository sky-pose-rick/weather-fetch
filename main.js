(()=>{"use strict";const e=async function(e,t){const n=await async function(e,t){return(await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&units=${t}&APPID=8d838cab2623bf0e4ccf3c4d32eab7bb`,{mode:"cors"})).json()}(e,t);return function(e){if("404"===e.cod)throw new Error("City not found");const t=e.name,{country:n}=e.sys,{temp:i}=e.main,o=e.weather[0].main;return{city:t,country:n,temp:i,weather:o,keyword:o}}(n)},t=async function(e){const t=await async function(e){return(await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=ieAImKLCMr3MRyKct42s8BMVBEdSgL0A&s=${e}`,{mode:"cors"})).json()}(e);return function(e){return e.data.images.original.url}(t)},n=/^[a-z]{2}$/i;const i=function(e,t,n){e.innerText="";const i=document.createElement("form");e.appendChild(i);const o=document.createElement("label");i.appendChild(o),o.innerText="City: ";const r=document.createElement("input");o.appendChild(r),r.setAttribute("name","city"),r.toggleAttribute("required");const a=document.createElement("div");i.appendChild(a),a.className="unit-wrapper";const c=document.createElement("label");a.appendChild(c),c.innerText="Units: ";const s=(e,t,n,i)=>{const o=document.createElement("label");a.appendChild(o),o.innerText=e,o.style.setProperty("grid-column","2/3"),o.className="radio-label";const r=document.createElement("input");return o.appendChild(r),r.setAttribute("type","radio"),r.setAttribute("name",n),r.value=t,i&&r.toggleAttribute("checked"),[o,r]},[d,u]=s("Celcius","metric","units",!0),[l,m]=s("Farenheit","imperial","units",!1),p=document.createElement("input");i.appendChild(p),p.setAttribute("type","submit"),p.value="Submit",p.addEventListener("click",(e=>{if(!r.validity.valid)return!1;e.preventDefault();const t=new FormData(i);n(t.get("city"),t.get("units"))}))},o=function(e,t){t.innerText="";const n=document.createElement("div");t.appendChild(n),n.className="loading-box",n.innerText="Now Loading..."},r=function(e,t,i,o){t.innerText="";const r=function(e){if(!n.test(e)){const t=typeof e;throw new TypeError(`cc argument must be an ISO 3166-1 alpha-2 string, but got '${"string"===t?e:t}' instead.`)}const t=[...e.toUpperCase()].map((e=>e.codePointAt()+127397));return String.fromCodePoint(...t)}(i.country),a=document.createElement("div");t.appendChild(a),a.innerText=`${i.city} ${r}`;const c=document.createElement("div");t.appendChild(c),c.innerText=i.temp;const s=document.createElement("div");t.appendChild(s),s.innerText=i.weather,o.then((e=>{console.log("image to load: ",e);const n=document.createElement("img");t.appendChild(n),n.setAttribute("src",e),n.setAttribute("alt",`Image of ${i.weather}`)}))},a=function(e,t,n){t.innerText="";const i=document.createElement("div");t.appendChild(i),i.className="error-box",i.innerText="Failed to find results. Please check your inputs and try again"},c=document.querySelector("#dom-inputs"),s=document.querySelector("#dom-outputs");i(c,s,((n,i)=>{o(c,s),e(n,i).then((e=>{(2e3,new Promise(((e,t)=>{setTimeout((()=>{e("foo")}),2e3)}))).then((n=>{console.log(e);const i=t(e.keyword);r(c,s,e,i)}))}),(e=>{a(c,s)}))}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qm1GLEVBQWlCM0QsRUFBV0MsR0FDNUIsRUFBdUJsQixFQUFNUCxHQUFPMkUsTUFBTTlELEtBQ1AsSUFaakIsSUFBSXVFLFNBQVEsQ0FBQ0MsRUFBU0MsS0FDdENDLFlBQVcsS0FDVEYsRUFBUSxTQVV1QixTQUNwQlYsTUFBTWEsSUFDakJYLFFBQVFDLElBQUlqRSxHQUNaLE1BQU00RSxFQUFhQyxFQUFlN0UsRUFBUUMsU0FDMUNxRSxFQUFvQjNELEVBQVdDLEVBQVlaLEVBQVM0RSxTQUVwREUsSUFDRlIsRUFBa0IzRCxFQUFXQyxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1mZXRjaC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItZmV0Y2gvLi9zcmMvZ2lwaHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mZXRjaC8uL25vZGVfbW9kdWxlcy9jb3VudHJ5LWNvZGUtZW1vamkvbGliL2luZGV4Lm1qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWZldGNoLy4vc3JjL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1mZXRjaC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAgbmV2ZXIgcHVibGlzaCBBUEkga2V5cyBmb3IgcGFpZCBzZXJ2aWNlc1xuY29uc3QgYXBpS2V5V2VhdGhlciA9ICc4ZDgzOGNhYjI2MjNiZjBlNGNjZjNjNGQzMmVhYjdiYic7XG5cbi8vICBwYXJzZSBvcGVuIHdlYXRoZXIganNvbiBmb3IgcmVsZXZhbnQgZGF0YVxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXIoanNvbikge1xuICBpZiAoanNvbi5jb2QgPT09ICc0MDQnKSB7IHRocm93IG5ldyBFcnJvcignQ2l0eSBub3QgZm91bmQnKTsgfVxuICBjb25zdCBjaXR5ID0ganNvbi5uYW1lO1xuICBjb25zdCB7IGNvdW50cnkgfSA9IGpzb24uc3lzO1xuICBjb25zdCB7IHRlbXAgfSA9IGpzb24ubWFpbjtcbiAgY29uc3Qgd2VhdGhlciA9IGpzb24ud2VhdGhlclswXS5tYWluO1xuICBjb25zdCBrZXl3b3JkID0gd2VhdGhlcjtcblxuICByZXR1cm4ge1xuICAgIGNpdHksIGNvdW50cnksIHRlbXAsIHdlYXRoZXIsIGtleXdvcmQsXG4gIH07XG59XG5cbi8vICBzZW5kIG9wZW4gd2VhdGhlciBhcGkgcmVxdWVzdFxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFdlYXRoZXIobG9jYXRpb24sIHVuaXRzKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0c30mQVBQSUQ9JHthcGlLZXlXZWF0aGVyfWAsIHtcbiAgICBtb2RlOiAnY29ycycsXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG4vLyAgc2VuZCBhIHJlcXVlc3QgdGhlbiBwcm9jZXNzIHRoZSByZXN1bHRcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIobG9jYXRpb24sIHVuaXRzKSB7XG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXF1ZXN0V2VhdGhlcihsb2NhdGlvbiwgdW5pdHMpO1xuICByZXR1cm4gcHJvY2Vzc1dlYXRoZXIoanNvbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHsgZ2V0V2VhdGhlciB9O1xuIiwiLy8gIG5ldmVyIHB1Ymxpc2ggQVBJIGtleXMgZm9yIHBhaWQgc2VydmljZXNcbmNvbnN0IGFwaUtleUltYWdlID0gJ2llQUltS0xDTXIzTVJ5S2N0NDJzOEJNVkJFZFNnTDBBJztcblxuLy8gIHBhcnNlIGdpcGh5IGpzb24gZm9yIHJlbGV2YW50IGRhdGFcbmZ1bmN0aW9uIHByb2Nlc3NJbWFnZShqc29uKSB7XG4gIHJldHVybiBqc29uLmRhdGEuaW1hZ2VzLm9yaWdpbmFsLnVybDtcbn1cblxuLy8gIHNlbmQgZ2lwaHkgYXBpIHJlcXVlc3Rcbi8vICBzZW5kIG9wZW4gd2VhdGhlciBhcGkgcmVxdWVzdFxuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEltYWdlKHRlcm0pIHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJhbnNsYXRlP2FwaV9rZXk9JHthcGlLZXlJbWFnZX0mcz0ke3Rlcm19YCwge1xuICAgIG1vZGU6ICdjb3JzJyxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbi8vICBzZW5kIGEgcmVxdWVzdCB0aGVuIHByb2Nlc3MgdGhlIHJlc3VsdFxuYXN5bmMgZnVuY3Rpb24gZ2V0SW1hZ2UodGVybSkge1xuICBjb25zdCBqc29uID0gYXdhaXQgcmVxdWVzdEltYWdlKHRlcm0pO1xuICByZXR1cm4gcHJvY2Vzc0ltYWdlKGpzb24pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7IGdldEltYWdlIH07XG4iLCJjb25zdCBDQ19SRUdFWCA9IC9eW2Etel17Mn0kL2k7XG5jb25zdCBGTEFHX0xFTkdUSCA9IDQ7XG5jb25zdCBPRkZTRVQgPSAxMjczOTc7XG5mdW5jdGlvbiBjb3VudHJ5Q29kZUVtb2ppKGNjKSB7XG4gIGlmICghQ0NfUkVHRVgudGVzdChjYykpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNjO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYGNjIGFyZ3VtZW50IG11c3QgYmUgYW4gSVNPIDMxNjYtMSBhbHBoYS0yIHN0cmluZywgYnV0IGdvdCAnJHt0eXBlID09PSBcInN0cmluZ1wiID8gY2MgOiB0eXBlfScgaW5zdGVhZC5gKTtcbiAgfVxuICBjb25zdCBjb2RlUG9pbnRzID0gWy4uLmNjLnRvVXBwZXJDYXNlKCldLm1hcCgoYykgPT4gYy5jb2RlUG9pbnRBdCgpICsgT0ZGU0VUKTtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpO1xufVxuZnVuY3Rpb24gZW1vamlDb3VudHJ5Q29kZShmbGFnKSB7XG4gIGlmIChmbGFnLmxlbmd0aCAhPT0gRkxBR19MRU5HVEgpIHtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIGZsYWc7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgZmxhZyBhcmd1bWVudCBtdXN0IGJlIGEgZmxhZyBlbW9qaSwgYnV0IGdvdCAnJHt0eXBlID09PSBcInN0cmluZ1wiID8gZmxhZyA6IHR5cGV9JyBpbnN0ZWFkLmApO1xuICB9XG4gIGNvbnN0IGNvZGVQb2ludHMgPSBbLi4uZmxhZ10ubWFwKChjKSA9PiBjLmNvZGVQb2ludEF0KCkgLSBPRkZTRVQpO1xuICByZXR1cm4gU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cyk7XG59XG52YXIgc3JjX2RlZmF1bHQgPSBjb3VudHJ5Q29kZUVtb2ppO1xuZXhwb3J0IHtcbiAgY291bnRyeUNvZGVFbW9qaSxcbiAgc3JjX2RlZmF1bHQgYXMgZGVmYXVsdCxcbiAgZW1vamlDb3VudHJ5Q29kZVxufTtcbiIsImltcG9ydCBjb3VudHJ5Q29kZUVtb2ppIGZyb20gJ2NvdW50cnktY29kZS1lbW9qaSc7XG5cbmZ1bmN0aW9uIHNob3dIb21lKGRvbUlucHV0cywgZG9tT3V0cHV0cywgY2FsbGJhY2spIHtcbiAgLy8gIGVyYXNlIG9sZCBjb250ZW50XG4gIGRvbUlucHV0cy5pbm5lclRleHQgPSAnJztcblxuICAvLyAgZm9ybVxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBkb21JbnB1dHMuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIC8vICAgIGNpdHkgaW5wdXRcbiAgY29uc3QgY2l0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjaXR5TGFiZWwpO1xuICBjaXR5TGFiZWwuaW5uZXJUZXh0ID0gJ0NpdHk6ICc7XG4gIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGNpdHlMYWJlbC5hcHBlbmRDaGlsZChjaXR5SW5wdXQpO1xuICBjaXR5SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2NpdHknKTtcbiAgY2l0eUlucHV0LnRvZ2dsZUF0dHJpYnV0ZSgncmVxdWlyZWQnKTtcblxuICAvLyAgdW5pdCB3cmFwcGVyXG4gIGNvbnN0IHVuaXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodW5pdFdyYXBwZXIpO1xuICB1bml0V3JhcHBlci5jbGFzc05hbWUgPSAndW5pdC13cmFwcGVyJztcblxuICAvLyAgICB1bml0IGlucHV0IGRlc2NyaXB0aW9uXG4gIGNvbnN0IHVuaXRMYWJlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICB1bml0V3JhcHBlci5hcHBlbmRDaGlsZCh1bml0TGFiZWxEZXNjKTtcbiAgdW5pdExhYmVsRGVzYy5pbm5lclRleHQgPSAnVW5pdHM6ICc7XG5cbiAgY29uc3QgY3JlYXRlUmFkaW8gPSAobGFiZWwsIHZhbHVlLCBncm91cCwgY2hlY2tlZCkgPT4ge1xuICAgIGNvbnN0IHVuaXRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgdW5pdFdyYXBwZXIuYXBwZW5kQ2hpbGQodW5pdExhYmVsKTtcbiAgICB1bml0TGFiZWwuaW5uZXJUZXh0ID0gbGFiZWw7XG4gICAgdW5pdExhYmVsLnN0eWxlLnNldFByb3BlcnR5KCdncmlkLWNvbHVtbicsICcyLzMnKTtcbiAgICB1bml0TGFiZWwuY2xhc3NOYW1lID0gJ3JhZGlvLWxhYmVsJztcblxuICAgIGNvbnN0IHVuaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgdW5pdExhYmVsLmFwcGVuZENoaWxkKHVuaXRJbnB1dCk7XG4gICAgdW5pdElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdyYWRpbycpO1xuICAgIHVuaXRJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBncm91cCk7XG4gICAgdW5pdElucHV0LnZhbHVlID0gdmFsdWU7XG4gICAgaWYgKGNoZWNrZWQpIHsgdW5pdElucHV0LnRvZ2dsZUF0dHJpYnV0ZSgnY2hlY2tlZCcpOyB9XG4gICAgcmV0dXJuIFt1bml0TGFiZWwsIHVuaXRJbnB1dF07XG4gIH07XG5cbiAgY29uc3QgW3VuaXRMYWJlbEMsIHVuaXRJbnB1dENdID0gY3JlYXRlUmFkaW8oJ0NlbGNpdXMnLCAnbWV0cmljJywgJ3VuaXRzJywgdHJ1ZSk7XG4gIGNvbnN0IFt1bml0TGFiZWxGLCB1bml0SW5wdXRGXSA9IGNyZWF0ZVJhZGlvKCdGYXJlbmhlaXQnLCAnaW1wZXJpYWwnLCAndW5pdHMnLCBmYWxzZSk7XG5cbiAgLy8gICAgc3VibWl0XG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgc3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgc3VibWl0QnV0dG9uLnZhbHVlID0gJ1N1Ym1pdCc7XG5cbiAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKCFjaXR5SW5wdXQudmFsaWRpdHkudmFsaWQpIHJldHVybiBmYWxzZTtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICBjYWxsYmFjayhkYXRhLmdldCgnY2l0eScpLCBkYXRhLmdldCgndW5pdHMnKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93TG9hZChkb21JbnB1dHMsIGRvbU91dHB1dHMpIHtcbiAgLy8gIGVyYXNlIG9sZCBjb250ZW50XG4gIGRvbU91dHB1dHMuaW5uZXJUZXh0ID0gJyc7XG5cbiAgY29uc3QgbG9hZGluZ01lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9tT3V0cHV0cy5hcHBlbmRDaGlsZChsb2FkaW5nTWVzc2FnZSk7XG4gIGxvYWRpbmdNZXNzYWdlLmNsYXNzTmFtZSA9ICdsb2FkaW5nLWJveCc7XG4gIGxvYWRpbmdNZXNzYWdlLmlubmVyVGV4dCA9ICdOb3cgTG9hZGluZy4uLic7XG59XG5cbmZ1bmN0aW9uIHNob3dSZXN1bHRzKGRvbUlucHV0cywgZG9tT3V0cHV0cywgd2VhdGhlciwgc291cmNlUHJvbWlzZSkge1xuICAvLyAgZXJhc2Ugb2xkIGNvbnRlbnRcbiAgZG9tT3V0cHV0cy5pbm5lclRleHQgPSAnJztcblxuICAvLyAgZGlzcGxheSB0aGUgd2VhdGhlclxuICBjb25zdCBlbW9qaSA9IGNvdW50cnlDb2RlRW1vamkod2VhdGhlci5jb3VudHJ5KTtcbiAgY29uc3QgY2l0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb21PdXRwdXRzLmFwcGVuZENoaWxkKGNpdHkpO1xuICBjaXR5LmlubmVyVGV4dCA9IGAke3dlYXRoZXIuY2l0eX0gJHtlbW9qaX1gO1xuXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9tT3V0cHV0cy5hcHBlbmRDaGlsZCh0ZW1wKTtcbiAgdGVtcC5pbm5lclRleHQgPSB3ZWF0aGVyLnRlbXA7XG5cbiAgY29uc3QgY29uZGl0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb21PdXRwdXRzLmFwcGVuZENoaWxkKGNvbmRpdGlvbnMpO1xuICBjb25kaXRpb25zLmlubmVyVGV4dCA9IHdlYXRoZXIud2VhdGhlcjtcblxuICAvLyAgICBkaXNwbGF5IHRoZSBnaXBoeSByZXN1bHRcbiAgc291cmNlUHJvbWlzZS50aGVuKChzb3VyY2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaW1hZ2UgdG8gbG9hZDogJywgc291cmNlKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkb21PdXRwdXRzLmFwcGVuZENoaWxkKGltZyk7XG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgc291cmNlKTtcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdhbHQnLCBgSW1hZ2Ugb2YgJHt3ZWF0aGVyLndlYXRoZXJ9YCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93RXJyb3IoZG9tSW5wdXRzLCBkb21PdXRwdXRzLCBzZWFyY2hUZXJtKSB7XG4gIC8vICBlcmFzZSBvbGQgY29udGVudFxuICBkb21PdXRwdXRzLmlubmVyVGV4dCA9ICcnO1xuXG4gIGNvbnN0IGVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb21PdXRwdXRzLmFwcGVuZENoaWxkKGVycm9yTWVzc2FnZSk7XG4gIGVycm9yTWVzc2FnZS5jbGFzc05hbWUgPSAnZXJyb3ItYm94JztcbiAgZXJyb3JNZXNzYWdlLmlubmVyVGV4dCA9ICdGYWlsZWQgdG8gZmluZCByZXN1bHRzLiBQbGVhc2UgY2hlY2sgeW91ciBpbnB1dHMgYW5kIHRyeSBhZ2Fpbic7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc2hvd0hvbWUsIHNob3dMb2FkLCBzaG93UmVzdWx0cywgc2hvd0Vycm9yLFxufTtcbiIsImltcG9ydCBvcGVuV2VhdGhlciBmcm9tICcuL3dlYXRoZXInO1xuaW1wb3J0IGdpcGh5IGZyb20gJy4vZ2lwaHknO1xuaW1wb3J0IGRpc3BsYXkgZnJvbSAnLi9kaXNwbGF5JztcblxuY29uc3QgZG9tSW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvbS1pbnB1dHMnKTtcbmNvbnN0IGRvbU91dHB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZG9tLW91dHB1dHMnKTtcblxuLy8gIGFkZCBzb21lIGV4dHJhIGxvYWQgdGltZVxuY29uc3QgaW5zZXJ0RGVsYXkgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IG15UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoJ2ZvbycpO1xuICAgIH0sIGxlbmd0aCk7XG4gIH0pO1xuXG4gIHJldHVybiBteVByb21pc2U7XG59O1xuXG5jb25zdCBzdWJtaXRDYWxsYmFjayA9IChjaXR5LCB1bml0cykgPT4ge1xuICBkaXNwbGF5LnNob3dMb2FkKGRvbUlucHV0cywgZG9tT3V0cHV0cyk7XG4gIG9wZW5XZWF0aGVyLmdldFdlYXRoZXIoY2l0eSwgdW5pdHMpLnRoZW4oKHdlYXRoZXIpID0+IHtcbiAgICBjb25zdCB3ZWF0aGVyRGVsYXkgPSBpbnNlcnREZWxheSgyMDAwKTtcbiAgICB3ZWF0aGVyRGVsYXkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuICAgICAgY29uc3QgaW1nUHJvbWlzZSA9IGdpcGh5LmdldEltYWdlKHdlYXRoZXIua2V5d29yZCk7XG4gICAgICBkaXNwbGF5LnNob3dSZXN1bHRzKGRvbUlucHV0cywgZG9tT3V0cHV0cywgd2VhdGhlciwgaW1nUHJvbWlzZSk7XG4gICAgfSk7XG4gIH0sIChlcnJvcikgPT4ge1xuICAgIGRpc3BsYXkuc2hvd0Vycm9yKGRvbUlucHV0cywgZG9tT3V0cHV0cyk7XG4gIH0pO1xufTtcbmRpc3BsYXkuc2hvd0hvbWUoZG9tSW5wdXRzLCBkb21PdXRwdXRzLCBzdWJtaXRDYWxsYmFjayk7XG4iXSwibmFtZXMiOlsiYXN5bmMiLCJsb2NhdGlvbiIsInVuaXRzIiwianNvbiIsImZldGNoIiwibW9kZSIsInJlcXVlc3RXZWF0aGVyIiwiY29kIiwiRXJyb3IiLCJjaXR5IiwibmFtZSIsImNvdW50cnkiLCJzeXMiLCJ0ZW1wIiwibWFpbiIsIndlYXRoZXIiLCJrZXl3b3JkIiwicHJvY2Vzc1dlYXRoZXIiLCJ0ZXJtIiwicmVxdWVzdEltYWdlIiwiZGF0YSIsImltYWdlcyIsIm9yaWdpbmFsIiwidXJsIiwicHJvY2Vzc0ltYWdlIiwiQ0NfUkVHRVgiLCJkb21JbnB1dHMiLCJkb21PdXRwdXRzIiwiY2FsbGJhY2siLCJpbm5lclRleHQiLCJmb3JtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJjaXR5TGFiZWwiLCJjaXR5SW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ1bml0V3JhcHBlciIsImNsYXNzTmFtZSIsInVuaXRMYWJlbERlc2MiLCJjcmVhdGVSYWRpbyIsImxhYmVsIiwidmFsdWUiLCJncm91cCIsImNoZWNrZWQiLCJ1bml0TGFiZWwiLCJzdHlsZSIsInNldFByb3BlcnR5IiwidW5pdElucHV0IiwidW5pdExhYmVsQyIsInVuaXRJbnB1dEMiLCJ1bml0TGFiZWxGIiwidW5pdElucHV0RiIsInN1Ym1pdEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJwcmV2ZW50RGVmYXVsdCIsIkZvcm1EYXRhIiwiZ2V0IiwibG9hZGluZ01lc3NhZ2UiLCJzb3VyY2VQcm9taXNlIiwiZW1vamkiLCJjYyIsInRlc3QiLCJ0eXBlIiwiVHlwZUVycm9yIiwiY29kZVBvaW50cyIsInRvVXBwZXJDYXNlIiwibWFwIiwiYyIsImNvZGVQb2ludEF0IiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsImNvbmRpdGlvbnMiLCJ0aGVuIiwic291cmNlIiwiY29uc29sZSIsImxvZyIsImltZyIsInNlYXJjaFRlcm0iLCJlcnJvck1lc3NhZ2UiLCJxdWVyeVNlbGVjdG9yIiwiZGlzcGxheSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInJlc3BvbnNlIiwiaW1nUHJvbWlzZSIsImdpcGh5IiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9