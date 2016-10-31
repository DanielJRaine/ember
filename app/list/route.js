import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return [
            {
                title: 'Kittens',
                id: 1
            },
            {
                title: 'Mittens',
                id: 3
        }][params.list_id-1];
    },
});
