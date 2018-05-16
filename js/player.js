soundManager.debugMode = false;
soundManager.preferFlash = false;
soundManager.useFlashBlock = true;
soundManager.flashVersion = 9;
soundManager.useHighPerformance = true;
soundManager.useFastPolling = true;

soundManager.onready(function(){

  var radio = soundManager.createSound({
   id: 'SoSertaneja',
   url: 'http://stm46.host100.net:23368/;',
   type: 'audio/aac',
   autoPlay: false,
   stream: true,
   autoLoad: false
  });
});

localStorage["SoSertaneja_radio_exec"]= 0;

chrome.browserAction.onClicked.addListener(function(activeTab) {

	if(localStorage["SoSertaneja_radio_exec"]==0)	{
    chrome.browserAction.setIcon({path: "images/on.png"});
    soundManager.load('SoSertaneja')
    soundManager.play('SoSertaneja')
    localStorage["SoSertaneja_radio_exec"] = 1;
	} else	{
	chrome.browserAction.setIcon({path: "images/off.png"});
	soundManager.stop('SoSertaneja')
	soundManager.unload('SoSertaneja')
	localStorage["SoSertaneja_radio_exec"] = 0;
	}

});