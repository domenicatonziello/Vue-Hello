/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

console.log('Vue OK', Vue);

const app = Vue.createApp({
    data(){
        return {
            message: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At doloremque delectus quis. Repudiandae consequuntur consectetur sequi et tenetur ipsa, numquam sed odio reprehenderit assumenda dolore, fuga, nostrum ut neque distinctio?',
            image: 'https://picsum.photos/200'
        }
    }
});
// monto in pagina
app.mount('#root');