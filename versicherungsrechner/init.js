db = db.getSiblingDB('Saves');
db.createCollection('saves');
db.createUser({
    user: 'user',
    pwd: 'user',
    roles: [
      { role: 'readWrite', db: 'Saves' }
    ]
  });
