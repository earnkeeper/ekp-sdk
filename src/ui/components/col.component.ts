import { DefaultProps } from '../default-props';
import { UiElement } from '../ui-element';

export function Col(props?: ColProps): UiElement {
  return {
    _type: 'Col',
    props,
  };
}

export interface ColProps extends DefaultProps {
  children: UiElement[];
}
