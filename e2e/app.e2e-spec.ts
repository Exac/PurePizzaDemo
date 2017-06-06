import { PurePizzaDemoPage } from './app.po';

describe('pure-pizza-demo App', () => {
  let page: PurePizzaDemoPage;

  beforeEach(() => {
    page = new PurePizzaDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
