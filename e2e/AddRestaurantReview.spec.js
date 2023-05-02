/* eslint-disable new-cap */
// eslint-disable-next-line no-unused-vars
const assert= require('assert');

Feature('reviewing restaurant');

Scenario('send review', async ({I})=> {
  I.amOnPage('/');
  I.wait(2);
  I.waitForElement('.restaurantCard .content a');

  I.seeElement('.restaurantCard .content a');
  I.click(locate('.restaurantCard .content a').first());

  I.wait(2);
  I.waitForElement('form');
  I.fillField('[name="name"]', 'AdrianW');
  I.fillField('[name="review"]', 'halo ini dari e2e ya');
  I.click(locate('form button'));
});
