export const getPhotos = field => ({
    type: 'GET_PHOTOS',
    field
});

export const gotPhotos = photos => ({
    type: 'GOT_PHOTOS',
    photos
})