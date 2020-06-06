'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
// rota padrão
// Route.on('/').render('welcome')
//rota home
Route.on('/').render('home')
Route.on('/tasks').render('tasks')
// // 1º forma de uma rota
// Route.get('/test', () => 'hello world !!! nova stack ')
// // 2º forma de uma rota retorna o id
// Route.get('/test/:id',
//    function({params}) {
//         return `this is id ${params.id}`;
//     }
// )
// //chamar rota task
// Route.get('task','TaskController.index')
