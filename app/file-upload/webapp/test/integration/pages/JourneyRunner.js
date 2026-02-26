sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"fileupload/test/integration/pages/FilesList",
	"fileupload/test/integration/pages/FilesObjectPage"
], function (JourneyRunner, FilesList, FilesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('fileupload') + '/test/flpSandbox.html#fileupload-tile',
        pages: {
			onTheFilesList: FilesList,
			onTheFilesObjectPage: FilesObjectPage
        },
        async: true
    });

    return runner;
});

