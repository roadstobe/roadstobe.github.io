/**
 * My scripts
 */

const taskContainer = document.getElementById('tasksContainer');


function  makeRequest(data, id) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/tasks/important');
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.addEventListener('load', e=>{
        let result = JSON.parse(xhr.responseText);
        let card = document.querySelectorAll('.card').forEach(card=>{
            if(card.dataset.idcard === result[0].id){
                if(result[1].state){
                    card.classList.add('deep-orange');
                    card.classList.remove('blue-grey');
                    card.classList.remove('darken-1');
                }else{
                    card.classList.add('blue-grey');
                    card.classList.add('darken-1');
                    card.classList.remove('deep-orange');
                }
            }
        })
    });
    xhr.send(`state=${data}&id=${id}`);

}
if(taskContainer){
    taskContainer.addEventListener('click',e=>{
        if(e.target.classList.contains('isImportant')){
            // let data = e.target.classList.contains('isState') ? false : true;
            // console.log(e.target.dataset.id);
            let data = false;
            if(e.target.dataset.state == 'yes'){
                e.target.dataset.state = 'no';
                data = false;
            }else{
                e.target.dataset.state = 'yes';
                data = true
            }
             makeRequest(data, e.target.dataset.id);


        }
    });
}


/**
 * Materialize extra scripts
 */

M.Tabs.init(document.querySelectorAll('.tabs'));


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
});