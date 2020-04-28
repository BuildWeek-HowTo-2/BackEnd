
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tutorials').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tutorials').insert([
        {
          title: "How to make a pb&j",
          summary:
            "you should be able to make a pb&j after these important steps.",
          likes: 2,
          instructor_id: 1
        },
        {
          title: "How to make code",
          summary:
            "im not acutally gunna teach you that lets just cry instead.",
          likes: 2,
          instructor_id: 3
        },
        {
          title: "How to count to 3",
          summary:
            "to summarize we will end at three see the steps for more info.",
          likes: 2,
          instructor_id: 2
        },
        {
          title: "how to put on your shoes",
          summary:
            "lets cut a step out this time summary is a cheat sheet find some shoes.",
          likes: 2,
          instructor_id: 4
        },
        {
          title: "how to do somethin idk",
          summary:
            "see the steps idk.",
          likes: 0,
          instructor_id: 5
        },
        {
          title: "How to make a toast",
          summary:
            "toast will be made today.",
          likes: 2,
          instructor_id: 1
        },
        {
          title: "how to do a specific thing",
          summary:
            "sooo spacific it doesnt get a proper summary wait what.",
          likes: 5,
          instructor_id: 3
        },
        {
          title: "How to count to 4",
          summary:
            "this instructor is like sooo  helpful glad to have you on board Ash.",
          likes: 2,
          instructor_id: 2
        },
        {
          title: "how to put on your sandals",
          summary:
            "someone is getting real lazy seeding this data blame harrison he did it forsure.",
          likes: 2,
          instructor_id: 4
        },
        {
          title: "hot to npm install cors",
          summary:
            "steps to npm i cors.",
          likes: 2,
          instructor_id: 5
        },
      ]);
    });
};
