var conn = require("./db");
const moment = require('moment');

module.exports = {

    render(req, res, error, sucess){

    res.render('reservation', {
        title: 'Reservas - Restaurante Melhor Sabor',
        background: 'images/img_bg_2.jpg',
        h1: 'Reserve uma Mesa!!!',
        body: req.body,
        error,
        sucess
      });

    },

   
  formatDateForMySQL(dateString) {
        // Supondo que dateString está no formato 'DD/MM/YYYY'
        const formattedDate = moment(dateString, 'DD/MM/YYYY').format('YYYY-MM-DD');
        return formattedDate;
      },



    save(fields) {
        return new Promise((resolve, reject) => {

            fields.date = this.formatDateForMySQL(fields.date);

 
          conn.query(
            `
            INSERT INTO tb_reservations (name, email, people, date, time)
            VALUES (?, ?, ?, ?, ?)
            `,
            [
              fields.name,
              fields.email,
              fields.people,
              fields.date,
              fields.time
            ],
            (err, results) => {
              if (err) {
                reject(err); // Rejeita a Promise se houver um erro na query
              } else {
                resolve(results); // Resolve a Promise com os resultados da query
              }
            }
          );
        });
      }
    }