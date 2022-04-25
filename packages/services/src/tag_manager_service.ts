/*
* This tag manager service just helps with the programmatic way of sending events to google tag manager
* First you will have to configure and add gtm scripts for this service to work.
* More info here: https://www.notion.so/mrmilu/Integraci-n-GTM-4c005048b39845bc9e71b5827e3d7d0b
*/

class TagManagerService {
  private readonly dataLayer: Array<unknown> | null = null;

  constructor() {
    if (typeof window !== "undefined" && !window.dataLayer) {
      this.dataLayer = window.dataLayer || [];
    }
  }

  sendEvent(name: string, parameters?: Record<string, string>): void {
    if (this.dataLayer) {
      this.dataLayer.push({ event: name, ...parameters });
    }
  }
}

export default TagManagerService