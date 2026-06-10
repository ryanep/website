export const normalizeProtocolRelativeUrl = (
  url: null | string | undefined
) => {
  if (!url) {
    return undefined;
  }

  return url.startsWith("//") ? `https:${url}` : url;
};
