import { Suburb101UIPage } from './app.po';

describe('suburb101-ui App', function() {
  let page: Suburb101UIPage;

  beforeEach(() => {
    page = new Suburb101UIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
