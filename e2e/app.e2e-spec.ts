import { YeaWebsitePage } from './app.po';

describe('yea-website App', () => {
  let page: YeaWebsitePage;

  beforeEach(() => {
    page = new YeaWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
