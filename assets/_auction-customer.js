!function(){const r=document.getElementById("_a-auction-container"),s=document.getElementById("_a-auction-items"),d=document.getElementById("_a-auction-loading"),c=document.getElementById("_a-auction-loading-table"),l=document.getElementById("_a-auction-no-results"),u=document.querySelector("#_a-auction-pagination-div > ._a-auction-pagination-div-left > button"),_=document.querySelector("#_a-auction-pagination-div > ._a-auction-pagination-div-right > button"),o=document.getElementById("_a-auction-query-delete"),m=document.getElementById("_a-auction-form-q"),v=document.getElementById("_a-auction-form-sort"),i=document.getElementById("_a-banner-close-btn"),n=document.getElementById("_a-banner-div"),p=document.getElementById("_a-customer-info"),t=document.getElementById("_a-form-btn"),g="https://auction-api.packettunnel.com",b={q:"_a-auction-form-q",s:"_a-auction-form-sort",p:null,v:null};let h,y,f,w,L=document.getElementById("_a-language-data").innerText;function $(t,e=!1){d.classList.add("_a-display-none"),[t,e=!1]=[t,e],n&&n.firstElementChild&&(e?n.firstElementChild.innerHTML=t:n.firstElementChild.innerText=t),n.classList.remove("_a-display-none");const a=window.setTimeout(function(){n.classList.add("_a-display-none")},1e4);i.addEventListener("click",function(){n.classList.add("_a-display-none"),window.clearTimeout(a)})}function E(t,e=null){!function(){const t=new URLSearchParams(window.location.search),e=document.querySelector("._a-auction-customer-panel-header"),a=e&&e.children,i=t.get("v"),n=4===a.length;i?n&&A(i,a):n&&A("all",a)}();var a={customer_id:p.getAttribute("data-customer-id"),customer_email:p.getAttribute("data-customer-email")};e=e?{...a,...e}:a;const i=new URLSearchParams(window.location.search);for(const o in b){var n=i.get(o);n&&!e.hasOwnProperty(o)&&(e[o]=n)}!function(t,e,a,i){let n;t=""+g+t;const o=["store_url="+r.getAttribute("data-shop-domain"),"store_url_alt="+Shopify.shop,"sid="+r.getAttribute("data-shop-id")];if(i&&i.params)for(const d in i.params)o.push(d+"="+i.params[d]);t+="?"+o.join("&");var s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");if(s.open(e,encodeURI(t)),s.onreadystatechange=function(){3<s.readyState&&(200===s.status?a(JSON.parse(s.responseText)):$(L.generic_error_message))},i&&i.headers)for(const c in i.headers)"application/json; charset=UTF-8"===i.headers[c]&&(n=1),s.setRequestHeader(c,i.headers[c]);i&&i.data&&"POST"===e?n?s.send(JSON.stringify(i.data)):s.send(i.data):s.send()}("/auctions/customer","GET",t,{headers:{"x-sesh-id":localStorage.getItem(window.location.origin),"x-sesh-token":p.getAttribute("data-customer-derples")},params:e})}function e(t=null){P(t),H();const e={};for(const i in b){var a=document.getElementById(b[i]);const n=b[i]&&a&&a.value;n&&n.length&&(e[i]=n.trim())}E(R,e)}function S(t){return t.toLocaleDateString(Shopify.locale,{weekday:"long",year:"numeric",month:"long",day:"numeric"})+" - "+t.toLocaleTimeString(Shopify.locale)}function k(t,e=!0){if(t=parseFloat(t),w!==y&&e&&(t*=Shopify.currency.rate),"amount"===f||"amount_no_decimals"===f)return t=t.toFixed(2),"JPY"===y&&(t=t.replace(/\.00/,"").replace(/\d{1,3}(?=(\d{3})+(?!\d))/g,"$&,")),h&&h.length?""+h+t:t+" "+y;t=t.toFixed(2).split(".");return""+h+t[0]+","+t[1]}function I(t){t=t&&t.value;return!(!t||!t.length)}function q(e){let a="";var i=e.length;for(let t=0;t<i;t++){var n=e[t],o=t<i-1?"_a-div-td _a-border-bottom-ddd":"_a-div-td";a+=`
            <div class="_a-div-tr _a-auction-customer-row-bid-history">
                <div class="${o}" data-label="${L.bid_verb}">${k(n.bid)}</div>
                <div class="${o}" data-label="${L.auction_table_currency}">${n.currency}</div>
                <div class="${o}" data-label="${L.date}">${S(new Date(n.bid_date))}</div>
            </div>
            `}return a}function a(t){if(t.e)$(L.generic_error_message);else{[h,y]=r.getAttribute("data-currency").replace(/<[^>]*>/g,"").split(/{{.*}}\s+|{.*}\s+/),w=r.getAttribute("data-shop-currency"),f=r.getAttribute("data-currency").match(/{{(.*)}}|{(.*)}/),f=f?f[1]||f[2]:null,R(t);for(const i in b){a=b[i]&&(e=i,a=window.location.href,e=e.replace(/[\[\]]/g,"\\$&"),(a=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(a))?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null);if(a){const n=document.getElementById(b[i]);n&&(n.value=a,"q"===i&&o.classList.remove("_a-display-none"))}}}var e,a}function B(){var t=this.getAttribute("data-view");P({view:t}),H(),E(R,{v:t})}function T(t){P({page:t.currentTarget.page}),H(),E(R)}function R(e){if(e&&!e.length)d.classList.add("_a-display-none"),c.classList.add("_a-display-none"),r.classList.remove("_a-display-none"),s.classList.add("_a-display-none"),l.classList.remove("_a-display-none");else{var a=s.lastElementChild;"TBODY"===a.tagName&&s.removeChild(a);let t="";for(const i of e)t+=function(e){let t="";var a=`<div>${L.bid_current}: ${k(e.highest_bid)}</div><div>${L.bid_starting}: ${k(e.starting_price)}</div>`;t=e.shopify_featured_image?`<img class="_a-auction-customer-img" src="${e.shopify_featured_image}" alt="${e.shopify_product_title}" />`:`
        <svg class="_a-img-none-auction" viewBox="2 2 28 28" id="icon" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <defs>
                    <style>.cls-1{fill:none;}</style>
                </defs>
                <title>no-image</title>
                <path d="M30,3.4141,28.5859,2,2,28.5859,3.4141,30l2-2H26a2.0027,2.0027,0,0,0,2-2V5.4141ZM26,26H7.4141l7.7929-7.793,2.3788,2.3787a2,2,0,0,0,2.8284,0L22,19l4,3.9973Zm0-5.8318-2.5858-2.5859a2,2,0,0,0-2.8284,0L19,19.1682l-2.377-2.3771L26,7.4141Z"></path><path d="M6,22V19l5-4.9966,1.3733,1.3733,1.4159-1.416-1.375-1.375a2,2,0,0,0-2.8284,0L6,16.1716V6H22V4H6A2.002,2.002,0,0,0,4,6V22Z"></path>
                <rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" width="32" height="32"></rect>
            </g>
        </svg>
        `;var i=new Date,n=new Date(e.end_date),o=e.auction_bids&&e.auction_bids.length,s=parseFloat(e.highest_bid),s=o&&s===parseFloat(e.auction_bids[0].bid)&&(!e.reserve_price||s>=parseFloat(e.reserve_price));let d;d=n<i&&s?`
            <a class="_a-auction-view-link" href="${e.shopify_product_url}">
                <h2>${e.shopify_product_title}</h2>
                <span class="_a-auction-customer-won">${L.auction_won}</span>
            </a>
            `:`
            <a class="_a-auction-view-link" href="${e.shopify_product_url}">
                <h2>${e.shopify_product_title}</h2>
            </a>
            `;let c=`
        <tr>
            <td class="_a-auction-customer-img-td">
                ${t}
            </td>
            <td>
                ${d}
            </td>
            <td class="_a-auction-mobile-label" data-label="${L.end_date}: ">
                <span>${S(n)}</span>
            </td>
            <td>
                <div class="_a-auction-customer-multi-row">
                    ${a}
                </div>
            </td>
            <td class="_a-auction-mobile-label" data-label="${L.auction_table_bid_count}: ">${e.bid_count}</td>
            <td class="_a-margin-bottom-20">
                <div class="_a-auction-customer-multi-row">
                    <a href="${e.shopify_product_url}" target="_blank">
                        <button type="button">${L.auction_view}</button>
                    </a>
                    <button class="_a-view-bid-history" type="button">${L.auction_view_bid_history}</button>
                </div>
            </td>
        </tr>
        `;if(e.automatic_bids||o){let t="";e.automatic_bids&&(a=q(e.automatic_bids),t+=`
                    <div>
                        <h3 class="_a-auction-customer-bid-title _a-margin-bottom-20">
                            ${L.auction_table_automatic_bid_history}
                        </h3>
                    </div>
                    <div class="_a-div-table">
                        <div class="_a-div-tr _a-div-th">
                            <div class="_a-div-td _a-border-bottom-ddd">${L.bid_verb}</div>
                            <div class="_a-div-td _a-border-bottom-ddd">${L.auction_table_currency}</div>
                            <div class="_a-div-td _a-border-bottom-ddd">${L.date}</div>
                        </div>
                        ${a}
                    </div>
                `),o&&(o=q(e.auction_bids),e=e.automatic_bids?'<div class="_a-margin-top-20">':"<div>",t+=`
                    ${e}
                        <h3 class="_a-auction-customer-bid-title _a-margin-bottom-20">
                            ${L.auction_table_bid_history}
                        </h3>
                    </div>
                    <div class="_a-div-table">
                        <div class="_a-div-tr _a-div-th">
                            <div class="_a-div-td _a-border-bottom-ddd">${L.bid_verb}</div>
                            <div class="_a-div-td _a-border-bottom-ddd">${L.auction_table_currency}</div>
                            <div class="_a-div-td _a-border-bottom-ddd">${L.date}</div>
                        </div>
                        ${o}
                    </div>
                `),c+=`
                <tr>
                    <td colspan="6" class="_a-auction-customer-bid-history-container">
                        <div class="_a-auction-customer-row-bid-history">
                            ${t}
                        </div>
                    </td>
                </tr>
            `}return c}(i);s.insertAdjacentHTML("beforeend",`<tbody>${t}</tbody>`);a=s.querySelectorAll("._a-view-bid-history");if(a&&a.length)for(const n of a)n.addEventListener("click",()=>{if(n.parentElement&&n.parentElement.parentElement.parentElement&&n.parentElement.parentElement.parentElement){const t=n.parentElement.parentElement.parentElement.nextElementSibling,e=t&&t.querySelector("._a-auction-customer-row-bid-history");e&&e.classList.toggle("_a-auction-customer-row-expand")}});a=e[0].total_auctions,e=Math.ceil(a/10);if(u.removeEventListener("click",T),_.removeEventListener("click",T),1<e){const o=new URLSearchParams(window.location.search);a=o.get("p");a?1<(a=parseInt(a))&&a<e?x("_a-auction-pagination-btn-active","_a-auction-pagination-btn-active","_a-auction-pagination-btn-disabled","_a-auction-pagination-btn-disabled",a):x("_a-auction-pagination-btn-active","_a-auction-pagination-btn-disabled","_a-auction-pagination-btn-disabled","_a-auction-pagination-btn-active",a):x("_a-auction-pagination-btn-disabled","_a-auction-pagination-btn-active","_a-auction-pagination-btn-active","_a-auction-pagination-btn-disabled",1)}else x("_a-auction-pagination-btn-disabled","_a-auction-pagination-btn-disabled","_a-auction-pagination-btn-active","_a-auction-pagination-btn-active",0);d.classList.add("_a-display-none"),r.classList.remove("_a-display-none"),s.classList.remove("_a-display-none"),l.classList.add("_a-display-none"),c.classList.add("_a-display-none")}}function A(t,e){for(const a of e)a.removeEventListener("click",B),t===a.getAttribute("data-view")?M(a,"_a-auction-customer-header-inactive","_a-auction-customer-header-active"):(M(a,"_a-auction-customer-header-active","_a-auction-customer-header-inactive"),a.addEventListener("click",B))}function x(t,e,a,i,n){u.classList.add(t),_.classList.add(e),u.classList.remove(a),_.classList.remove(i),"_a-auction-pagination-btn-active"===t&&(t=n-1,u.page=1==t?0:t,u.addEventListener("click",T)),"_a-auction-pagination-btn-active"===e&&(_.page=n+1,_.addEventListener("click",T))}function P(t=null){if(history){const a=new URLSearchParams(window.location.search);t&&(a.get("p")&&(t.view||I(m)||I(v))&&a.delete("p"),t.hasOwnProperty("page")&&(t.page?a.set("p",t.page):a.delete("p")),t.hasOwnProperty("query")&&!t.query&&(m.value="",a.delete("q")),t.hasOwnProperty("sort")&&!t.sort&&a.delete("s"),t.view&&("all"!==t.view?a.set("v",t.view):a.delete("v")));for(const i in b){var e=document.getElementById(b[i]);const n=b[i]&&e&&e.value;n&&n.length&&a.set(i,n.trim())}t=a.toString(),t=t&&t.length?"?"+t:window.location.pathname;history.pushState({},document.title,t)}}function H(){c.classList.remove("_a-display-none"),l.classList.add("_a-display-none"),s.classList.add("_a-display-none")}function M(t,e,a){t.classList.contains(e)&&t.classList.toggle(e),t.classList.contains(a)||t.classList.toggle(a)}L=JSON.parse(L.replace(/&quot;/g,'"').replace(/=&gt;/g,":")),o.addEventListener("click",function(t){t.preventDefault(),e({query:0}),this.classList.add("_a-display-none")}),m.addEventListener("keydown",function(t){"Enter"===t.key&&(t.preventDefault(),e({query:this.value.length}))}),m.addEventListener("keyup",function(t){this.value&&0<this.value.length&&o.classList.contains("_a-display-none")?o.classList.remove("_a-display-none"):this.value||o.classList.add("_a-display-none")}),v.addEventListener("change",function(){e({sort:this.value.length})}),t.addEventListener("click",function(t){t.preventDefault(),e()}),p?E(a):$(`${L.auction_login_error}  <a href="/account/login" class="_a-auction-customer-login-link">${L.auction_login_link}</a>`,html=!0)}();