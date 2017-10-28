import { DigikartPage } from './app.po';

describe('digikart App', () => {
  let page: DigikartPage;

  beforeEach(() => {
    page = new DigikartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
