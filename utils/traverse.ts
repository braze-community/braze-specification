type Children = any;
type Key = string | number;
type Parent = any;
type Replacer = (children: Children, key?: Key, parent?: Parent) => void;

/**
 * Traverse and mutate tree.
 */
export function traverse(
  children: Children,
  key: Key,
  parent: Parent,
  replacer: Replacer,
): void {
  if (Array.isArray(children)) {
    return children.forEach((value, key) => {
      replacer(value, key, children);
      traverse(value, key, children, replacer);
    });
  }

  if (children instanceof Object) {
    return Object.keys(children).forEach((key) => {
      const value = (children as Record<Key, Children>)[key];
      replacer(value, key, children);
      traverse(value, key, children, replacer);
    });
  }

  replacer(children, key, parent);
}
