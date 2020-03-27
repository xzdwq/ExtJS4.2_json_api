Ext.application({
  name: 'ak101',
  appFolder: 'app',
  autoCreateViewport: true,
  models: ['ak101.model.Model'],
  views: ['ak101.view.Viewport'],
  controllers: ['ak101.controller.Controller'],
  stores: ['ak101.store.Store']
});