webpackJsonp([1],{"+2cl":function(t,e){},"/eQD":function(t,e){},"4Uwr":function(t,e,s){t.exports=s.p+"static/img/logo.a07d14f.jpg"},"5kWq":function(t,e){},ANuU:function(t,e){},CMvz:function(t,e){},"Cj3+":function(t,e){},GZvD:function(t,e){},GrYt:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("yIEv");var n=s("OIh9"),a=(s("jAcA"),s("86U2")),o=(s("4yKu"),s("wolx")),i=(s("mMXg"),s("qYlo")),r=(s("nI2B"),s("qWG/")),l=(s("I4j4"),s("7fQT")),c=(s("Kazo"),s("3EFv")),u=(s("1WEx"),s("jzDj")),h=(s("XmAh"),s("il3B")),d=(s("Xrj1"),s("1nur")),v=(s("MVd3"),s("XXPT")),p=(s("yffH"),s("sdMh")),f=(s("OLZS"),s("4j1Q")),m=(s("10Qn"),s("UQoe")),_=(s("3Lne"),s("SSsa")),g=(s("eqfM"),s("/QYm")),b=(s("RgoE"),s("0KWt")),w=(s("1E9F"),s("2Ux5")),y=(s("MY4N"),s("0zAV")),x=(s("i0mo"),s("Hkar")),k=(s("OWWB"),s("1fWZ")),q=(s("3ab0"),s("bHMa")),S=(s("FO5P"),s("woHG")),C=(s("k3b4"),s("+2ln")),I=s("mtWM"),A=s.n(I),T=(s("CMvz"),s("7+uW")),$=s("Rf8U"),z=s.n($),F={name:"App",data:function(){return{tabActive:0,username:localStorage.getItem("username"),token:localStorage.getItem("token"),navTitle:["计算机&应知刷题","题目搜索","高考数据","个人中心"],totalRecords:0}},created:function(){this.username&&this.getTotalRecords()},beforeUpdate:function(){},methods:{getTotalRecords:function(){if(console.log("http://132.232.7.38"),this.username){this.username;var t=this;this.axios.get("http://132.232.7.38/getfav.php",{params:{records:!0,username:this.username,token:this.token}}).then(function(e){t.totalRecords=e.data})}},updataTitle:function(t){this.tabActive=t,console.log(t)},onClickLeft:function(){location.href="#/",this.tabActive=0},gotoUser:function(){location.href="#/user",this.tabActive=3}}},P={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("van-nav-bar",{attrs:{title:t.navTitle[t.tabActive]},on:{"click-left":t.onClickLeft,"click-right":t.gotoUser}},[s("van-icon",{attrs:{slot:"left",name:"wap-home"},slot:"left"}),t._v(" "),s("van-icon",{attrs:{slot:"right",name:"contact"},slot:"right"})],1),t._v(" "),s("transition",[s("keep-alive",[s("router-view",{staticStyle:{"margin-bottom":"25%"},attrs:{totalRecords:t.totalRecords},on:{updataTitle:t.updataTitle}})],1)],1),t._v(" "),s("van-tabbar",{model:{value:t.tabActive,callback:function(e){t.tabActive=e},expression:"tabActive"}},[s("van-tabbar-item",{attrs:{icon:"aim",to:"/"}},[t._v("做题")]),t._v(" "),s("van-tabbar-item",{attrs:{icon:"search",to:"/search"}},[t._v("题目搜索")]),t._v(" "),s("van-tabbar-item",{attrs:{icon:"records",to:"/info"}},[t._v("高考数据")]),t._v(" "),s("van-tabbar-item",{attrs:{icon:"contact",info:t.totalRecords,to:"/user"},on:{click:t.getTotalRecords}},[t._v("我的")])],1)],1)},staticRenderFns:[]};var R,O,B,E=s("VU/8")(F,P,!1,function(t){s("+2cl")},null,null).exports,Q=s("/ocq");localStorage.getItem("username")&&(O=localStorage.getItem("username")),localStorage.getItem("token")&&(B=localStorage.getItem("token"));var U={name:"quizbody",data:function(){return{message:"答题系统正在逐步完善，有好的建议或意见都可以联系企鹅861729091",category_id:0,questionCount:10,showPop:!1,showAnalysis:!1,showSetting:!1,noTips:!1,q_channel:1,showAddFav:!1,showRmFav:!0,isFavs:!1,categories:["信息理论","进制转换","信息安全","计算机系统","计算机硬件","程序设计","计算机网络","多媒体","AI、云计算、大数据、IOT","全部随机"],questions:[{title:"数据加载中……",A:"数据加载中……",B:"数据加载中……",C:"数据加载中……",D:"数据加载中……",time:""}],userAnswer:[],btnTypes:{A:"default",B:"default",C:"default",D:"default"},questionIndex:0}},created:function(){this.getQuestions(),this.getMessage(),localStorage.setItem("alertCode","1")},computed:{favTimeFixed:function(){var t=this.questions,e=this.questionIndex;return t[e].time?"收藏时间:"+t[e].time:""},btnTypesFixed:function(){return this.btnTypes},percentage:function(){return parseInt((this.questionIndex+1)/this.questions.length*100)},catButton:function(){return this.category_id?"当前考点:"+this.categories[this.category_id-1]:"（当前默认随机）点击选择考点"},rightCount:function(){for(var t=0,e=0;e<this.questions.length;e++)this.userAnswer[e]==this.questions[e].answer&&t++;return t}},methods:{onOpenFavs:function(){if(!O||!B)return this.$toast('未登录哦，点击下方"我的"登录或注册后使用收藏功能~'),void(this.isFavs=!1);this.isFavs?this.$toast("开启后只会抽自己收藏的题目哦~"):this.$toast("已关闭收藏抽题~")},onOpenTips:function(){1==this.noTips?this.$toast({message:"开启考试模式后，将不再提示选项是否正确。\n\n                    完成所有题目后，系统将给出本次答题成绩。\n                    ",duration:4e3}):this.$toast({message:"已关闭考试模式"})},getMessage:function(){var t=this;this.axios.get("http://132.232.7.38/msg.php").then(function(e){t.message=e.data})},onChangeCount:function(){this.$toast("抽题数："+this.questionCount)},onSelectCategory:function(t,e){this.category_id=e+1,this.showPop=!1},toaster:function(t,e){this.$toast({duration:e||400,message:t})},getQuestions:function(){R=this.$toast.loading({mask:!0,message:"加载中..."});var t=this;this.axios.get("http://132.232.7.38/getpro.php",{params:{count:this.questionCount,category_id:this.category_id,q_channel:this.q_channel,isfavs:this.isFavs?1:0,username:O}}).then(function(e){t.userAnswer.length=e.data.length,t.questionCount=e.data.length,t.questions=e.data,R.clear(),t.$toast.success({message:"载入成功",duration:400})})},rmFav:function(t){var e=this;this.axios.get("http://132.232.7.38/rmfav.php",{params:{username:O,id:t,token:B}}).then(function(t){e.toaster("已移除")})},showAnswer:function(){var t=this.questions[this.questionIndex].answer;this.btnTypes[t]="primary"},addfav:function(t){if(O&&B){var e=this;this.axios.get("http://132.232.7.38/addfav.php",{params:{id:t,username:O,token:B}}).then(function(t){"1"==t.data?e.$toast.success({message:"已收藏",duration:400}):e.$toast.fail({message:"已经收藏过啦",duration:400})})}else this.$toast('未登录哦，点击下方"我的"登录或注册后使用收藏功能~')},checkAnswer:function(t){var e=this.questions,s=this.questionIndex;if(this.clearOptions(),this.$set(this.userAnswer,this.questionIndex,t),this.noTips)return console.log(s),void(this.btnTypes[t]="primary");this.questionIndex+1==this.questionCount&&(this.showAnalysis=!0),t==e[s].answer?(this.toaster("回答正确"),this.btnTypes[t]="primary"):(this.toaster("回答错误"),this.btnTypes[t]="warning")},nextQuestion:function(){this.clearOptions(),this.questionIndex<this.questions.length-1?(this.questionIndex++,this.showUserOptions()):(this.showAnalysis=!0,this.toaster("到底啦！想继续做题请点继续做题哦~",1200))},lastQuestion:function(){this.questionIndex>0?(this.questionIndex--,this.showUserOptions()):this.toaster("到顶啦！",600),this.noTips||this.clearOptions()},clearOptions:function(){this.btnTypes.A="default",this.btnTypes.B="default",this.btnTypes.C="default",this.btnTypes.D="default",this.showAddFav=!1,this.showRmFav=!0},showUserOptions:function(){this.clearOptions();var t=this.userAnswer[this.questionIndex];this.btnTypes[t]="primary"},again:function(){this.getQuestions(),this.clearOptions(),this.userAnswer=[],this.questionIndex=0}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quizbody",staticStyle:{"margin-top":"5px"}},[s("meta",{attrs:{content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0",name:"viewport"}}),t._v(" "),s("van-popup",{staticStyle:{width:"100%",height:"84%"},attrs:{position:"right",overlay:!1},model:{value:t.showAnalysis,callback:function(e){t.showAnalysis=e},expression:"showAnalysis"}},[s("div",{staticStyle:{"padding-top":"20px"}},[s("h3",[t._v("答对:"),s("a",{staticStyle:{color:"green"}},[t._v(t._s(t.rightCount))]),t._v(" / "+t._s(t.questionCount))]),t._v(" "),s("h3",[t._v("得分:"),s("a",{staticStyle:{color:"green"}},[t._v(t._s((t.rightCount/t.questionCount*100).toFixed(2)))]),t._v(" / 100")]),t._v(" "),s("button",{staticClass:"myBtn",on:{click:function(e){t.again(),t.showAnalysis=!t.showAnalysis}}},[t._v("继续做题")]),t._v(" "),s("button",{staticClass:"myBtn",on:{click:function(e){t.showAnalysis=!t.showAnalysis}}},[t._v("返回")]),t._v(" "),s("h1",[t._v("本次错题")]),t._v(" "),s("table",t._l(t.userAnswer,function(e,n){return e!=t.questions[n].answer?s("tbody",{key:n},[s("tr",[s("td",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.075)"},attrs:{colspan:"2"},domProps:{innerHTML:t._s(n+1+"、"+t.questions[n].title)}})]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.questions[n].A))]),t._v(" "),s("td",[t._v(t._s(t.questions[n].B))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(t.questions[n].C))]),t._v(" "),s("td",[t._v(t._s(t.questions[n].D))])]),t._v(" "),s("tr",[s("td",[t._v("答案["),s("strong",{staticStyle:{color:"green"}},[t._v(t._s(t.questions[n].answer))]),t._v("]")]),t._v(" "),s("td",[t._v("我的答案:"),s("span",{staticStyle:{color:"red","font-weight":"bold"}},[t._v(t._s(e||"未选"))])])])]):t._e()}))])]),t._v(" "),s("div",{attrs:{id:"options"}},[s("van-progress",{attrs:{percentage:parseFloat(t.percentage.toFixed(1))}}),t._v(" "),s("div",{attrs:{id:"title"}},[s("strong",[t._v(t._s(t.questionIndex+1+"、"+t.questions[t.questionIndex].title)),s("a",{staticStyle:{color:"green"}},[s("br"),t._v(" "+t._s(t.favTimeFixed))])])]),t._v(" "),s("van-button",{staticClass:"options",attrs:{size:"large",type:t.btnTypes.A,text:t.questions[t.questionIndex].A},on:{click:function(e){t.checkAnswer("A")}}}),t._v(" "),s("van-button",{staticClass:"options",attrs:{size:"large",type:t.btnTypes.B,text:t.questions[t.questionIndex].B},on:{click:function(e){t.checkAnswer("B")}}},[t._v(t._s(t.questions[t.questionIndex].B))]),t._v(" "),s("van-button",{staticClass:"options",attrs:{size:"large",type:t.btnTypes.C,text:t.questions[t.questionIndex].C},on:{click:function(e){t.checkAnswer("C")}}},[t._v(t._s(t.questions[t.questionIndex].C))]),t._v(" "),s("van-button",{staticClass:"options",attrs:{size:"large",type:t.btnTypes.D,text:t.questions[t.questionIndex].D},on:{click:function(e){t.checkAnswer("D")}}},[t._v(t._s(t.questions[t.questionIndex].D))])],1),t._v(" "),s("div",{attrs:{id:"btns"}},[t.isFavs?[s("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showAddFav,expression:"showAddFav"}],staticClass:"myBtn",attrs:{size:"small",plain:""},on:{click:function(e){t.showAddFav=!1,t.showRmFav=!0,t.addfav(t.questions[t.questionIndex].ID)}}},[s("van-icon",{attrs:{name:"like-o"}}),t._v("我点错了~重新收藏")],1),t._v(" "),s("van-button",{directives:[{name:"show",rawName:"v-show",value:t.showRmFav,expression:"showRmFav"}],staticClass:"myBtn",attrs:{size:"small",plain:""},on:{click:function(e){t.showAddFav=!0,t.showRmFav=!1,t.rmFav(t.questions[t.questionIndex].ID)}}},[s("van-icon",{attrs:{name:"clear"}}),t._v("我会做了~移除这题")],1)]:[s("van-button",{staticClass:"myBtn",attrs:{size:"small",plain:""},on:{click:function(e){t.addfav(t.questions[t.questionIndex].ID)}}},[s("van-icon",{attrs:{name:"like-o"}}),t._v("加入收藏")],1)],t._v(" "),s("br"),t._v(" "),s("button",{staticClass:"myBtn",staticStyle:{width:"47%"},attrs:{nowrap:""},on:{click:t.lastQuestion}},[t._v("上一题")]),t._v(" "),s("button",{staticClass:"myBtn",staticStyle:{width:"47%"},attrs:{nowrap:""},on:{click:t.nextQuestion}},[t._v("下一题")]),t._v(" "),t.noTips?t._e():s("button",{staticClass:"myBtn",staticStyle:{width:"96%"},on:{click:t.showAnswer}},[t._v("显示答案")]),t._v(" "),s("van-button",{staticStyle:{margin:"5px",width:"96%"},attrs:{type:"default",round:!0},on:{click:function(e){t.showSetting=!t.showSetting}}},[s("van-icon",{attrs:{name:"setting",size:"large"}}),t._v("抽题设置\n    ")],1),t._v(" "),s("van-popup",{attrs:{position:"bottom ",overlay:!0},model:{value:t.showSetting,callback:function(e){t.showSetting=e},expression:"showSetting"}},[s("van-panel",{staticStyle:{border:"2px solid #eee"},attrs:{title:"当前抽题:"+t.questionCount,desc:t.catButton,status:""}},[s("div",[s("span",{staticStyle:{color:"#555"}},[t._v("滑动选择抽题数（5-100）")]),t._v(" "),s("van-slider",{staticStyle:{padding:"5px",margin:"10px"},attrs:{step:5,"bar-height":"10px",max:100,min:5},on:{change:t.onChangeCount},model:{value:t.questionCount,callback:function(e){t.questionCount=e},expression:"questionCount"}}),t._v(" "),s("van-button",{attrs:{type:"default",size:"large",plain:""},on:{click:function(e){t.showPop=!0}}},[t._v(t._s(t.catButton))]),t._v(" "),s("div",[s("van-switch-cell",{attrs:{title:"开启考试模式->"},on:{change:t.onOpenTips},model:{value:t.noTips,callback:function(e){t.noTips=e},expression:"noTips"}}),t._v(" "),s("van-switch-cell",{attrs:{title:"从我的收藏抽题->"},on:{change:t.onOpenFavs},model:{value:t.isFavs,callback:function(e){t.isFavs=e},expression:"isFavs"}})],1),t._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:t.categories},on:{confirm:t.onSelectCategory,cancel:function(e){t.showPop=!1}}})],1)],1),t._v(" "),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("van-button",{attrs:{type:"danger",size:"small"},on:{click:function(e){t.questionCount=10,t.category_id=0,t.again()}}},[t._v("恢复默认")]),t._v(" "),s("van-button",{attrs:{size:"small",type:"danger"},on:{click:function(e){t.again(),t.showSetting=!t.showSetting}}},[t._v("应用设置")])],1)])],1),t._v(" "),s("van-notice-bar",{attrs:{text:t.message}}),t._v(" "),t._m(0)],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{attrs:{href:"http://132.232.7.38/old/",type:"primary"}},[e("h3",[this._v("新版用的不爽？点我使用老版")])])}]};var D={name:"home",components:{quizbody:s("VU/8")(U,L,!1,function(t){s("T2fd")},"data-v-264d8338",null).exports},created:function(){this.$emit("updataTitle",0)}},M={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"home"}},[e("quizbody")],1)},staticRenderFns:[]},V=s("VU/8")(D,M,!1,null,null,null).exports,j={name:"user",props:["totalRecords"],data:function(){return{username:localStorage.getItem("username")}},mounted:function(){this.$emit("updataTitle",3),this.fillGraph()},methods:{logout:function(){localStorage.clear(),location.reload()},fillGraph:function(){this.axios.get("http://132.232.7.38./ratio.php",{params:{username:this.username,token:localStorage.getItem("token")}}).then(function(t){var e=echarts.init(document.getElementById("chart")),s={title:{text:"我的收藏情况",x:"center"},series:[{name:"销量",type:"pie",radius:"43%",data:t.data,label:{normal:{show:!0,formatter:"{c}#{b}"}}}]};e.setOption(s)}).catch(function(t){console.log("网络错误!")})}}},H={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user"}},[n("van-cell-group",[n("van-field",{attrs:{value:t.username,label:"用户名","left-icon":"contact",disabled:""}}),t._v(" "),n("van-cell",{attrs:{value:"查看",icon:"like-o",to:"/marked","is-link":""}},[n("template",{slot:"title"},[n("span",{staticClass:"van-cell-text"},[t._v("我的收藏")]),t._v(" "),n("van-tag",{attrs:{type:"danger"}},[t._v(" "+t._s(t.totalRecords))])],1)],2)],1),t._v(" "),n("br"),n("span",[t._v("我的收藏情况")]),t._v(" "),n("div",{staticStyle:{width:"95%",height:"400px"},attrs:{id:"chart"}}),t._v(" "),n("button",{staticClass:"myBtn",staticStyle:{width:"95%"},on:{click:t.logout}},[t._v("注销登录")]),t._v(" "),n("br"),t._m(0),t._v(" "),n("br"),n("img",{staticStyle:{width:"90px","border-radius":"50%","margin-bottom":"-3px"},attrs:{src:s("4Uwr")}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[this._v("懒得写修改密码功能了~"),e("br"),this._v("修改密码或找回密码请联系："),e("br"),this._v("作者"),e("a",{attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=861729091&menu=yes"}},[this._v("@alva")])])}]},W=s("VU/8")(j,H,!1,null,null,null).exports,G={name:"search",data:function(){return{keyword:null,questions:[]}},created:function(){this.$emit("updataTitle",1)},methods:{onSearch:function(){if(this.keyword){var t=this.$toast.loading({mask:!0,message:"加载中..."}),e=this.keyword,s=this;this.axios.get("http://132.232.7.38/qsearch.php",{params:{keyword:e}}).then(function(e){for(var n=e.data.questions,a=e.data.totalRecords,o=0;o<n.length;o++)console.log(n[o]),n[o].title=n[o].title.replace(s.keyword,'<span style="color:red;font-style:oblisque;font-weight:bold;">'+s.keyword+"</span>");s.questions=n;var i=s.questions.length;t.clear(),i>0?a>50?s.$toast("匹配到"+a+"题，考虑到性能，只显示前50个结果~"):s.$toast.success("匹配到"+a+"题~"):s.$toast.fail("没搜到哦，关键词两位最佳~")})}else this.$toast.fail("请输入搜索关键词~")}}},N={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"search"}},[s("van-search",{attrs:{placeholder:"关键词两位最佳~","show-action":""},on:{search:t.onSearch},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}},[s("div",{attrs:{slot:"action"},on:{click:t.onSearch},slot:"action"},[t._v("搜索")])]),t._v(" "),s("div",{staticStyle:{transition:"height 5"},attrs:{id:"qs"}},[t.questions.length>0?s("table",{attrs:{name:"fade"}},t._l(t.questions,function(e,n){return s("tbody",{key:n},[s("tr",[s("td",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.075)"},attrs:{colspan:"2"},domProps:{innerHTML:t._s(n+1+"、"+e.title)}})]),t._v(" "),s("tr",[s("td",[t._v(t._s(e.A))]),t._v(" "),s("td",[t._v(t._s(e.B))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(e.C))]),t._v(" "),s("td",[t._v(t._s(e.D))])]),t._v(" "),s("tr",[s("td",[t._v("答案["),s("strong",{staticStyle:{color:"green"}},[t._v(t._s(e.answer))]),t._v("]")]),t._v(" "),s("td",[t._v("难度:"),s("span",{staticStyle:{color:"green","font-weight":"bold"}},[t._v(t._s(e.hard))])])])])})):s("van-notice-bar",{attrs:{text:"还没有搜到任何题目哦~"}})],1)],1)},staticRenderFns:[]};var X=s("VU/8")(G,N,!1,function(t){s("OHT1")},null,null).exports,Y={name:"marked",data:function(){return{showPop:!1,PageList:[],questions:[],username:localStorage.getItem("username"),currentPage:1,pageCount:0,isLoading:!1,token:localStorage.getItem("token")}},computed:{currentQuestions:function(){this.updataQuestions(this.username,this.currentPage)}},created:function(){if(this.username){this.$emit("updataTitle",3)}},activated:function(){this.updataQuestions(this.username,this.currentPage)},methods:{onSelectPage:function(t,e){this.currentPage=e+1,this.showPop=!1},onRefresh:function(){this.updataQuestions()},rmFav:function(t){var e=this;this.axios.get("http://132.232.7.38/rmfav.php",{params:{username:e.username,id:t,token:e.token}}).then(function(t){e.updataQuestions()})},updataQuestions:function(t,e){var s=this.$toast.loading({mask:!0,message:"加载中..."}),n=this;this.axios.get("http://132.232.7.38/getfav.php",{params:{username:this.username,page:this.currentPage,token:this.token}}).then(function(t){n.pageCount=Math.ceil(t.data[0]/15);for(var e=1;e<=n.pageCount;e++)n.PageList.push(e);n.questions=t.data,n.isLoading=!1,s.clear()})}}},Z={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"marked"}},[s("div",{staticStyle:{},attrs:{id:"container"}},[s("meta",{attrs:{name:"viewport",content:"width=device-width,initial-scale=1.0"}}),t._v(" "),s("van-pull-refresh",{on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[s("div",{attrs:{id:"qs"}},[t._v("\n        "+t._s(t.currentQuestions)+"\n        "),"string"!=typeof t.questions?s("table",t._l(t.questions,function(e,n){return 0!=n?s("tbody",{key:n},[s("tr",[s("td",{staticStyle:{"background-color":"rgba(0, 0, 0, 0.075)"},attrs:{colspan:"2"}},[t._v("\n                "+t._s(n+"、"+e.title)+"\n                "),s("van-button",{staticStyle:{float:"right"},attrs:{size:"mini"},on:{click:function(s){t.rmFav(e.ID)}}},[t._v("删除")])],1)]),t._v(" "),s("tr",[s("td",[t._v(t._s(e.A))]),t._v(" "),s("td",[t._v(t._s(e.B))])]),t._v(" "),s("tr",[s("td",[t._v(t._s(e.C))]),t._v(" "),s("td",[t._v(t._s(e.D))])]),t._v(" "),s("tr",[s("td",[t._v("答案["),s("strong",{staticStyle:{color:"green"}},[t._v(t._s(e.answer))]),t._v("]")]),t._v(" "),s("td",{staticStyle:{color:"red"}},[t._v(t._s(e.time))])])]):t._e()})):s("van-notice-bar",{attrs:{text:"还没有搜藏任何题目哦~"}})],1)])],1),t._v(" "),s("div",[s("van-button",{attrs:{type:"primary",size:"large",plain:""},on:{click:function(e){t.showPop=!0}}},[t._v("自定义跳转页")]),t._v(" "),s("van-popup",{attrs:{position:"bottom"},model:{value:t.showPop,callback:function(e){t.showPop=e},expression:"showPop"}},[s("van-picker",{attrs:{"show-toolbar":"",columns:t.PageList},on:{confirm:t.onSelectPage,cancel:function(e){t.showPop=!1}}})],1),t._v(" "),s("van-pagination",{staticStyle:{"margin-bottom":"25%"},attrs:{"page-count":t.pageCount,mode:"simple"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])},staticRenderFns:[]};var K=s("VU/8")(Y,Z,!1,function(t){s("xOAz")},null,null).exports,J={name:"login",data:function(){return{username:localStorage.getItem("username"),password:localStorage.getItem("password"),token:localStorage.getItem("token"),passwordConfirm:null,isLogin:!1}},activated:function(){this.$emit("updataTitle",3)},computed:{pwdConfirm:function(){return this.password!=this.passwordConfirm?"两次输入的密码不一致！":null},pwdErr:function(){var t=this.password;return t?t.length<6?"密码长度必须大于6位！":null:"请输入密码"},usrErr:function(){var t=this.username;if(!t)return"请输入用户名";return t.includes(" ")?(this.username=this.username.replace(" ",""),"用户名不允许出现空格！"):t.length<6?"用户名长度至少6位！":null}},methods:{login:function(){var t=this.username,e=this.password;if(t)if(t){var s=this;this.axios.get("http://132.232.7.38/login.php",{params:{username:this.username,password:this.password}}).then(function(n){var a=n.data.info,o=(n.data.code,n.data.token);"success"==a?(s.saveUserInfo(t,e,o),s.$toast.success("登录成功"),location.reload()):s.$toast.fail("登录失败")})}else this.$toast.fail({message:"请输入密码",duration:600});else this.$toast.fail({message:"请输入用户名",duration:600})},reg:function(){},saveUserInfo:function(t,e,s){localStorage.setItem("username",t),localStorage.setItem("password",e),localStorage.setItem("token",s)},beforeClose:function(t,e){if(console.log("before"),"cancel"==t&&e(),!this.username)return this.$toast.fail("请输入账号！"),void e(!1);if(this.username.length<6)return this.$toast.fail("账号长度最少6位！"),void e(!1);if(!this.password)return this.$toast.fail("请输入密码！"),void e(!1);if(this.password.length<6)return this.$toast.fail("密码最少6位！"),void e(!1);if(this.password!=this.passwordConfirm)return this.$toast.fail("两次输入密码不一致！"),void e(!1);var s=this;if("confirm"===t){this.axios.get("http://132.232.7.38/reg.php",{params:{username:s.username,password:s.password}}).then(function(t){"1"==t.data?s.$toast.success("注册成功，请登录~"):s.$toast.fail("注册失败，用户名可能已存在。")}).catch(function(t){s.$toast.fail("网络错误！")}),e()}else e()}}},tt={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[s("h4",[t._v("未登录，请登录或注册~")]),t._v(" "),s("van-cell-group",[s("van-field",{attrs:{label:"账号","left-icon":"contact",type:"text",placeholder:"请输入账号","error-message":"",border:""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),s("van-field",{attrs:{label:"密码","left-icon":"idcard",type:"password",placeholder:"请输入密码",border:""},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),t.isLogin?t._e():s("van-button",{staticStyle:{width:"98%"},attrs:{size:"large",type:"primary"},on:{click:t.login}},[t._v("登录")]),t._v(" "),s("van-dialog",{attrs:{"confirm-button-text":"注册","show-cancel-button":"","before-close":t.beforeClose},model:{value:t.isLogin,callback:function(e){t.isLogin=e},expression:"isLogin"}},[s("van-field",{attrs:{label:"用户名","error-message":t.usrErr,placeholder:"请输入用户名"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),s("van-field",{attrs:{type:"password","error-message":t.pwdErr,label:"密码",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),s("van-field",{attrs:{type:"password","error-message":t.pwdConfirm,label:"密码",placeholder:"再次确认密码"},model:{value:t.passwordConfirm,callback:function(e){t.passwordConfirm=e},expression:"passwordConfirm"}})],1),t._v(" "),s("div",{staticStyle:{"text-align":"auto"}},[s("a",{staticStyle:{float:"left"},on:{click:function(e){t.isLogin=!t.isLogin}}},[t._v("没有账号？点我注册")]),t._v(" "),s("a",{staticStyle:{float:"right"},on:{click:function(e){t.$toast("联系作者QQ:861729091，下面有按钮可直达~")}}},[t._v("忘记密码？")])]),t._v(" "),s("br")],1),t._v(" "),t._m(0)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticStyle:{"text-align":"left",bottom:"0px"},attrs:{id:"msg"}},[s("br"),t._v("\n        题库来源于"),s("strong",{staticStyle:{color:"blue"}},[t._v("万维考试系统")]),t._v("，\n\t\t\t\t于18年3月更新，非网传旧题库，如有侵权请\n\t\t\t\t"),s("a",{staticStyle:{color:"blue"},attrs:{href:"http://wpa.qq.com/msgrd?v=3&uin=861729091&menu=yes"}},[t._v("联系作者。")]),t._v(" "),s("br"),t._v("\n\t\t\t\t作者是一名2018计算机技能高考考生，技能总分487，现就读于湖北理工学院。\n\t\t\t\t本人绝非炫耀，只是提醒你，题目"),s("strong",[t._v("来之不易。")]),t._v(" "),s("br"),t._v("\n        没有万维考试系统的同学，用这套系统做题也没差别。\n        "),s("br"),t._v(" "),s("img",{staticStyle:{width:"150px",height:"150px"},attrs:{src:"https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike150%2C5%2C5%2C150%2C50/sign=ca5bbf21c4cec3fd9f33af27b7e1bf5a/72f082025aafa40f38b28c30ac64034f79f019e2.jpg"}})])}]};var et=s("VU/8")(J,tt,!1,function(t){s("gkOn")},null,null).exports,st={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("van-tabs",[s("van-tab",{attrs:{title:"本科"}},[s("table",{staticStyle:{width:"100%"}},[s("tbody",[t._l(t.ben_data,function(e,n){return[s("tr",[s("td",{staticStyle:{"text-align":"center","font-weight":"bold"},attrs:{colspan:"4"}},[t._v(" ↓↓"+t._s(e.school)+"↓↓ \n                                "),s("br"),t._v(" "),s("span",{style:n<=3?"color: red":""},[t._v("\n                                "+t._s(e.xz)+"\n                                ")])])]),t._v(" "),s("tr",[s("td",[t._v("2015")]),t._v(" "),s("td",[t._v("2016")]),t._v(" "),s("td",[t._v("2017")]),t._v(" "),s("td",[t._v("2018")])]),t._v(" "),s("tr",t._l(e.line,function(e,n){return s("td",{key:n},[e?[t._v("\n                                    "+t._s(e)+"\n                                ")]:[s("span",{staticStyle:{color:"blue"}},[t._v("未招")])]],2)}))]})],2)])]),t._v(" "),s("van-tab",{attrs:{title:"专科"}},[s("p",{staticStyle:{"font-weight":"bold"}},[t._v("数据量比较大，排版太麻烦，请下载表格食用。")]),t._v(" "),s("a",{attrs:{href:"http://132.232.7.38/files/2018zk.xlsx",download:"2018专科投档线"}},[t._v("点我下载excel表格")])]),t._v(" "),s("van-tab",{attrs:{title:"其他资料"}},[s("p",{staticStyle:{"font-weight":"bold"}},[t._v("都是excel表格，点击文字下载。")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://132.232.7.38/files/ttlx.xlsx",download:"天天乐学2545题库.xlsx"}},[t._v("天天乐学2545题库")])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://132.232.7.38/files/2018mf.xlsx",download:"2018技能申请满分情况.xlsx"}},[t._v("2018技能申请满分情况")])]),t._v(" "),s("p",[s("a",{attrs:{href:"http://132.232.7.38/files/2018bktjt.xlsx",download:"历年投档线走势图表.xlsx"}},[t._v("历年投档线走势图表")])])])],1)],1)},staticRenderFns:[]},nt=s("VU/8")({data:function(){return{ben_data:[{school:"湖北理工学院",line:[610,632,628,645],xz:"公立二本"},{school:"武汉商学院",line:[612,632,634,644],xz:"公立二本"},{school:"湖北文理学院",line:[598,622,621,639],xz:"公立二本"},{school:"荆楚理工学院",line:[599,621,622,638],xz:"公立二本"},{school:"武昌首义学院",line:[,598,615,635],xz:"民办二本"},{school:"武汉华夏理工学院",line:[,604,600,627],xz:"民办二本"},{school:"武昌理工学院",line:[,599,600,627],xz:"民办二本"},{school:"武汉生物工程学院",line:[572,596,593,623],xz:"民办二本"},{school:"武汉工商学院",line:[569,592,594,622],xz:"民办二本"},{school:"湖北工业大学工程技术学院",line:[,577,589,618],xz:"民办二本"},{school:"湖北商贸学院",line:[570,598,591,618],xz:"民办二本"},{school:"武汉工程科技学院",line:[567,587,585,618],xz:"民办二本"},{school:"湖北大学知行学院",line:[569,594,585,616],xz:"民办二本"},{school:"武昌工学院",line:[568,582,585,615],xz:"民办二本"},{school:"湖北民族学院科技学院",line:[,,584,614],xz:"民办二本"},{school:"武汉科技大学城市学院",line:[,580,589,,],xz:"民办二本（不招了）"},{school:"汉口学院",line:[586,600,596,,],xz:"民办二本（不招了）"},{school:"湖北汽车工业学院",line:[598,621,,,],xz:"公立一本（不招了）"},{school:"武汉东湖学院",line:[591,,,,],xz:"民办二本（不招了）"},{school:"湖北工业大学",line:[621,,,,],xz:"公立一本（不招了）"}]}},activated:function(){this.$emit("updataTitle",2)}},st,!1,null,null,null).exports;T.a.use(Q.a);var at=new Q.a({routes:[{path:"/info",name:"数据",component:nt},{path:"/",name:"home",component:V},{path:"/user",name:"user",component:localStorage.getItem("username")&&localStorage.getItem("token")?W:et},{path:"/search",name:"search",component:X},{path:"/marked",name:"marked",component:K}]});T.a.use(z.a,A.a),T.a.use(_.a).use(g.a).use(b.a).use(w.a).use(y.a).use(x.a).use(k.a).use(q.a).use(S.a).use(C.a),T.a.use(h.a).use(d.a).use(v.a).use(p.a).use(f.a).use(m.a),T.a.use(o.a).use(i.a).use(r.a).use(l.a).use(c.a).use(u.a),T.a.use(n.a).use(a.a),T.a.config.productionTip=!1,new T.a({el:"#app",router:at,components:{App:E},template:"<App/>"})},OBwy:function(t,e){},OHT1:function(t,e){},T2fd:function(t,e){},ZmGI:function(t,e){},cJl5:function(t,e){},dSDO:function(t,e){},f4F5:function(t,e){},"g/xu":function(t,e){},gkOn:function(t,e){},kyYV:function(t,e){},lbtJ:function(t,e){},mx3f:function(t,e){},"oiM+":function(t,e){},tV7Q:function(t,e){},uvvn:function(t,e){},wA3Z:function(t,e){},xOAz:function(t,e){},znX2:function(t,e){}},["NHnr"]);