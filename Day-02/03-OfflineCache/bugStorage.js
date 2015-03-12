 function getBugStorage(){
            var storage = window.localStorage;

            function loadBugsFromStorage(){
                var result = [];
                for(var i=0; i<storage.length; i++){
                    var bugId = storage.key(i);
                    var bugAsString = storage.getItem(bugId);
                    var bug = window.JSON.parse(bugAsString);
                    result.push(bug);
                }
                return result;

            }

            function addBugToStorage( bugTitle){
                var bugId = new Date().valueOf().toString();
                var newBug = {
                    id : bugId,
                    title : bugTitle,
                    isClosed : false
                };
                storage.setItem(bugId, window.JSON.stringify(newBug));
                return newBug;
            }

            function removeBugFromStorage(bugId){
                storage.removeItem(bugId);
            }

            function toggleBugInStorage(bugId){
                var bugAsString = storage.getItem(bugId);
                var bug = window.JSON.parse(bugAsString);
                bug.isClosed = !bug.isClosed;
                storage.setItem(bugId, window.JSON.stringify(bug));
            }

            return {
                add : addBugToStorage,
                remove : removeBugFromStorage,
                getAll : loadBugsFromStorage,
                toggle : toggleBugInStorage
            }

        }
