type Children = unknown;
type Key = string | number;
type Parent = Children;
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
    return children.forEach((value, index) =>
      traverse(value, index, children, replacer),
    );
  }

  if (children instanceof Object) {
    return Object.keys(children).forEach((key) => {
      const value = (children as Record<Key, Children>)[key];
      traverse(value, key, children, replacer);
    });
  }

  if (typeof replacer === 'function') {
    replacer(children, key, parent);
  }
}
