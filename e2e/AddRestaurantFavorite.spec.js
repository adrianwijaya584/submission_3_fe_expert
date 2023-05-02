/* eslint-disable new-cap */
const assert= require('assert');

Feature('Adding restaurant to favorite list');

Before(({I})=> {
  I.amOnPage('/#/favorites');
  I.wait(4);
});

Scenario(`Show favorite restaurant page with empty list`, ({I})=> {
  I.wait(0.5);
  I.seeElement('#restaurants');
  I.see('Daftar restoran favorit anda kosong.', '#restaurants');
});

Scenario(`Adding one restaurant to favorite list`, async ({I})=> {
  I.wait(0.5);
  I.see('Daftar restoran favorit anda kosong.', '#restaurants');

  I.amOnPage('/');
  I.wait(2);
  I.waitForElement('.restaurantCard .content h3');

  I.seeElement('.restaurantCard .content h3');
  const restaurantHeading= locate('.restaurantCard .content h3').first();
  const restaurantName= await I.grabTextFrom(restaurantHeading);

  I.seeElement('.restaurantCard .content a');
  I.click(locate('.restaurantCard .content a').first());

  I.wait(0.5);
  I.waitForElement('#favoriteButton');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');
  I.wait(0.5);
  I.waitForElement('.restaurantCard');
  I.seeElement('.restaurantCard');
  const likedRestaurantName=
    await I.grabTextFrom('.restaurantCard .content h3');
  assert.strictEqual(restaurantName, likedRestaurantName);

  I.seeElement('.restaurantCard .content a');
  I.click(locate('.restaurantCard .content a').first());

  I.wait(1);
  I.waitForElement('#favoriteButton');
  I.seeElement('#favoriteButton');
  I.click('#favoriteButton');

  I.amOnPage('/#/favorites');
  I.wait(1);
  I.see('Daftar restoran favorit anda kosong.', '#restaurants');
});
