import { stringify } from './index';

export function PropsPrinter<T extends unknown>({ props }: { props: T }) {
  return `props: ${stringify(props)}`;
}
