var conn = require("./db");
module.exports = {

    render(req, res, error, sucess){

        res.render('contact', {
            title: 'Restaurante Melhor Sabor',
            background: 'images/img_bg_3.jpg',
            h1: 'Diga um oi!!',
            body: req.body,
            error,
            sucess
          });

    },

    save(fields) {
        return new Promise((resolve, reject) => {

            //fields.date = this.formatDateForMySQL(fields.date);

 
          conn.query(
            `
            INSERT INTO tb_contacts (name, email, message, register)
            VALUES (?, ?, ?, NOW())
            `,
            [
              fields.name,
              fields.email,
              fields.message,  
                          
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

