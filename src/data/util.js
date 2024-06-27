export const transformProject = (value = {}) => {
    const images = value.assets || value.images || [];

    const links = value.links || [];
    const videos = value.videos || [];
    return {
        image: images?.[0] || '',
        link: links?.[0] || '',
        video: videos?.[0] || '',
        images,
        title: value.title,
        description: value.descr || value.description,
        tags: value.tags,
        links,
        sizes: value.sizes,
        ...(value?.imageBgColor && { imageBgColor: value?.imageBgColor }),
    };
};

export const filterAndSort = (_a, sort = true) => {
    let list = _a.filter(({ tags }) => !tags.includes('exclude'));
    if (sort) {
        list = list.sort((a, b) => (a.title < b.title ? -1 : 1));
    }
    return list;
};

export const template = {
    tags: ['vrbo', 'proto', 'ds'],
    id: '',
    title: '',
    role: '',
    descr: '',
    format: [],
    assets: [
        {
            label: '',
            id: '',
            type: 'image',
            uri: '',
        },
    ],
    links: [
        {
            label: '',
            id: '',
            url: '',
        },
    ],
};

export const createList = (images, titles, imagePrefix = '') =>
    images.map((image, i) => {
        const title = titles[i];
        const id = title.split(' ').join('').toLowerCase();
        return {
            ...template,
            title,
            id,
            assets: [
                {
                    label: '',
                    id,
                    type: 'image',
                    uri: `${imagePrefix ? imagePrefix + '/' : ''}${image}`,
                },
            ],
        };
    });
