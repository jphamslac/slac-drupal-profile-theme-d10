<?php

/**
 * @file
 * Form-related hook implementations.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function gesso_preprocess_input(array &$variables) {
  $variables['is_required'] = isset($variables['element']['#required']) ? $variables['element']['#required'] : NULL;
  $variables['type'] = isset($variables['element']['#attributes']['type']) ? $variables['element']['#attributes']['type'] : NULL;
  $variables['dropbutton'] = isset($variables['element']['#dropbutton']) ? $variables['element']['#dropbutton'] : NULL;
}

/**
 * Implements hook_preprocess_HOOK().
 */
function gesso_preprocess_fieldset(array &$variables) {
  $variables['type'] = isset($variables['element']['#type']) ? $variables['element']['#type'] : 'fieldset';
  $variables['is_disabled'] = isset($variables['element']['#disabled']) ? $variables['element']['#disabled'] : NULL;
}

/**
 * Implements hook_preprocess_HOOK().
 */
function gesso_preprocess_form_element(array &$variables) {
  $variables['is_required'] = isset($variables['element']['#required']) ? $variables['element']['#required'] : NULL;
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function gesso_theme_suggestions_container_alter(array &$suggestions, array $variables) {
  $array_parents = isset($variables['element']['#array_parents']) ? $variables['element']['#array_parents'] : NULL;

  // Add parents as template suggestions.
  if (isset($array_parents)) {
    $ancestors = [];

    foreach ($array_parents as $value) {
      if (is_string($value)) {
        $ancestors[] = $value;
        $suggestions[] = 'container__' . implode('__', $ancestors);
      }
    }
  }

  // Add Views-related template suggestions.
  if (isset($variables['element']['#type']) && $variables['element']['#type'] !== 'container') {
    $suggestions[] = 'container__' . $variables['element']['#type'];

    if (isset($variables['element']['#name'])) {
      $suggestions[] = 'container__' . $variables['element']['#type'] . '__' . $variables['element']['#name'];
    }
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function gesso_theme_suggestions_form_alter(array &$suggestions, array $variables) {
  if (isset($variables['element']['#form_id'])) {
    $suggestions[] = 'form-item__' . $variables['element']['#form_id'];
  }
}

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function gesso_theme_suggestions_form_element_alter(array &$suggestions, array $variables) {
  $id = isset($variables['element']['#type']) ? $variables['element']['#id'] : NULL;
  $type = isset($variables['element']['#type']) ? $variables['element']['#type'] : NULL;

  if (isset($type)) {
    $suggestions[] = 'form-element__' . $type;
  }

  if (isset($id)) {
    $suggestions[] = 'form-element__' . $id;
  }
}