import type { types } from "@marko/compiler";

export function getLocFromNode(
  node?: types.Node,
  last?: boolean,
): types.SourceLocation | undefined {
  if (!node) {
    return undefined;
  }

  if (node.loc) {
    return node.loc;
  }

  if (!("body" in node)) {
    return undefined;
  }

  if (Array.isArray(node.body)) {
    return getLocFromNode(node.body[last ? node.body.length - 1 : 0]);
  }

  if (node.body) {
    return getLocFromNode(node.body);
  }
}
