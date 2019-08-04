module.exports = app => {
  const Users = app.db.models.Users;

  app
    .route("/users")
    .post((req, res) => {
      Users.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .get((req, res) => {
      Users.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });

  app
    .route("/users/:id")
    .get((req, res) => {
      Users.findById(req.params.id, {
        attributes: ["id", "name", "email"]
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .put((req, res) => {
      Users.update(req.body, { where: req.params })
        .then(result => res.status(204).json({ msg: "task was update" }))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    })
    .delete((req, res) => {
      Users.destroy({ where: { id: req.params.id } })
        .then(result => res.json({ msg: "task delete" }))
        .catch(error => {
          res.status(412).json({ msg: error.message });
        });
    });
};
