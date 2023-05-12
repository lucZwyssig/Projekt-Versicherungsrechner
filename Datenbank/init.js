db = db.getSiblingDB('Saves');
db.createCollection('calculator');
db.createCollection('game')
db.createUser({
    user: 'user',
    pwd: 'user',
    roles: [
      { role: 'readWrite', db: 'Saves' }
    ]
  });

  
