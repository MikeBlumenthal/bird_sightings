const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const sighting = this.createSighting(evt);
  PubSub.publish('SightingView:sighting-submitted', sighting);
  evt.target.reset();
};

SightingFormView.prototype.createSighting = function (form) {
  const newSighting = {
    species: form.target.species.value,
    location: form.target.location.value,
    date: form.target.date.value
  }
  return newSighting;
};

module.exports = SightingFormView;
