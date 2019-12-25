define('admin/plugins/sso-presen', ['settings'], function (Settings) {
  'use strict';
  /* globals $, app, socket, require */

  var ACP = {};

  ACP.init = function () {
    Settings.load('sso-presen', $('.sso-presen-settings'));

    $('#save').on('click', function () {
      Settings.save('sso-presen', $('.sso-presen-settings'), function () {
        app.alert({
          type: 'success',
          alert_id: 'sso-presen-saved',
          title: 'Settings Saved',
          message: 'Please reload your NodeBB to apply these settings',
          clickfn: function () {
            socket.emit('admin.reload');
          }
        });
      });
    });
  };

  return ACP;
});