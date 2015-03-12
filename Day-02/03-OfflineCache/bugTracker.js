

        window.addEventListener('storage', loadBugsFromStorage);
        window.addEventListener("DOMContentLoaded",init);
        var bugStorage = getBugStorage();

        function init(){
            document.getElementById("btnAdd").addEventListener("click", onBtnAddClick);
            document.getElementById("btnRemoveClosed").addEventListener("click", onBtnRemoveClosedClick);

            loadBugsFromStorage();
        }

        function loadBugsFromStorage(){
            document.getElementById("olBugList").innerHTML = '';
            var allBugs = bugStorage.getAll();
            for(var i=0; i<allBugs.length; i++)
                addBugToList(allBugs[i]);
        }

        function onBtnAddClick(){
            var bugTitle = document.getElementById("txtTitle").value;
            var bugId = new Date().valueOf().toString();
            var newBug = bugStorage.add(bugTitle);
            addBugToList(newBug);
        }
        function addBugToList(bug){
            var newBug = document.createElement("li");
            newBug.setAttribute("bug-id", bug.id);
            newBug.innerHTML = bug.title;
            if (bug.isClosed)
                newBug.classList.add("closed");
            newBug.addEventListener("click", onBugItemClick);
            document.getElementById("olBugList").appendChild(newBug);
        }

        function onBugItemClick(){
            this.classList.toggle('closed');
            bugStorage.toggle(this.getAttribute("bug-id"));
        }
        function onBtnRemoveClosedClick(){
            var bugsList = document.getElementById("olBugList").children;
            for(var i=bugsList.length-1; i>=0; i--){
                if (bugsList[i].classList.contains("closed")){
                    var bugId = bugsList[i].getAttribute("bug-id");
                    bugStorage.remove(bugId);
                    bugsList[i].remove();
                }
            }
        }
