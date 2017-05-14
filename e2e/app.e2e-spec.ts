import { DrWebPage } from './app.po';

describe('dr-web App', () => {
  let page: DrWebPage;

  beforeEach(() => {
    page = new DrWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
