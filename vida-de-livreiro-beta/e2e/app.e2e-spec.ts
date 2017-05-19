import { VidaDeLivreiroBetaPage } from './app.po';

describe('vida-de-livreiro-beta App', () => {
  let page: VidaDeLivreiroBetaPage;

  beforeEach(() => {
    page = new VidaDeLivreiroBetaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
