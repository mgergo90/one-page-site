<?php

/**
 * One page project profile
 */

 /**
  * Implements hook_install_tasks().
  */
 function onepage_install_tasks() {
  return array(
    'onepage_set_permissions' => array(
      'display_name' => st('Set user permissions'),
    ),
  );
 }

 /**
  * Set user permissions.
  */
function onepage_set_permissions() {
  // provide permissioms for anonymus users
  $anonymus_roles = array('access content');
  user_role_grant_permissions(DRUPAL_ANONYMOUS_RID, $anonymus_roles);
}
