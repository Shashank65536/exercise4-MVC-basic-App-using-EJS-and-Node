
const {DateTime} = require("luxon");
const stories = [
    {
        id: '1',
        title:'Story 1',
        content: 'Content regarding story 1',
        author: 'Author 1',
        createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)

    },
    {   id: '2',
        title:'Story 2',
        content: 'Content regarding story 2',
        author: 'Author 2',
        createdAt:  DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    },
    {   id: '3',
        title:'Story 3',
        content: 'Content regarding story 3',
        author: 'Author 3',
        createdAt:  DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
    }
];

// console.log(stories[0])

exports.find = () => {
    return stories;
};

exports.findById = (id) =>{
    return stories.find(story => story.id === id);
}

