sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"boardgames/test/integration/pages/FilesList",
	"boardgames/test/integration/pages/FilesObjectPage"
], function (JourneyRunner, FilesList, FilesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('boardgames') + '/test/flpSandbox.html#boardgames-tile',
        pages: {
			onTheFilesList: FilesList,
			onTheFilesObjectPage: FilesObjectPage
        },
        async: true
    });

    return runner;
});

