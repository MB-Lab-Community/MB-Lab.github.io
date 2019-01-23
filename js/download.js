function HandleDownload(version) {
	var platform = $("input[name='BuildPlatform']:checked").val();
	if(platform){
		var url = "https://github.com/coderespawn/prefabricator-ue4/releases/download/v" + version + "/Binaries-" + platform + "-" + version + "-Prefabricator.zip";
		window.location = url;
	}
}
