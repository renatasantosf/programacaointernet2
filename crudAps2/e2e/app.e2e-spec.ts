import { CrudAps2Page } from './app.po';

describe('crud-aps2 App', () => {
  let page: CrudAps2Page;

  beforeEach(() => {
    page = new CrudAps2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
