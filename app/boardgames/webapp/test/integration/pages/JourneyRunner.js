sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"boardgames/test/integration/pages/BoardGamesList",
	"boardgames/test/integration/pages/BoardGamesObjectPage"
], function (JourneyRunner, BoardGamesList, BoardGamesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('boardgames') + '/test/flp.html#app-preview',
        pages: {
			onTheBoardGamesList: BoardGamesList,
			onTheBoardGamesObjectPage: BoardGamesObjectPage
        },
        async: true
    });

    return runner;
});

