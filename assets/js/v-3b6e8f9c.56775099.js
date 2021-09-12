"use strict";(self.webpackChunkvue_gapi=self.webpackChunkvue_gapi||[]).push([[772],{7757:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-3b6e8f9c",path:"/examples/vue-router.html",title:"Vue Router",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:3,title:"router/index.js",slug:"router-index-js",children:[]}],filePathRelative:"examples/vue-router.md",git:{updatedTime:163146972e4,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},7874:(n,s,a)=>{a.r(s),a.d(s,{default:()=>x});var e=a(6252);const t=(0,e._)("h1",{id:"vue-router",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#vue-router","aria-hidden":"true"},"#"),(0,e.Uk)(" Vue Router")],-1),p=(0,e._)("p",null,"If you are building a larger application, you will need to check whether the user is authenticated before allowing navigation to some pages such as a user profile or administration console.",-1),o=(0,e.Uk)("For this, you can elevate standard Vue Router "),c={href:"https://next.router.vuejs.org/guide/advanced/navigation-guards.html",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("navigation guards"),l=(0,e.Uk)(" with the usage of the "),r={href:"/reference/GoogleAuthService/__index__.html#googleauthservice",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("$gapi"),k=(0,e.Uk)(" instance."),b=(0,e.uE)('<h3 id="router-index-js" tabindex="-1"><a class="header-anchor" href="#router-index-js" aria-hidden="true">#</a> router/index.js</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>\n<span class="token keyword">import</span> VueRouter <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span>\n\n<span class="token keyword">const</span> router <span class="token operator">=</span> VueRouter<span class="token punctuation">.</span><span class="token function">createRouter</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  history<span class="token operator">:</span> VueRouter<span class="token punctuation">.</span><span class="token function">createWebHashHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  routes<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;/:pathMatch(.*)*&#39;</span><span class="token punctuation">,</span>\n      redirect<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>\n      component<span class="token operator">:</span> <span class="token punctuation">{</span> template<span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;Login&lt;/div&gt;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      path<span class="token operator">:</span> <span class="token string">&#39;/profile&#39;</span><span class="token punctuation">,</span>\n      name<span class="token operator">:</span> <span class="token string">&#39;Profile&#39;</span><span class="token punctuation">,</span>\n      component<span class="token operator">:</span> <span class="token punctuation">{</span> template<span class="token operator">:</span> <span class="token string">&#39;&lt;div&gt;Profile&lt;/div&gt;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      meta<span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token comment">// (1) Denote authenticated page</span>\n        authRequired<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// (2) Navigation guard to check whether user is signed in</span>\nrouter<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>to<span class="token punctuation">.</span>matched<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">record</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> record<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>authRequired<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$gapi<span class="token punctuation">.</span><span class="token function">isSignedIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">isSignedIn</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>isSignedIn<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;You must be logged in to see this page&#39;</span><span class="token punctuation">)</span>\n        <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">{</span> path<span class="token operator">:</span> <span class="token string">&#39;/login&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> router\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div>',2),m=(0,e.Uk)("Denote an authenticated page via a "),d={href:"https://next.router.vuejs.org/guide/advanced/meta.html",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("route meta field"),h=(0,e.Uk)("."),f=(0,e.Uk)("Check authenticated state via "),v={href:"/reference/GoogleAuthService/__index__.html#issignedin-%E2%87%92-promise-boolean",target:"_blank",rel:"noopener noreferrer"},_=(0,e._)("code",null,"isSignedIn",-1),w=(0,e.Uk)(". If user is signed, follow with navigation to desired page, otherwise redirect to login page."),x={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,(0,e._)("p",null,[o,(0,e._)("a",c,[u,(0,e.Wm)(a)]),l,(0,e._)("a",r,[i,(0,e.Wm)(a)]),k]),b,(0,e._)("ol",null,[(0,e._)("li",null,[(0,e._)("p",null,[m,(0,e._)("a",d,[g,(0,e.Wm)(a)]),h])]),(0,e._)("li",null,[(0,e._)("p",null,[f,(0,e._)("a",v,[_,(0,e.Wm)(a)]),w])])])],64)}}}}]);