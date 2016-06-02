import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    },
    show() {
      this.controller.getProperties('id');
    },
    deleteRental(rental) {
      const title = rental.get('title');
      if (confirm(`This will delete ${title}! Do you want to proceed?`)) {
        rental.destroyRecord();
      }
    }
  }
});
