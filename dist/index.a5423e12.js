!function(){function e(e){return e&&e.__esModule?e.default:e}var s=e(JSON.parse('{"personal":{"header":"Informações","avatar":"https://github.com/Mohamed28/my-resume/blob/master/src/assets/images/pictures/avatar.jpeg?raw=true","name":"Lucas","surname":"Barretto e Silva","birthday":{"day":"05","month":"08","year":"1986"},"email":"lucas.barretto86@gmail.com","nationality":"brasileiro","civil":"divorciado","phone":{"international":"+55","code":"11","number":"98597-9534","icon":"https://github.com/Mohamed28/my-resume/blob/master/src/assets/images/icons/whatsapp.png?raw=true"},"address":{"street":"Av. Alda","number":"1175","neighborhood":"Centro","city":"Diadema","state":"SP","country":"Brasil","zipcode":"09910-170"},"hobbies":"Guitarra, desenho, pintura, videogame","position":"Desenvolvedor Fullstack Junior"},"paragraphs":{"header":"Carta","contents":["Desenvolvedor de sistemas, formado desde Julho de 2020, com experiência de 2 anos na área, entre estágio e contrato, atualmente trabalhando em aplicação Ruby on Rails, sendo, responsável pelo desenvolvimento e manutenção, tanto frontend, quando no backend, com mais 300 commits e 300mil linhas de código adicionadas ao repositório do projeto, sou familiarizado com o dia a dia e rotina ágil. Agnóstico a linguagens, tenho interesse por oportunidades que me permitam trabalhar para adiquirir e aprimorar conhecimentos."]},"infos":[{"header":"Formação","items":[{"name":"FMU - Centro Universitário das Faculdades Metropolitanas Unidas","description":"Análise e desenvolvimento de Sistemas","from":"Jan 2018","to":"Jun 2020","details":""}]},{"header":"Experiência","items":[{"name":"Festalab Festas e Eventos","description":"Desenvolvedor Fullstack Junior","from":"Feb 2019","to":"present","details":""}]},{"header":"Cursos","items":[{"name":"Caelum","description":"Formação Java","from":"Jul 2017","to":"Ago 2017","details":""},{"name":"Caelum","description":"Desenvolvimento na prática com Spring, Testes, Git e Maven","from":"","to":"Set 2017","details":""}]},{"header":"Referências","items":[{"name":"Guilherme Yamakawa de Oliveira","description":"Festalab - Desenvolvedor Fullstack Sênior","from":"","to":"","details":"guilherme44@hey.com | +55-44-9980-1281"}]}],"links":{"header":"Site, Redes e Repos","items":[{"name":"LinkedIn","link":"https://www.linkedin.com/in/lucasbarretto"},{"name":"Respositório - Pessoal","link":"https://github.com/Mohamed28"},{"name":"Repositório - Festalab","link":"https://github.com/lucas-festalab"},{"name":"Mohamed28\'s Dome","link":"https://mohamed28.github.io/"}]},"skills":[{"header":"Idiomas","items":[{"name":"Inglês","level":"4"}]}]}'));class t{static build(e,s="",t={},...r){let a=document.createElement(e,t);if(""!==s&&(a.innerText=s),Object.keys(t).length>0){let e=Object.entries(t).filter((e=>e[0].match(/on\w*/))).flat();e.length>0&&(a.addEventListener(e[0].slice(2),e[1]),delete t[e[0]]),Object.keys(t).forEach((e=>a.setAttribute(e,t[e])))}return r.length>0&&r.forEach((e=>{Array.isArray(e)?a.appendChild(this.build(...e)):a.append(e)})),a}}const r={age:function(e){return this.filteredJoin([(new Date).getFullYear()-Number(e.year),"anos"]," ")},fullAddress:function(e){return this.filteredJoin(Object.values(e),", ")},fullName:function(e){return this.filteredJoin([e.name,e.surname]," ")},shortAddress:function(e){return this.filteredJoin([e.city,e.zipcode,e.country],", ")},phone:function(e){return this.filteredJoin([e.international,e.code,e.number],"-")},filteredJoin:function(e,s){return e.filter((e=>""!==e)).join(s)}};class a{constructor(e){return this.props=e,this.render()}render(){return t.build("section","",{id:"personal",class:"personal"},["h3",this.props.header,{class:"personal__header"}],["p",r.fullAddress(this.props.address),{class:"personal__address"}],["p",r.phone(this.props.phone),{class:"personal__phone"}],["a",this.props.email,{class:"personal__email",href:`mailto:${this.props.email}`}])}}class i{constructor(e){return this.props=e,this.render()}render(){return t.build("section","",{id:this.props.header,class:"links"},["h3",this.props.header,{class:"links__header"}],["ul","",{},...this.items(this.props.items)])}items(e){if(!(e.length<1))return e.map((e=>this.item(e)))}item(e){return t.build("li","",{},["a",e.name,{href:e.link,target:"_blank"}])}}class n{constructor(e){return this.props=e,this.render()}render(){return t.build("section","",{id:"skills",class:"skills"},["h3",this.props.header,{class:"skills__header"}],["div","",{class:"skills__items"},...this.items(this.props.items)])}items(e){if(!(e.length<1))return e.map((e=>this.item(e)))}item(e){return t.build("div","",{class:"items__item"},["h4",e.name,{class:"items__name"}],["meter","",{class:"items__level",value:e.level,min:"0",max:"5"}])}}class o{constructor(e){return this.props=e,this.render()}render(){return t.build("section","",{id:"paragraphs",class:"paragraphs"},["h3",this.props.header],...this.props.contents.map((e=>["p",e])))}}class l{constructor(e){return this.props=e,this.render()}render(){return t.build("section","",{class:"infos"},["h3",this.props.header,{class:"infos_header"}],["div","",{class:"items"},...this.items(this.props.items)])}items(e){if(!(e.length<1))return e.map((e=>this.item(e)))}item(e){return t.build("div","",{class:"items__item"},["h4",e.name,{class:"item__name"}],["p",e.description,{class:"item__description"}],["p",r.filteredJoin([e.from,e.to]," — "),{class:"item__from-to"}],["p",e.details,{class:"item__details"}])}}const d={generate:function(){const e=new jsPDF("p","pt","a4");document.querySelector(".header__avatar").classList.add("hidden"),e.addHTML(document.querySelector("#resume"),(()=>e.save("CV-Lucas-Barretto-e-Silva.pdf")))}};document.body.append(t.build("div","",{id:"app",class:"app"},["div","",{id:"resume"},new class{constructor(e){return this.props=e,this.render()}render(){return t.build("div","",{id:"header",class:"header"},["div","",{class:"header__block header__block--top"},["img","",{class:"header__avatar",src:this.props.avatar}],["h1",r.fullName(this.props),{class:"header__fullname"}]],["div","",{class:"header__block header__block--bottom"},["div","",{class:"header__info"},["span",this.props.position,{class:"header__position"}],["span",r.shortAddress(this.props.address),{class:"header__address"}],["span",r.phone(this.props.phone),{class:"header__phone"},["img","",{src:this.props.phone.icon,alt:"whatsapp-icon"}]]]])}}(s.personal),new class{constructor(e){return this.props=e,this.render()}render(){return t.build("main","",{id:"main",class:"main"},["div","",{id:"sidebar",class:"sidebar"},new a(this.props.personal),new i(this.props.links),...this.props.skills.map((e=>new n(e)))],["div","",{id:"content",class:"content"},new o(this.props.paragraphs),...this.props.infos.map((e=>new l(e)))])}}(s)],new class{constructor(e){return this.props=e,this.render()}render(){return t.build("footer","",{id:"footer",class:"footer"},["button","generate PDF",{onclick:this.props.generate,class:"footer__button footer__button--pdf"}])}}({generate:d.generate})))}();
//# sourceMappingURL=index.a5423e12.js.map