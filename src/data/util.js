export const transformProject = (value = {}) => ({
    image: value.assets?.[0],
    title: value.title,
    description: value.descr,
    tags: value.tags,
});

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
