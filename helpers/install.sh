#!/bin/bash

if [ ! -d web ] && [ -f profile.make.yml ]; then
    /root/.composer/vendor/drush/drush/drush make profile.make.yml web -y \
    && ln -s /var/www/html/onepage /var/www/html/web/profiles/onepage \
    && chown -R www-data:www-data /var/www/html/web;
fi;
apache2ctl start;
tail -f /dev/null;
