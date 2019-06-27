import { browser, by, element } from 'protractor';

const MainPage = () => {
  return {
    loadPage: async () => {
      await browser.get('/');
      await browser.sleep(3000);
    },
    getTitle: async () => browser.getTitle(),
    getElementByTagName: tag => element(by.tagName(tag)),
    getChildrenElementsByParentTagName: (parentTagName, child) =>
      element(by.css(`${parentTagName} ${child}`)),
    takeScreenShot: async () => browser.takeScreenshot()
  };
};

export default MainPage();
