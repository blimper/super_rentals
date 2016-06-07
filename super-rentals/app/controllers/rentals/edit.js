import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRental: function(model) {
      model.save().then(() => this.transitionToRoute('rentals'));
    }
  }
});
