import pim_Element from "../pageElements/pim_Element";

export default class pimPageOject {
  constructor() {
    globalThis.pim_Elements = new pim_Element();
  }

  clickAddbutton() {
    clickElement(pim_Elements.pimaddButon());
  }
}
