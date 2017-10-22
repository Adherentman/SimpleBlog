export const getDashboardCards = field => ({
    type: 'GET_DASH_BOARD_CARDS',
    field
});

export const gotDashboardCards = info => ({
    type: 'GOT_DASH_BOARD_CARDS',
    info
});

export const getDashboardChart = field => ({
    type: 'GET_DASH_BOARD_CHART',
    field
});

export const gotDashboardChart = info => ({
    type: 'GOT_DASH_BOARD_CHART',
    info
});


export const getDashboardBrowser = field => ({
    type: 'GET_DASH_BOARD_BROWSER',
    field
});

export const gotDashboardBrowser = info => ({
    type: 'GOT_DASH_BOARD_BROWSER',
    info
});