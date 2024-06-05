
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, task: 'Wash the dishes', completed: true},
    {id: 2, task: 'Clean my room', completed: false},
    {id: 3, task: 'Fold my washing', completed: false}
  ]);
};
