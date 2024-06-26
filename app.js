
var assignement = [
    {
        title: "Gun Album",
        code: "https://github.com/Taimoor-Kamran/Sir-Uzair-Js-Assignment/tree/main/Gun%20Album",
        link: "https://silly-bonbon-c7539b.netlify.app/",
        date: "13-May-2024",
        description: "Guns Album G3, Ak47, Glock(20, '6'), MG"
    },
    {
        title: "Student Report",
        code: "https://github.com/Taimoor-Kamran/Sir-Uzair-Js-Assignment/tree/main/Progress_Report",
        link: "https://nimble-kitsune-832b9f.netlify.app/",
        date: "10-May-2024",
        description: "Biek Board of Intermatedit Education Karachi"
    },
    {
        title: "Stop Watch",
        code: "https://github.com/Taimoor-Kamran/Sir-Uzair-Js-Assignment/tree/main/Stop%20Watch",
        link: "https://6653c982165fa1f5d6e85098--dapper-daffodil-b4c48a.netlify.app/",
        date: "15-May-2024",
        description: "Eid-ul-Azha Count Down Timer"
    },
    {
      title: "Quill Text Editor",
      code: "https://github.com/Taimoor-Kamran/Sir-Uzair-Js-Assignment/tree/main/Quill%20Text%20Editor",
      link: "https://66567cc7bdcd1117764fd7ec--fascinating-sorbet-d4f3dd.netlify.app/",
      date: "17-May-2024",
      description: "Quill Text Edit your Text"
  }
    
] 

var assignList = document.getElementById('all-assignment')

for(var i = 0; i < assignement.length; i++){
    var div = `<div class="p-4 md:w-1/3">
    <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <div class="p-6">
        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${assignement[i].title}</h1>
        <p class="leading-relaxed mb-3">${assignement[i].description}</p>
        <div class="flex items-center flex-wrap ">
          <a href="${assignement[i].link}" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Check Production
            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
          <a href="${assignement[i].code}"></a>  
          <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>1.2K
          </span>
          <span class="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>6
          </span>
        </div>
      </div>
    </div>`
    assignList.innerHTML += div
}