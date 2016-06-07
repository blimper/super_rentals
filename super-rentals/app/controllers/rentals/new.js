import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveRental: function(model) {
      model.save().then(() => this.transitionToRoute('rentals'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
