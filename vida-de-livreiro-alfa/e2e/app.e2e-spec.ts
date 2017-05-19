import { VidaDeLivreiroAlfaPage } from './app.po';

describe('vida-de-livreiro-alfa App', () => {
  let page: VidaDeLivreiroAlfaPage;

  beforeEach(() => {
    page = new VidaDeLivreiroAlfaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
