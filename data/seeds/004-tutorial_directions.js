
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tutorial_directions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tutorial_directions').insert([
        {
          step_number: 1,
          instructions: 'get all the ingredients said in sandwich name plus two piece of bread',
          tutorial_id: 1
        },
        {
          step_number: 2,
          instructions: 'put peanut butter one side of bread jelly the other and smoosh',
          tutorial_id: 1
        },
        {
          step_number: 1,
          instructions: 'google stufff then cry a little',
          tutorial_id: 2
        },
        {
          step_number: 2,
          instructions: 'jsut keep on crying',
          tutorial_id: 2
        },
        {
          step_number: 1,
          instructions: 'go 1 then 2',
          tutorial_id: 3
        },
        {
          step_number: 2,
          instructions: 'and then 3 your there',
          tutorial_id: 3
        },
        {
          step_number: 1,
          instructions: 'stand near open shoes',
          tutorial_id: 4
        },
        {
          step_number: 2,
          instructions: 'jump into shoes',
          tutorial_id: 4
        },
        {
          step_number: 1,
          instructions: 'this one is open to interpretation',
          tutorial_id: 5
        },
        {
          step_number: 2,
          instructions: 'idk did you complete it or not ... hmmm?',
          tutorial_id: 5
        },
        {
          step_number: 1,
          instructions: 'two pieces of brea get it',
          tutorial_id: 6
        },
        {
          step_number: 2,
          instructions: 'put in toaster congrats you did it',
          tutorial_id: 6
        },
        {
          step_number: 1,
          instructions: 'figure out what specific thing you want to do',
          tutorial_id: 7
        },
        {
          step_number: 2,
          instructions: 'do it',
          tutorial_id: 7
        },
        {
          step_number: 1,
          instructions: 'yea thats real lazy step number 1',
          tutorial_id: 8
        },
        {
          step_number: 2,
          instructions: 'hats off to the lazy guy in the backend great todo looks complete congrats',
          tutorial_id: 8
        },
        {
          step_number: 1,
          instructions: 'hey you see that shoe video kinda the same thing',
          tutorial_id: 9
        },
        {
          step_number: 2,
          instructions: 'just walk right in if you please',
          tutorial_id: 9
        },
        {
          step_number: 1,
          instructions: 'perfect install npm if you dont already ',
          tutorial_id: 10
        },
        {
          step_number: 2,
          instructions: 'npm i cors in the terminal should get her installed',
          tutorial_id: 10
        },
      ]);
    });
};
