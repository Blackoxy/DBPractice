
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {firstName: 'Anhuelita', lastName: 'LaChica', hometown: 'Kazakhstan', prevOccupation: 'Masseuse', favoriteNum: 2, pastime: 'sleeping'},
        
      ]);
    });
};
