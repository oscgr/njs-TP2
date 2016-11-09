const router = require('express').Router()
const db = require('sqlite')
const Session = require('../models/session')

router.get('/', (req, res, next) => {
	console.log("DEBUG OK")
	next()
})




//
// 	Session.checkAccess(req.cookies.accessToken).then((result) => {
// 		if (result !== false) {
// 			db.get("SELECT userId FROM sessions WHERE accessToken = ?", req.cookies.accessToken)
// 				.then((session) => {
// 					return db.all("SELECT * FROM todos WHERE userId = ? ORDER BY completedAt", session.userId)
// 				}).then((todolist) => {
// 					res.format({
// 						html: () => {
// 							res.send(
// 								res.render('todo.ejs', {
// 									todolist: todolist
// 								})
// 							)
// 						},
// 						json: () => {
// 							res.send(todolist)
// 						}
// 					})
// 				})
// 		} else {
// 			res.redirect('./')
// 		}
// 	})
// })
//
// /* On ajoute un élément à la todolist */
// router.post('/ajouter/', (req, res, next) => {
// 	if (req.body.newtodo != '') {
// 		Session.checkAccess(req.cookies.accessToken).then((result) => {
// 			if (result !== false) {
// 				console.log("Ajout d'une todo, redirection")
// 				let d = new Date()
// 				let dateNow = d.toLocaleDateString()
//         require('crypto').randomBytes(48, function(err, buffer) {
//           db.run("INSERT INTO todos VALUES (?, ?, ?, ?, ?, ?)", buffer.toString('hex'), result.userId, req.body.newtodo, dateNow, dateNow, 0)
//           res.redirect('/')
//         })
// 			} else {
// 				console.log('Acces refusé')
// 				let error = new Error('Forbidden')
// 				error.status = 403
// 				next(error)
// 			}
// 		})
// 	} else {
// 		console.log('Todo vide')
// 		res.redirect('/')
// 	}
// })
//
// router.get('/completer/:todoId', (req, res, next) => {
// 	Session.checkAccess(req.cookies.accessToken).then((resultAccess) => {
// 		if (resultAccess !== false) {
// 			let checkVars = [req.cookies.accessToken, req.params.todoId]
// 			Session.checkAccessOfTodo(checkVars).then((resultTodo) => {
//         if (resultTodo !== false) {
//           let d = new Date()
//   				let dateNow = d.toLocaleString()
//           console.log("Todo fini : ", req.params.todoId)
//           db.run("UPDATE todos SET completedAt = ? WHERE todoId = ?", dateNow, req.params.todoId)
//           res.redirect('/')
//         } else {
//           console.log('Accès refusé à ce todo')
//     			let error = new Error('Forbidden')
//     			error.status = 403
//     			next(error)
//         }
//
// 			})
// 		} else {
// 			console.log('Accès refusé')
// 			let error = new Error('Forbidden')
// 			error.status = 403
// 			next(error)
// 		}
// 	})
// })
//
// router.get('/supprimer/:todoId', (req, res, next) => {
// 	Session.checkAccess(req.cookies.accessToken).then((resultAccess) => {
// 		if (resultAccess !== false) {
// 			let checkVars = [req.cookies.accessToken, req.params.todoId]
// 			Session.checkAccessOfTodo(checkVars).then((resultTodo) => {
//         if (resultTodo !== false) {
//           db.run("DELETE FROM todos WHERE todoId = ?", req.params.todoId)
//           console.log("todo supprimé : ", req.params.todoId)
//           res.redirect('/')
//         } else {
//           console.log('Accès refusé à ce todo')
//     			let error = new Error('Forbidden')
//     			error.status = 403
//     			next(error)
//         }
// 			})
// 		} else {
// 			console.log('Accès refusé')
// 			let error = new Error('Forbidden')
// 			error.status = 403
// 			next(error)
// 		}
// 	})
// })

module.exports = router