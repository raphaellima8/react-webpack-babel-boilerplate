import { Key } from 'protractor';
import MainPage from './Main.po';

describe('Main Page E2E', () => {
  beforeEach(() => {
    MainPage.loadPage();
  });

  it('should have correct title', async () => {
    expect(await MainPage.getTitle()).toEqual('mmartan');
  });

  it('header should contains logo title and search input', () => {
    const childrenElems = ['h1', 'input', 'i'];
    childrenElems.forEach(async (elem, index) => {
      const childElem = await MainPage.getChildrenElementsByParentTagName(
        'header',
        elem
      );
      if (index === 1) {
        expect(childElem.getAttribute('type')).toBe('search');
        expect(childElem.getAttribute('placeholder')).toBe('Buscar produto');
      }
      expect(childElem.getTagName()).toBe(childrenElems[index]);
    });
  });

  it('page description should show a default text', async () => {
    const childElem = await MainPage.getChildrenElementsByParentTagName(
      'main',
      'div h2'
    );
    expect(childElem.getText()).toBe('Lista de produtos');
  });

  it('should update text when delete one character of search term', async () => {
    await MainPage.getElementByTagName('input').sendKeys('Edredom');
    let childElem = await MainPage.getChildrenElementsByParentTagName(
      'main',
      'div h2'
    );
    expect(childElem.getText()).toBe('Edredom');
    await MainPage.getElementByTagName('input').sendKeys(Key.BACK_SPACE);
    childElem = await MainPage.getChildrenElementsByParentTagName(
      'main',
      'div h2'
    );
    expect(childElem.getText()).toBe('Edredo');
  });

  it('page description should show the text that is typing on search input and back to default when clean field', async () => {
    await MainPage.getElementByTagName('input').sendKeys('Edredom');
    let childElem = await MainPage.getChildrenElementsByParentTagName(
      'main',
      'div h2'
    );
    expect(childElem.getText()).toBe('Edredom');
    await MainPage.getElementByTagName('input').sendKeys(
      Key.CONTROL,
      'a',
      Key.BACK_SPACE
    );
    childElem = await MainPage.getChildrenElementsByParentTagName(
      'main',
      'div h2'
    );
    expect(childElem.getText()).toBe('Lista de produtos');
  });
});
