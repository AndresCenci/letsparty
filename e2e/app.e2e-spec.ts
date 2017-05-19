import { PartyTimePage } from './app.po';

describe('party-time App', function() {
  let page: PartyTimePage;

  beforeEach(() => {
    page = new PartyTimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
