function doWork(){
    for(var i=1; i<=10000;i++){
        for(var j=0; j<10000;j++)
            for(var k=0; k<100;k++)
            {}
        if (i % 100 === 0){
            var data = {
                type : "progress",
                percentCompleted : (i / 100)
            };
            self.postMessage(data);
        }
    }
}
self.addEventListener("message", function(evtArg){
    if (evtArg.data === "start"){
        doWork();
        self.postMessage({type : "done"});
    } else {
        console.log("unknown message", evtArg);
    }
});