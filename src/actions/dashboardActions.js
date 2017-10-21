export const getDashboardCards = field => ({
    type: 'GET_DASH_BOARD_CARDS',
    field
});

export const gotDashboardCards = info => ({
    type: 'GOT_DASH_BOARD_CARDS',
    info
});